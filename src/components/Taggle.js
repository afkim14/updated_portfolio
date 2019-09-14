import React from 'react';
import PropTypes from 'prop-types';
import ScrollTrigger from 'react-scroll-trigger';
import { openLink } from '../Helpers';

import CustomButton from './CustomButton';

export default class Taggle extends React.Component {
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
                            <p className="project-page-header default-hovercolor">Taggle</p>
                            <p className="project-page-role">Software Engineer Intern</p>
                            <CustomButton className={'project-page-website-btn'} text={'INACTIVE'} inactive={true} />
                        </div>
                    </ScrollTrigger>
                    <div className="project-page-keypoints-container">
                        <p className="project-page-subheader default-hovercolor">KEY POINTS</p>
                        <ul className="project-page-keypoints-ul">
                            <li className="project-page-keypoints-li">
                                <span>
                                    Developed Taggle's browser version using{' '}
                                    <p
                                        className="project-page-keyword default-keyword project-page-keyword-link"
                                        onMouseDown={() => {
                                            openLink('https://reactjs.org/');
                                        }}
                                    >
                                        React
                                    </p>{' '}
                                    extensively.
                                </span>
                            </li>
                            <li className="project-page-keypoints-li">
                                <span>Delivered content in multiple languages in a responsive manner.</span>
                            </li>
                            <li className="project-page-keypoints-li">
                                <span>
                                    Tested Taggle with <p className="project-page-keyword default-keyword">100</p> users
                                    and participated in an agile, iterative process to polish the products.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="project-page-rest-container">
                    <div className="project-page-divider default-dark-background" />
                    <p className="project-page-main-info project-page-info-float">READ MORE BELOW</p>
                </div>
                <ScrollTrigger
                    onEnter={() => {
                        this.props.onViewportEnter('INTRO', 1);
                    }}
                >
                    <span className="project-page-main-message project-step">
                        Taggle was primarily a mobile application that helped users organize photos based on{' '}
                        <p className="project-page-keyword default-keyword">hashtags</p> and{' '}
                        <p className="project-page-keyword default-keyword">image recognition</p>. It's initial goal was
                        to be a replacement for default photo-managing applications for iOS and Android by inluding
                        features like password-protected albums, search by tag, and more.
                    </span>
                </ScrollTrigger>
                <ScrollTrigger
                    onEnter={() => {
                        this.props.onViewportEnter('ROLE', 2);
                    }}
                >
                    <div className="project-page-project-container project-step">
                        <p className="project-page-subheader default-hovercolor">MY ROLE</p>
                        <span className="project-page-project-text">
                            My primary role was to develop Taggle's{' '}
                            <p className="project-page-keyword default-keyword">landing page</p> as well it's browser
                            platform to allow users to view their photos in any method. Furthermore, I was responsible
                            for testing the mobile application with users and aiding in the iterative process of
                            improving the native iOS app using{' '}
                            <p className="project-page-keyword default-keyword">Objective-C</p>.
                        </span>
                    </div>
                </ScrollTrigger>
                <ScrollTrigger
                    onEnter={() => {
                        this.props.onViewportEnter('LESSONS', 3);
                    }}
                >
                    <div className="project-page-project-container project-step">
                        <p className="project-page-subheader default-hovercolor">WHAT I LEARNED</p>
                        <span className="project-page-project-text">
                            Working in an early start-up taught me valuable lessons regarding{' '}
                            <p className="project-page-keyword default-keyword">agile development</p> and{' '}
                            <p className="project-page-keyword default-keyword">business restrictions</p>. It taught me
                            that although long-term planning and scalability should be a key focus during development,
                            business momentum and client expectations sometimes require a working product to be visible
                            in a matter of weeks. Now, I am comfortable achieving both: presenting primary features of
                            an application in a tight deadline and developing rapidly while keeping scalability in
                            focus.
                        </span>
                    </div>
                </ScrollTrigger>
            </div>
        );
    }
}

Taggle.propTypes = {
    onViewportEnter: PropTypes.func,
};
