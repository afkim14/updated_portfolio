import React from 'react';
import PropTypes from 'prop-types';
import ScrollTrigger from 'react-scroll-trigger';
import { openLink } from '../Helpers';
import './AtomicHabits.css';

import CustomButton from './CustomButton';

export default class AtomicHabits extends React.Component {
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
                            <p className="project-page-header default-hovercolor">Atomic Habits</p>
                            <p className="project-page-role">React Native</p>
                            <img
                                className="project-page-project-img atomic-qr-img"
                                src={'/assets/AtomicHabits/habits_qr-01.png'}
                                style={{ filter: this.props.imageColorHoverFilter }}
                            />
                            <CustomButton
                                className={'project-page-website-btn atomic-ios-button'}
                                text={'Expo iOS'}
                                onClick={() => {
                                    openLink('https://itunes.apple.com/app/apple-store/id982107779');
                                }}
                            />
                            <CustomButton
                                className={'project-page-website-btn atomic-android-button'}
                                text={'Expo Android'}
                                onClick={() => {
                                    openLink(
                                        'https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www',
                                    );
                                }}
                            />
                        </div>
                    </ScrollTrigger>
                    <div style={{ clear: 'both' }} />
                    <div className="project-page-keypoints-container">
                        <p className="project-page-subheader default-hovercolor">KEY POINTS</p>
                        <ul className="project-page-keypoints-ul">
                            <li className="project-page-keypoints-li">
                                <span>
                                    Rapidly developed primarily using{' '}
                                    <p
                                        className="project-page-keyword default-keyword project-page-keyword-link"
                                        onMouseDown={() => {
                                            openLink('https://facebook.github.io/react-native/');
                                        }}
                                    >
                                        React Native
                                    </p>
                                    .
                                </span>
                            </li>
                            <li className="project-page-keypoints-li">
                                <span>
                                    Deployed and maintained application using{' '}
                                    <p
                                        className="project-page-keyword default-keyword project-page-keyword-link"
                                        onMouseDown={() => {
                                            openLink('https://expo.io/');
                                        }}
                                    >
                                        EXPO
                                    </p>
                                    .
                                </span>
                            </li>
                            <li className="project-page-keypoints-li">
                                <span>
                                    Idea for application inspired by James Clear's{' '}
                                    <p
                                        className="project-page-keyword default-keyword project-page-keyword-link"
                                        onMouseDown={() => {
                                            openLink(
                                                'https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/B07RFSSYBH/ref=sr_1_2?gclid=Cj0KCQjwn_LrBRD4ARIsAFEQFKufewotiTQM-9Ff42E-Uh9mRpAQi1dgJyoN_o5_24_5rTFV2-4XqLYaAlkQEALw_wcB&hvadid=282579595593&hvdev=c&hvlocphy=9005936&hvnetw=g&hvpos=1t1&hvqmt=e&hvrand=2847002335217137137&hvtargid=kwd-486806483233&hydadcr=15492_10339794&keywords=atomic+habits&qid=1568482614&s=gateway&sr=8-2',
                                            );
                                        }}
                                    >
                                        Atomic Habits
                                    </p>
                                    .
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
                        Create <p className="project-page-keyword default-keyword">long-lasting habits</p> through
                        atomic increments and slow progress.
                    </span>
                </ScrollTrigger>
                <ScrollTrigger
                    onEnter={() => {
                        this.props.onViewportEnter('PROBLEM', 2);
                    }}
                >
                    <div className="project-page-project-container project-step">
                        <p className="project-page-subheader default-hovercolor">Problem</p>
                        <span className="project-page-project-text">
                            Healthy and productive habits are hard to construct while bad habits are challenging to
                            break apart. The main reason for this issue arises from the{' '}
                            <p className="project-page-keyword default-keyword">lack of a stimulant</p>, plan, or reward
                            system. Not only that, but taking small{' '}
                            <p className="project-page-keyword default-keyword">incremental steps</p> is crucial in
                            building a desired long-term habit - a process usually overlooked and undervalued.
                        </span>
                    </div>
                </ScrollTrigger>
                <ScrollTrigger
                    onEnter={() => {
                        this.props.onViewportEnter('SOLUTION', 3);
                    }}
                >
                    <div className="project-page-project-container project-step">
                        <p className="project-page-subheader default-hovercolor">Solution</p>
                        <span className="project-page-project-text">
                            The Atomic Habits app helps users formulate daily tasks and to-dos that they can keep track
                            of to build long-term healthier and more productive habits. Users can{' '}
                            <p className="project-page-keyword default-keyword">track</p> their progress through a
                            gamification system where they can track how many days they were actively working on a
                            certain habit through a span of time.
                        </span>
                        <img className="project-page-project-img" src={'/assets/dailyui/Day9_Habits_Combined-01.png'} />
                    </div>
                </ScrollTrigger>
                <ScrollTrigger
                    onEnter={() => {
                        this.props.onViewportEnter('DESIGN', 4);
                    }}
                >
                    <div className="project-page-project-container project-step">
                        <p className="project-page-subheader default-hovercolor">Design</p>
                        <span className="project-page-project-text">
                            <p className="project-page-keyword default-keyword">Usability</p> and{' '}
                            <p className="project-page-keyword default-keyword">practicality</p> were at the forefront
                            of the design process. By limiting the application to a total of three separate pages, the
                            user is focused on the important features of the app: creating and tracking habits. By
                            removing any unnecessary fluff from the application, the user is not distracted with
                            features that do not help them sustain and build better habits. The color scheme is also
                            experimental and is based on a modern paper journal with very light and bright colors.
                        </span>
                    </div>
                </ScrollTrigger>
                <ScrollTrigger
                    onEnter={() => {
                        this.props.onViewportEnter('FUTURE WORK', 5);
                    }}
                >
                    <div className="project-page-project-container project-step">
                        <p className="project-page-subheader default-hovercolor">Future Work</p>
                        <span className="project-page-project-text">
                            The application is currently deployed to EXPO, but changes are still being made. One of the
                            major additions to implement will be to add{' '}
                            <p className="project-page-keyword default-keyword">location-based reminders</p> for when a
                            user has not completed a daily task. James Clear notes in his book that tying new habits to
                            existing habitual daily acts such as checking one's phone can help increase the frequency of
                            the new habit and therefore slowly build it into a long-term one.
                        </span>
                    </div>
                </ScrollTrigger>
            </div>
        );
    }
}

AtomicHabits.propTypes = {
    onViewportEnter: PropTypes.func,
    imageColorHoverFilter: PropTypes.string,
};
