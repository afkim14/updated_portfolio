import React from 'react';
import Fade from 'react-reveal/Fade';
import { openLink } from '../Helpers';
import { navigate } from 'hookrouter';
import './ProjectScreenStyle.css';
import './Monaco.css';

import CustomButton from './CustomButton';

export default class Monaco extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goBackClicked: false,
        };
        this.animateThenGoTo = this.animateThenGoTo.bind(this);
    }

    animateThenGoTo(link) {
        this.setState({ goBackClicked: true });
        setTimeout(() => {
            navigate(link);
        }, 300);
    }

    render() {
        return (
            <div className={`${this.state.goBackClicked && 'project-page-back-animation'}`}>
                <div
                    className="project-page-back-container default-back-background"
                    onMouseDown={() => {
                        this.animateThenGoTo('/');
                    }}
                >
                    <p className="project-page-back-text">GO BACK</p>
                </div>
                <div className="project-page-container">
                    <div className="projet-page-top-container">
                        <div className="project-page-title-container">
                            <p className="project-page-header default-hovercolor">Monaco</p>
                            <p className="project-page-role">Software Engineer Artist</p>
                            <CustomButton
                                className={'project-page-website-btn'}
                                text={'WEBSITE'}
                                onClick={() => {
                                    openLink('https://monacomonaco.us/exhibitions-1/screengrab');
                                }}
                            />
                        </div>
                        <div className="project-page-keypoints-container">
                            <p className="project-page-subheader default-hovercolor">KEY POINTS</p>
                            <ul className="project-page-keypoints-ul">
                                <li className="project-page-keypoints-li">
                                    <span>
                                        Developed extensively with{' '}
                                        <p
                                            className="project-page-keyword default-keyword project-page-keyword-link"
                                            onMouseDown={() => {
                                                openLink('https://p5js.org/');
                                            }}
                                        >
                                            p5.js
                                        </p>
                                        , <p className="project-page-keyword default-keyword">node.js</p>, and{' '}
                                        <p
                                            className="project-page-keyword default-keyword project-page-keyword-link"
                                            onMouseDown={() => {
                                                openLink('https://socket.io/');
                                            }}
                                        >
                                            socket.io
                                        </p>{' '}
                                        websockets.
                                    </span>
                                </li>
                                <li className="project-page-keypoints-li">
                                    <span>
                                        Deployed and maintained remote artworks using an{' '}
                                        <p className="project-page-keyword default-keyword">AWS EC2</p> instance.
                                    </span>
                                </li>
                                <li className="project-page-keypoints-li">
                                    <span>
                                        Displayed the artworks for{' '}
                                        <p className="project-page-keyword default-keyword">2 months</p> to over{' '}
                                        <p className="project-page-keyword default-keyword">300</p> people.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="project-page-rest-container">
                        <div className="project-page-divider default-dark-background" />
                        <p className="project-page-main-info project-page-info-float">READ MORE BELOW</p>
                        <Fade left>
                            <span className="monaco-main-message">
                                With the emergence and dominance of technology in today’s era, it is almost ignorant to
                                overlook its{' '}
                                <p className="project-page-keyword default-keyword">
                                    implications and possibilities in the arts
                                </p>
                                . Although the combination of hardware and software has been commonly used to automate
                                daily mundane tasks, the purpose and usage of technology has become more than for mere
                                convenience.
                            </span>
                        </Fade>
                        <div>
                            <p className="project-page-subheader default-hovercolor">Project Space</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
