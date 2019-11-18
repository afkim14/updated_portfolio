import React from 'react';
import PropTypes from 'prop-types';
import './SideWorkPage.css';
import { openLink } from '../Helpers';
import CustomButton from './CustomButton';

const ANIMATION_STATES = {
    INTRO: 'INTRO',
    PROJECTS: 'PROJECTS'
}

const wait = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

export default class SideWorkPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currAnimationState: this.props.skipIntro ? ANIMATION_STATES.PROJECTS : ANIMATION_STATES.INTRO,
            projectClicked: false,
            buttonsActive: false
        }
    }

    async componentDidMount() {
        if (this.props.skipIntro) {
            await wait(3000);
            this.setState({ buttonsActive: true });
        } else {
            await wait(4000);
            this.setState({ currAnimationState: ANIMATION_STATES.PROJECTS });
            await wait(3000);
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
            content = <p className="side-work-page-intro">But what I can talk about is ...</p>;
        } else if (this.state.currAnimationState === ANIMATION_STATES.PROJECTS) {
            content = (
                <div className={`${this.state.projectClicked && 'leave-home-animation'}`}>
                    <p className="side-work-page-title default-accent-color">Capsule</p>
                    <div className="side-work-page-info-container">
                        <CustomButton
                            className={'project-page-website-btn'}
                            text={'More info'}
                            onClick={() => {
                                this.animateThenGoTo('/capsule/sidework')
                            }}
                        />
                        <p className="side-work-page-quote">
                            {`"Send meaningful messages in an elegant way."`}
                        </p>
                    </div>
                    <div className="side-work-points-container">
                        <p className="side-work-page-header default-accent-color">Quick notes</p>
                        <ul className="project-page-keypoints-ul">
                            <li className="project-page-keypoints-li side-work-project-points">
                                <span>My most recent side project.</span>
                            </li>
                            <li className="project-page-keypoints-li side-work-project-points">
                                <span>
                                    Experimented with <p className="side-work-keyword default-accent-color">uncommon</p>{' '}
                                    design standards and powerful text-editing libraries like{' '}
                                    <p
                                        className="side-work-keyword side-work-link default-accent-color"
                                        onMouseDown={() => {
                                            openLink('https://draftjs.org');
                                        }}
                                    >
                                        Draft.js
                                    </p>
                                    .
                                </span>
                            </li>
                            <li className="project-page-keypoints-li side-work-project-points side-work-small-hidden-points">
                                <span>
                                    Continuously deployed and managed online cards with{' '}
                                    <p
                                        className="side-work-keyword side-work-link default-accent-color"
                                        onMouseDown={() => {
                                            openLink('https://firebase.google.com/');
                                        }}
                                    >
                                        Firebase
                                    </p>
                                    .
                                </span>
                            </li>
                            <li className="project-page-keypoints-li side-work-project-points side-work-small-hidden-points">
                                <span>
                                    Repeatedly tested with 10 users from early development to final product to make sure
                                    every incremental patch change was desired.
                                </span>
                            </li>
                        </ul>
                    </div>
                    {this.state.buttonsActive ? (
                        <div className="side-work-page-buttons-container">
                            <CustomButton
                                className={'side-work-page-go-back-btn'}
                                text={'Go back'}
                                onClick={() => {
                                    this.props.history.push('/work/skip');
                                }}
                            />
                            <CustomButton
                                className={'side-work-page-continue-btn'}
                                text={'Continue'}
                                inverted={true}
                                onClick={() => {
                                    this.props.history.push('/about')
                                }}
                            />
                        </div>
                    ) : (
                        <div className="side-work-page-buttons-container">
                            <CustomButton
                                className={'side-work-page-go-back-btn-inactive'}
                                text={'Go back'}
                                inactive={true}
                            />
                            <CustomButton
                                className={'side-work-page-continue-btn-inactive'}
                                text={'Continue'}
                                inactive={true}
                            />
                        </div>
                    )}
                </div>
            );
        }

        return (
            <div className="side-work-page-container">
                {content}
            </div>
        );
    }
}

SideWorkPage.propTypes = {
    imageColorFilter: PropTypes.string,
    imageColorHoverFilter: PropTypes.string,
    skipIntro: PropTypes.bool
};