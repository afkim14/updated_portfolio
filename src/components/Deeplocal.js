import React from 'react';
import PropTypes from 'prop-types';
import ScrollTrigger from 'react-scroll-trigger';
import { openLink } from '../Helpers';

import CustomButton from './CustomButton';

export default class Deeplocal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="project-page-container">
                <div className="projet-page-top-container">
                    <ScrollTrigger
                        onEnter={() => {
                            this.props.onViewportEnter('TOP', 0);
                        }}
                    >
                        <div className="project-page-title-container project-step">
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
                    </ScrollTrigger>
                    <div className="project-page-keypoints-container">
                        <p className="project-page-subheader default-hovercolor">KEY POINTS</p>
                        <ul className="project-page-keypoints-ul">
                            <li className="project-page-keypoints-li">
                                <span>
                                    Developed extensively with{' '}
                                    <p
                                        className="project-page-keyword default-keyword project-page-keyword-link"
                                        onMouseDown={() => {
                                            openLink('https://reactjs.org/');
                                        }}
                                    >
                                        React
                                    </p>
                                    ,{' '}
                                    <p
                                        className="project-page-keyword default-keyword project-page-keyword-link"
                                        onMouseDown={() => {
                                            openLink('https://nodejs.org/en/');
                                        }}
                                    >
                                        node.js
                                    </p>
                                    , and{' '}
                                    <p
                                        className="project-page-keyword default-keyword project-page-keyword-link"
                                        onMouseDown={() => {
                                            openLink('https://redis.io/');
                                        }}
                                    >
                                        Redis
                                    </p>
                                    .
                                </span>
                            </li>
                            <li className="project-page-keypoints-li">
                                <span>
                                    Deployed and maintained multiple projects using{' '}
                                    <p
                                        className="project-page-keyword default-keyword project-page-keyword-link"
                                        onMouseDown={() => {
                                            openLink('https://www.docker.com/');
                                        }}
                                    >
                                        Docker
                                    </p>
                                    , and{' '}
                                    <p
                                        className="project-page-keyword default-keyword project-page-keyword-link"
                                        onMouseDown={() => {
                                            openLink('https://www.gumband.com/');
                                        }}
                                    >
                                        Gumband
                                    </p>
                                    .
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
        );
    }
}

Deeplocal.propTypes = {
    onViewportEnter: PropTypes.func,
};
