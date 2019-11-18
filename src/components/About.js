import React from 'react';
import PropTypes from 'prop-types';
import './About.css';
import { openLink } from '../Helpers';
import CustomButton from './CustomButton';
import ProjectContainer from './ProjectContainer';
import { navigate } from 'hookrouter';

import monacoImg from '../assets/icons/monaco-01.png';
import mediumImg from '../assets/icons/medium-01.png';
import dailyUiImg from '../assets/icons/dailyui-01.png';

const ANIMATION_STATES = {
    INTRO: 'INTRO',
    INFO: 'INFO'
}

const wait = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currAnimationState: this.props.skipIntro ? ANIMATION_STATES.INFO : ANIMATION_STATES.INTRO,
            projectClicked: false,
            buttonsActive: false,
        }
    }

    async componentDidMount() {
        if (this.props.skipIntro) {
            await wait(3000);
            this.setState({ buttonsActive: true });
        } else {
            await wait(4000);
        this.setState({ currAnimationState: ANIMATION_STATES.INFO });
        await wait(3000);
        this.setState({ buttonsActive: true });
        }
    }

    animateThenGoTo(link) {
        this.setState({ projectClicked: true });
        setTimeout(() => {
            navigate(link);
        }, 800);
    }

    render() {
        let content = <p></p>;
        if (this.state.currAnimationState === ANIMATION_STATES.INTRO) {
            content = <p className="about-page-intro">I want to be more than an engineer ...</p>;
        } else if (this.state.currAnimationState === ANIMATION_STATES.INFO) {
            content = (
                <div className={`${this.state.projectClicked && 'leave-home-animation'}`}>
                    <p className="about-page-title default-accent-color">Other projects</p>
                    <p className="about-page-disclaimer">Pursuing my goal to not only be a strong developer but also a universal person.</p>
                    <div className="about-projects-container default-border default-border-color">
                        <ProjectContainer
                            img={monacoImg}
                            imgStyle={{ filter: this.props.imageColorFilter, width: '6%' }}
                            imgHoverStyle={{ filter: this.props.imageColorHoverFilter, width: '6%' }}
                            description={'Exhibition on the idea of virtual connectivity.'}
                            header={'MONACO Exhibition'}
                            onHeaderHover={() => {}}
                            onHeaderLeave={() => {}}
                            onHeaderClick={() => {
                                this.animateThenGoTo('/monaco/about')
                            }}
                            titleClassName={'about-project-title'}
                            descClassName={'about-project-desc'}
                        />
                        <ProjectContainer
                            img={dailyUiImg}
                            imgStyle={{ filter: this.props.imageColorFilter, width: '6%' }}
                            imgHoverStyle={{ filter: this.props.imageColorHoverFilter, width: '6%' }}
                            description={'UI designs for the dailyui.co 100-day challenge.'}
                            header={'Daily UI'}
                            onHeaderHover={() => {}}
                            onHeaderLeave={() => {}}
                            onHeaderClick={() => {
                                navigate('/dailyui/about')
                            }}
                            titleClassName={'about-project-title'}
                            descClassName={'about-project-desc'}
                        />
                        <ProjectContainer
                            img={mediumImg}
                            imgStyle={{ filter: this.props.imageColorFilter, width: '6%' }}
                            imgHoverStyle={{ filter: this.props.imageColorHoverFilter, width: '6%' }}
                            description={'Lack of information leads to distrust, uncertainty, and lazy user interaction.'}
                            header={'Design Based on Transparency'}
                            onHeaderHover={() => {}}
                            onHeaderLeave={() => {}}
                            onHeaderClick={() => {
                                openLink('https://medium.com/@fernandokim/design-based-on-transparency-9a64e6f49c41');
                            }}
                            titleClassName={'about-project-title'}
                            descClassName={'about-project-desc'}
                        />
                    </div>
                    {this.state.buttonsActive ? (
                        <div className="about-page-buttons-container">
                            <CustomButton
                                className={'about-page-go-back-btn'}
                                text={'Go back'}
                                onClick={() => {
                                    navigate('/sidework/skip')
                                }}
                            />
                            <CustomButton
                                className={'about-page-continue-btn'}
                                text={'Continue'}
                                inverted={true}
                                onClick={() => {
                                    navigate('/conclusion');
                                }}
                            />
                        </div>
                    ) : (
                        <div className="about-page-buttons-container">
                            <CustomButton
                                className={'about-page-go-back-btn-inactive'}
                                text={'Go back'}
                                inactive={true}
                            />
                            <CustomButton
                                className={'about-page-continue-btn-inactive'}
                                text={'Continue'}
                                inactive={true}
                            />
                        </div>
                    )}
                </div>
            );
        }

        return (
            <div className="about-page-container">
                {content}
            </div>
        );
    }
}

About.propTypes = {
    imageColorFilter: PropTypes.string,
    imageColorHoverFilter: PropTypes.string,
    skipIntro: PropTypes.bool
};