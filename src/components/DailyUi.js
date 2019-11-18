import React from 'react';
import PropTypes from 'prop-types';
import ScrollTrigger from 'react-scroll-trigger';
import { openLink } from '../Helpers';

import dayOneImg from '../assets/dailyui/Day1_SignUp_Combined-01.png';
import dayTwoImg from '../assets/dailyui/Day2_Payment_Combined-01.png';
import dayThreeImg from '../assets/dailyui/Day3_LandingAlbum_Combined-01.png';
import dayFourImg from '../assets/dailyui/Day4_Calculator_Combined-01.png';
import dayFiveImg from '../assets/dailyui/Day5_Shuttle_Combined-01.png';
import daySixImg from '../assets/dailyui/Day6_BusinessCard_Combined-01.png';
import daySevenImg from '../assets/dailyui/Day7_Settings_Combined-01.png';
import dayEightImg from '../assets/dailyui/Day8_404_Combined-01.png';
import dayNineImg from '../assets/dailyui/Day9_Habits_Combined-01.png';
import dayTenImg from '../assets/dailyui/Day10_Share_Combined-01.png';
import dayElevenImg from '../assets/dailyui/Day11_SuccessFail_Combined-01.png';
import dayTwelveImg from '../assets/dailyui/Day12_Shop_Combined-01.png';
import dayThirteenImg from '../assets/dailyui/Day13_DirectMessaging_Combined-01.png';
import dayFourteenImg from '../assets/dailyui/Day14_Countdown_Combined-01.png';
import dayFifteenImg from '../assets/dailyui/Day15_Switch_Combined-01.png';
import daySixteenImg from '../assets/dailyui/Day16_Popup_Combined-01.png';
import daySeventeenImg from '../assets/dailyui/Day17_EmailReceipt_Combined-01.png';

import CustomButton from './CustomButton';

export default class DailyUi extends React.Component {
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
                            <p className="project-page-header default-hovercolor">DAILY UI</p>
                            <p className="project-page-role">Adobe Illustrator</p>
                            <CustomButton
                                className={'project-page-website-btn'}
                                text={'THE CHALLENGE'}
                                onClick={() => {
                                    openLink('https://www.dailyui.co/');
                                }}
                            />
                        </div>
                    </ScrollTrigger>
                    <div className="project-page-keypoints-container">
                        <p className="project-page-subheader default-hovercolor">KEY POINTS</p>
                        <ul className="project-page-keypoints-ul">
                            <li className="project-page-keypoints-li">
                                <span>
                                    Designed daily UI screens for the 100-day{' '}
                                    <p
                                        className="project-page-keyword default-keyword project-page-keyword-link"
                                        onMouseDown={() => {
                                            openLink('https://www.dailyui.co/');
                                        }}
                                    >
                                        dailyui.co
                                    </p>{' '}
                                    challenge.
                                </span>
                            </li>
                            <li className="project-page-keypoints-li">
                                <span>Remodeled how common user interactions are conceptualized.</span>
                            </li>
                            <br />
                            <br />
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
                        Below are a few UI/UX designs from the Daily UI 100-day challenge. It is important to note that
                        I did not limit myself to the constraints of the challenge, but rather used them to provide a
                        structure for my <p className="project-page-keyword default-keyword">imagination</p>.
                    </span>
                </ScrollTrigger>
                <ScrollTrigger
                    onEnter={() => {
                        this.props.onViewportEnter('DAY 1', 2);
                    }}
                >
                    <div className="project-page-project-container project-step">
                        <p className="project-page-subheader default-hovercolor">Day #1: Sign Up</p>
                        <span className="project-page-project-text">
                            The goal of this challenge was to design a sign up screen. I focused on{' '}
                            <p className="project-page-keyword default-keyword">clarity</p> and feedback cues when users
                            fill out sign up forms.
                        </span>
                        <img className="project-page-project-img" src={dayOneImg} />
                    </div>
                </ScrollTrigger>
                <ScrollTrigger
                    onEnter={() => {
                        this.props.onViewportEnter('DAY 2', 3);
                    }}
                >
                    <div className="project-page-project-container project-step">
                        <p className="project-page-subheader default-hovercolor">Day #2: Payment</p>
                        <span className="project-page-project-text">
                            The goal of this challenge was to design a credit card checkout form or page. I focused on{' '}
                            <p className="project-page-keyword default-keyword">ease-of-use</p> and security features
                            when users make online purchases.
                        </span>
                        <img className="project-page-project-img" src={dayTwoImg} />
                    </div>
                </ScrollTrigger>
                <ScrollTrigger
                    onEnter={() => {
                        this.props.onViewportEnter('DAY 3', 4);
                    }}
                >
                    <div className="project-page-project-container project-step">
                        <p className="project-page-subheader default-hovercolor">Day #3: Landing Page</p>
                        <span className="project-page-project-text">
                            The goal of this challenge was to design a landing page. I focused on an application that
                            displays <p className="project-page-keyword default-keyword">top 3</p> user-voted figures or
                            objects for a multitude of categories such as music, movies, and more.
                        </span>
                        <img className="project-page-project-img" src={dayThreeImg} />
                    </div>
                </ScrollTrigger>
                <ScrollTrigger
                    onEnter={() => {
                        this.props.onViewportEnter('DAY 4', 5);
                    }}
                >
                    <div className="project-page-project-container project-step">
                        <p className="project-page-subheader default-hovercolor">Day #4: Calculator</p>
                        <span className="project-page-project-text">
                            The goal of this challenge was to design a calculator. I focused on the color scheme,
                            ease-of-use, and novel features such as the option to accumulate multiple operations onto a
                            single line, acting like a{' '}
                            <p className="project-page-keyword default-keyword">scientific calculator</p> but displayed
                            in a simple design.
                        </span>
                        <img className="project-page-project-img" src={dayFourImg} />
                    </div>
                </ScrollTrigger>
                <ScrollTrigger
                    onEnter={() => {
                        this.props.onViewportEnter('DAY 5', 6);
                    }}
                >
                    <div className="project-page-project-container project-step">
                        <p className="project-page-subheader default-hovercolor">Day #5: Shuttle Service</p>
                        <span className="project-page-project-text">
                            The goal of this challenge was to design a shuttle service application as part of my
                            conceptual Northwestern University Hub prototype. I focused on showing more clear and
                            effective visual cues for shuttle positions and stops.
                        </span>
                        <img className="project-page-project-img" src={dayFiveImg} />
                    </div>
                </ScrollTrigger>
                <ScrollTrigger
                    onEnter={() => {
                        this.props.onViewportEnter('DAY 6', 7);
                    }}
                >
                    <div className="project-page-project-container project-step">
                        <p className="project-page-subheader default-hovercolor">Day #6: Business Card</p>
                        <span className="project-page-project-text">
                            The goal of this challenge was to design a business card. How convenient would it be if you
                            could just quickly <p className="project-page-keyword default-keyword">scan</p> each other
                            business cards instead of keeping an archive of small-sized pieces of cardboard?
                        </span>
                        <img className="project-page-project-img" src={daySixImg} />
                    </div>
                </ScrollTrigger>
                <ScrollTrigger
                    onEnter={() => {
                        this.props.onViewportEnter('DAY 7', 8);
                    }}
                >
                    <div className="project-page-project-container project-step">
                        <p className="project-page-subheader default-hovercolor">Day #7: Settings</p>
                        <span className="project-page-project-text">
                            The goal of this challenge was to design a settings screen. I wanted to try something new
                            and so designed a screen for a futuristic application where users can change their{' '}
                            <p className="project-page-keyword default-keyword">physical features</p> such as height and
                            hair color through their phone. Maybe I'll make use of this design in a few years.
                        </span>
                        <img className="project-page-project-img" src={daySevenImg} />
                    </div>
                </ScrollTrigger>
                <ScrollTrigger
                    onEnter={() => {
                        this.props.onViewportEnter('DAY 8', 9);
                    }}
                >
                    <div className="project-page-project-container project-step">
                        <p className="project-page-subheader default-hovercolor">Day #8: 404</p>
                        <span className="project-page-project-text">
                            404 Error: No description is present for this design. All jokes aside, I believe it is
                            important to make error pages as well and carefully designed as home screens. Why not
                            attempt to make an unfortunate situation slightly better purely through design?
                        </span>
                        <img className="project-page-project-img" src={dayEightImg} />
                    </div>
                </ScrollTrigger>
                <ScrollTrigger
                    onEnter={() => {
                        this.props.onViewportEnter('DAY 9', 10);
                    }}
                >
                    <div className="project-page-project-container project-step">
                        <p className="project-page-subheader default-hovercolor">Day #9: Habits</p>
                        <span className="project-page-project-text">
                            The goal of this challenge was to design a habit-building application. For more information
                            about this application and design process, check out{' '}
                            <p
                                className="project-page-keyword default-keyword project-page-keyword-link"
                                onMouseDown={() => {
                                    this.animateThenGoTo('/atomichabits');
                                }}
                            >
                                Atomic Habits
                            </p>
                            .
                        </span>
                        <img className="project-page-project-img" src={dayNineImg} />
                    </div>
                </ScrollTrigger>
                <ScrollTrigger
                    onEnter={() => {
                        this.props.onViewportEnter('DAY 10', 11);
                    }}
                >
                    <div className="project-page-project-container project-step">
                        <p className="project-page-subheader default-hovercolor">Day #10: Share</p>
                        <span className="project-page-project-text">
                            The goal of this challenge was to design a share screen. I focused on a novel way of sharing
                            information to different applications by{' '}
                            <p className="project-page-keyword default-keyword">drag interactions</p> and full-screen
                            design feedbacks.
                        </span>
                        <img className="project-page-project-img" src={dayTenImg} />
                    </div>
                </ScrollTrigger>
                <ScrollTrigger
                    onEnter={() => {
                        this.props.onViewportEnter('DAY 11', 12);
                    }}
                >
                    <div className="project-page-project-container project-step">
                        <p className="project-page-subheader default-hovercolor">Day #11: Success or Fail</p>
                        <span className="project-page-project-text">
                            The goal of this challenge was to design a success or fail screen. I decided to implement
                            one for a possible <p className="project-page-keyword default-keyword">dating</p>{' '}
                            application. Did this work ... or not?.
                        </span>
                        <img className="project-page-project-img" src={dayElevenImg} />
                    </div>
                </ScrollTrigger>
                <ScrollTrigger
                    onEnter={() => {
                        this.props.onViewportEnter('DAY 12', 13);
                    }}
                >
                    <div className="project-page-project-container project-step">
                        <p className="project-page-subheader default-hovercolor">Day #12: Shop</p>
                        <span className="project-page-project-text">
                            The goal of this challenge was to design a shop screen. The challenge was to show as much
                            information about the product in a user-friendly manner. Not only that, but it was also
                            important to facilitate the <p className="project-page-keyword default-keyword">browsing</p>{' '}
                            of different products.
                        </span>
                        <img className="project-page-project-img" src={dayTwelveImg} />
                    </div>
                </ScrollTrigger>
                <ScrollTrigger
                    onEnter={() => {
                        this.props.onViewportEnter('DAY 13', 14);
                    }}
                >
                    <div className="project-page-project-container project-step">
                        <p className="project-page-subheader default-hovercolor">Day #13: Direct Messages</p>
                        <span className="project-page-project-text">
                            The goal of this challenge was to design a direct messaging application. Through the use of
                            the color scheme, I wanted to highlight the message{' '}
                            <p className="project-page-keyword default-keyword">content</p> as well as easily
                            differentiate the users in the group chat.
                        </span>
                        <img className="project-page-project-img" src={dayThirteenImg} />
                    </div>
                </ScrollTrigger>
                <ScrollTrigger
                    onEnter={() => {
                        this.props.onViewportEnter('DAY 14', 15);
                    }}
                >
                    <div className="project-page-project-container project-step">
                        <p className="project-page-subheader default-hovercolor">Day #14: Countdown</p>
                        <span className="project-page-project-text">
                            The goal of this challenge was to design a countdown screen. For fun, I designed an
                            application that displays a countdown to the end of the world. Hopefully, the information
                            displayed is incorrect.
                        </span>
                        <img className="project-page-project-img" src={dayFourteenImg} />
                    </div>
                </ScrollTrigger>
                <ScrollTrigger
                    onEnter={() => {
                        this.props.onViewportEnter('DAY 15', 16);
                    }}
                >
                    <div className="project-page-project-container project-step">
                        <p className="project-page-subheader default-hovercolor">Day #15: Switch</p>
                        <span className="project-page-project-text">
                            The goal of this challenge was to design a switch. How{' '}
                            <p className="project-page-keyword default-keyword">convenient</p> would it be to have an
                            application that regulates electricity being used in different rooms?
                        </span>
                        <img className="project-page-project-img" src={dayFifteenImg} />
                    </div>
                </ScrollTrigger>
                <ScrollTrigger
                    onEnter={() => {
                        this.props.onViewportEnter('DAY 16', 17);
                    }}
                >
                    <div className="project-page-project-container project-step">
                        <p className="project-page-subheader default-hovercolor">Day #16: Pop-up</p>
                        <span className="project-page-project-text">
                            The goal of this challenge was to design a pop up screen. The idea behind this design was a
                            dating application that sends a notification when two users who coincide with their
                            interests are <p className="project-page-keyword default-keyword">physically near</p> to
                            each other.
                        </span>
                        <img className="project-page-project-img" src={daySixteenImg} />
                    </div>
                </ScrollTrigger>
                <ScrollTrigger
                    onEnter={() => {
                        this.props.onViewportEnter('DAY 17', 18);
                    }}
                >
                    <div className="project-page-project-container project-step">
                        <p className="project-page-subheader default-hovercolor">Day #17: Email Receipt</p>
                        <span className="project-page-project-text">
                            The goal of this challenge was to design an email receipt. I want the product listed below.
                        </span>
                        <img className="project-page-project-img" src={daySeventeenImg} />
                    </div>
                </ScrollTrigger>
            </div>
        );
    }
}

DailyUi.propTypes = {
    onViewportEnter: PropTypes.func,
};
