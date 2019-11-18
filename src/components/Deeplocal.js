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
                            <span className="project-page-role">
                                Software Engineer <p className="project-page-keyword default-keyword">current</p>
                            </span>
                            <div style={{ clear: 'both' }} />
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
                                    Developing extensively with{' '}
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
                                    Deploying and maintaining multiple projects using{' '}
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
                                    Creating interactive experiences and products to be seen and used by{' '}
                                    <p className="project-page-keyword default-keyword">thousands</p> of people.
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
