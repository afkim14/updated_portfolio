import React from 'react';
import PropTypes from 'prop-types';
import './WorkPage.css';
import CustomButton from './CustomButton';

const ANIMATION_STATES = {
    INTRO: 'INTRO',
    DEEPLOCAL: 'DEEPLOCAL'
}

const wait = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

export default class WorkPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currAnimationState: this.props.skipIntro ? ANIMATION_STATES.DEEPLOCAL : ANIMATION_STATES.INTRO,
            projectClicked: false,
            buttonsActive: false
        }
    }

    async componentDidMount() {
        if (this.props.skipIntro) {
            await wait(6000);
            this.setState({ buttonsActive: true });
        } else {
            await wait(4000);
            this.setState({ currAnimationState: ANIMATION_STATES.DEEPLOCAL });
            await wait(6000);
            this.setState({ buttonsActive: true });
        }
    }

    animateThenGoTo(link) {
        this.setState({ projectClicked: true });
        setTimeout(() => {
            this.props.history.push(link);
        }, 800);
    }

    render() {
        let content = <p></p>;
        if (this.state.currAnimationState === ANIMATION_STATES.INTRO) {
            content = <p className="work-page-intro">A little bit about where I work ...</p>;
        } else if (this.state.currAnimationState === ANIMATION_STATES.DEEPLOCAL) {
            content = (
                <div className={`${this.state.projectClicked && 'leave-home-animation'}`}>
                    <p className="work-page-title default-accent-color">Deeplocal</p>
                    <div className="work-page-info-container">
                        <CustomButton
                            className={'project-page-website-btn'}
                            text={'More info'}
                            onClick={() => {
                                this.animateThenGoTo('/deeplocal/work')
                            }}
                        />
                        <p className="work-page-quote">
                            {`"We are creative engineers who invent interactive experiences that tell human stories."`}
                        </p>
                    </div>
                    <div className="work-page-clients-container">
                        <p className="work-page-header default-accent-color">Selected Clients</p>
                        <p className="work-page-disclaimer">I have worked on Google and Equinox projects, but cannot disclose more as of now due to privacy concerns.</p>
                        <img className="work-page-client-img" src={'/assets/deeplocal-clients-01.png'} />
                    </div>
                    {this.state.buttonsActive ? (
                        <div className="work-page-buttons-container">
                            <CustomButton
                                className={'work-page-go-back-btn'}
                                text={'Go back'}
                                onClick={() => {
                                    this.props.history.push('/skip');
                                }}
                            />
                            <CustomButton
                                className={'work-page-continue-btn'}
                                text={'Continue'}
                                inverted={true}
                                onClick={() => {
                                    this.props.history.push('/sidework');
                                }}
                            />
                        </div>
                    ) : (
                        <div className="work-page-buttons-container">
                            <CustomButton
                                className={'work-page-go-back-btn-inactive'}
                                text={'Go back'}
                                inactive={true}
                            />
                            <CustomButton
                                className={'work-page-continue-btn-inactive'}
                                text={'Continue'}
                                inactive={true}
                            />
                        </div>
                    )}
                </div>
            );
        }

        return (
            <div className="work-page-container">
                {content}
            </div>
        );
    }
}

WorkPage.propTypes = {
    navigateTo: PropTypes.func,
    skipIntro: PropTypes.bool
};