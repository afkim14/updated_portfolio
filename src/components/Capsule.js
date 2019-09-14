import React from 'react';
import PropTypes from 'prop-types';
import ScrollTrigger from 'react-scroll-trigger';
import { openLink } from '../Helpers';

import CustomButton from './CustomButton';

export default class Capsule extends React.Component {
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
                            <p className="project-page-header default-hovercolor">Capsule</p>
                            <p className="project-page-role">React, Firebase</p>
                            <CustomButton
                                className={'project-page-website-btn'}
                                text={'WEBSITE'}
                                onClick={() => {
                                    openLink('https://projectcapsule.me/');
                                }}
                            />
                        </div>
                    </ScrollTrigger>
                    <div className="project-page-keypoints-container">
                        <p className="project-page-subheader default-hovercolor">KEY POINTS</p>
                        <ul className="project-page-keypoints-ul">
                            <li className="project-page-keypoints-li">
                                <span>
                                    Experimented with <p className="project-page-keyword default-keyword">uncommon</p>{' '}
                                    design standards and powerful text-editing libraries like{' '}
                                    <p
                                        className="project-page-keyword default-keyword project-page-keyword-link"
                                        onMouseDown={() => {
                                            openLink('https://draftjs.org');
                                        }}
                                    >
                                        Draft.js
                                    </p>
                                    .
                                </span>
                            </li>
                            <li className="project-page-keypoints-li">
                                <span>
                                    Continuously deployed and managed online cards with{' '}
                                    <p
                                        className="project-page-keyword default-keyword project-page-keyword-link"
                                        onMouseDown={() => {
                                            openLink('https://firebase.google.com/');
                                        }}
                                    >
                                        Firebase
                                    </p>
                                    .
                                </span>
                            </li>
                            <li className="project-page-keypoints-li">
                                <span>
                                    Repeatedly tested with 10 users from early development to final product to make sure
                                    every incremental patch change was desired.
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
                        <p className="project-page-keyword default-keyword">
                            Write a meaningful card to anyone at anytime.
                        </p>{' '}
                        Capsule is a highly functional and design-focused application that allows users to write stylish
                        cards with powerful tools.
                    </span>
                </ScrollTrigger>
                <ScrollTrigger
                    onEnter={() => {
                        this.props.onViewportEnter('MOTIVATION', 2);
                    }}
                >
                    <div className="project-page-project-container project-step">
                        <p className="project-page-subheader default-hovercolor">Motivation</p>
                        <span className="project-page-project-text">
                            The primary motivation for Capsule was to help users send meaningful and substantial
                            messages to friends and family. Instant messaging applications like Facebook Messenger,
                            WhatsApp, and even Instagram DMs are focused in sending terse messages back and forth in
                            short intervals. These services are not exactly suitable for sending longer and more
                            customizable messages. Congratulating someone for their new promotion, birthday, or marriage
                            through Facebook does not provide the deep connection between the sender and receiver and
                            the message is probably lost in the midst of many other simultaneous conversations.
                        </span>
                        <br />
                        <span className="project-page-project-text">
                            On the other end of the spectrum, sending a message through Email is sometimes too formal
                            and most of the times, an overkill.
                        </span>
                        <br />
                        <span className="project-page-project-text">
                            <p className="project-page-keyword default-keyword">
                                Capsule stands right in the middle, aiding people who want to put that extra effort in
                                congratulating someone while remaining relatively informal.
                            </p>
                        </span>
                    </div>
                </ScrollTrigger>
                <ScrollTrigger
                    onEnter={() => {
                        this.props.onViewportEnter('FOCUS', 3);
                    }}
                >
                    <div className="project-page-project-container project-step">
                        <p className="project-page-subheader default-hovercolor">Key Focus</p>
                        <ul className="project-page-keypoints-ul">
                            <li className="project-page-keypoints-li">
                                <span>
                                    <p className="project-page-keyword default-keyword">Powerful Functionality</p>:
                                    Functionality always comes first. Users can bold, italicize, underline, highlight,
                                    embed images, stickers, videos, links, and sketch drawings.
                                </span>
                            </li>
                            <li className="project-page-keypoints-li">
                                <span>
                                    <p className="project-page-keyword default-keyword">Limited Content</p>: Capsule
                                    limits the number of options (colors, fonts, etc.) to a carefully created selection.
                                </span>
                            </li>
                            <li className="project-page-keypoints-li">
                                <span>
                                    <p className="project-page-keyword default-keyword">Transparent</p>: Every user
                                    interaction is responded with feedback and Capsule makes sure the user is aware of
                                    the reason behind certain features as well as the consequences of their actions.
                                </span>
                            </li>
                            <li className="project-page-keypoints-li">
                                <span>
                                    <p className="project-page-keyword default-keyword">Collaborative</p>: Users can
                                    submit feedback as well as sticker designs, possible text and card background
                                    colors, and fonts.
                                </span>
                            </li>
                            <li className="project-page-keypoints-li">
                                <span>
                                    <p className="project-page-keyword default-keyword">Experimental</p>: Users can
                                    preview changes to font colors, card backgrounds, and font styles before actually
                                    applying them with the use of a Preview box. Furthermore, Capsule does not offer a
                                    “save” feature. The reason behind this is to motivate users to complete their cards
                                    in a short period of time instead of pushing it off for later.
                                </span>
                            </li>
                        </ul>
                    </div>
                </ScrollTrigger>
                <ScrollTrigger
                    onEnter={() => {
                        this.props.onViewportEnter('REFLECTION', 4);
                    }}
                >
                    <div className="project-page-project-container project-step">
                        <p className="project-page-subheader default-hovercolor">Reflection</p>
                        <span className="project-page-project-text">
                            Capsule is still undergoing development and constant testing. Through iteration after
                            iteration, I hope that it grows to be a resilient and powerful software that is used to
                            write elegant and meaningful online cards. If you want to know more about the development
                            process, read this{' '}
                            <p
                                className="project-page-keyword default-keyword project-page-keyword-link"
                                onMouseDown={() => {
                                    openLink('https://blog.prototypr.io/capsule-send-meaningful-messages-4126d53560d8');
                                }}
                            >
                                article
                            </p>
                            .
                        </span>
                    </div>
                </ScrollTrigger>
            </div>
        );
    }
}

Capsule.propTypes = {
    onViewportEnter: PropTypes.func,
};
