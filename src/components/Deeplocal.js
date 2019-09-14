import React from 'react';
import { openLink } from '../Helpers';
import { navigate } from 'hookrouter';
import './ProjectScreenStyle.css';
import './Deeplocal.css';

import CustomButton from './CustomButton';

export default class Deeplocal extends React.Component {
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
                            <p className="project-page-header default-hovercolor">Deeplocal</p>
                            <p className="project-page-role">Software Engineer Intern</p>
                            <CustomButton
                                className={'project-page-website-btn'}
                                text={'WEBSITE'}
                                onClick={() => {
                                    openLink('http://www.deeplocal.com');
                                }}
                            />
                        </div>
                        <div className="project-page-keypoints-container">
                            <p className="project-page-subheader default-hovercolor">KEY POINTS</p>
                            <ul className="project-page-keypoints-ul">
                                <li className="project-page-keypoints-li">
                                    <span>
                                        Developed extensively with{' '}
                                        <p className="project-page-keyword default-keyword">React</p>,{' '}
                                        <p className="project-page-keyword default-keyword">node.js</p>, and{' '}
                                        <p className="project-page-keyword default-keyword">Redis</p>.
                                    </span>
                                </li>
                                <li className="project-page-keypoints-li">
                                    <span>
                                        Deployed and maintained multiple projects using{' '}
                                        <p className="project-page-keyword default-keyword">Docker</p>, and In-house
                                        Remote Monitoring.
                                    </span>
                                </li>
                                <li className="project-page-keypoints-li">
                                    <span>
                                        Met tight deadlines and created interactive experiences to more than{' '}
                                        <p className="project-page-keyword default-keyword">10,000</p> people.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="project-page-rest-container">
                        <div className="project-page-divider default-dark-background" />
                        <p className="project-page-main-info">
                            Due to privacy issues, I cannot yet display the projects I have worked on.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
