import React from 'react';
import PropTypes from 'prop-types';
import ScrollTrigger from 'react-scroll-trigger';
import { openLink } from '../Helpers';
import circleImg from '../assets/Monaco/circle.jpg';
import connectivityImg from '../assets/Monaco/connectivity.jpg';
import entranceImg from '../assets/Monaco/entrance.jpg';
import lifeImg from '../assets/Monaco/life.jpg';

import CustomButton from './CustomButton';

export default class Monaco extends React.Component {
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
                                            openLink('https://p5js.org/');
                                        }}
                                    >
                                        p5.js
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
                                    <p
                                        className="project-page-keyword default-keyword project-page-keyword-link"
                                        onMouseDown={() => {
                                            openLink('https://aws.amazon.com/');
                                        }}
                                    >
                                        AWS EC2
                                    </p>{' '}
                                    instance.
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
                </div>
                <ScrollTrigger
                    onEnter={() => {
                        this.props.onViewportEnter('INTRO', 1);
                    }}
                >
                    <span className="project-page-main-message project-step">
                        With the emergence and dominance of technology in today’s era, it is almost ignorant to overlook
                        its{' '}
                        <p className="project-page-keyword default-keyword">
                            implications and possibilities in the arts
                        </p>
                        . Although the combination of hardware and software has been commonly used to automate daily
                        mundane tasks, the purpose and usage of technology has become more than for mere convenience.
                    </span>
                </ScrollTrigger>
                <ScrollTrigger
                    onEnter={() => {
                        this.props.onViewportEnter('SPACE', 2);
                    }}
                >
                    <div className="project-page-project-container project-step">
                        <p className="project-page-subheader default-hovercolor">Project Space</p>
                        <span className="project-page-project-text">
                            The <p className="project-page-keyword default-keyword">MONACO</p> gallery in St. Louis, MO
                            is an artist-owned cooperative that aims to showcase works from emerging and mid-career
                            artists. The space was split into two joint exhibitions, Zachary Buchner's Tensor Field and
                            Screen Grab. I was fortunate enough to partake of Screen Grab, an exhibition of four artists
                            whose approaches share a common interest in the effect, materiality, and experiences of the
                            screen in our digital world.
                        </span>
                        <img className="project-page-project-img" src={entranceImg} />
                    </div>
                </ScrollTrigger>
                <ScrollTrigger
                    onEnter={() => {
                        this.props.onViewportEnter('CONNECT', 3);
                    }}
                >
                    <div className="project-page-project-container project-step">
                        <p className="project-page-subheader default-hovercolor">Connectivity</p>
                        <span className="project-page-project-text">
                            When asked to exhibit my works in this gallery, I chose to focus on the digital topic that
                            awes me the most: connectivity. The beauty of{' '}
                            <p className="project-page-keyword default-keyword">instant communication</p> is often
                            unnoticeable although present in almost aspect of modern-day life. With the power of
                            computation, the ability to be connected although physically separated is one that can be
                            explored in a multitude of ways in the arts. This technological innovation breaks our
                            pre-conceived notions of space and introduces a whole new genre of possibilities such as
                            disparate artworks placed in different countries that are connected by a central server.
                        </span>
                        <img className="project-page-project-img" src={connectivityImg} />
                    </div>
                </ScrollTrigger>
                <ScrollTrigger
                    onEnter={() => {
                        this.props.onViewportEnter('WORK I', 4);
                    }}
                >
                    <div className="project-page-project-container project-step">
                        <p className="project-page-subheader default-hovercolor">Circle Moving in Virtual World I</p>
                        <span className="project-page-project-text">
                            The first artwork displayed was Circle Moving in Virtual World I. This work exists in{' '}
                            <p className="project-page-keyword default-keyword">multiple locations</p>. Screen one and
                            three are located in the main gallery of Monaco while screen two is simultaneously installed
                            at PRACTISE in Oak Park, IL. Through server-client interactions, the circle moves seamlessly
                            from one location to another, allowing the viewer in each case to visualize both connectivty
                            and separation and the transmission of digital information normally made invisible in our
                            daily lives.
                        </span>
                        <img className="project-page-project-img" src={circleImg} />
                    </div>
                </ScrollTrigger>
                <ScrollTrigger
                    onEnter={() => {
                        this.props.onViewportEnter('WORK II', 5);
                    }}
                >
                    <div className="project-page-project-container project-step">
                        <p className="project-page-subheader default-hovercolor">Life</p>
                        <span className="project-page-project-text">
                            The second work displayed was Life. For Life, I created a system, that along with six LCD
                            client panels and a central server, randomly selects two of the panels to either{' '}
                            <p className="project-page-keyword default-keyword">mate</p> (blue screen) or{' '}
                            <p className="project-page-keyword default-keyword">kill</p> (red screen) at consistent
                            intervals.
                        </span>
                        <img className="project-page-project-img" src={lifeImg} />
                    </div>
                </ScrollTrigger>
            </div>
        );
    }
}

Monaco.propTypes = {
    onViewportEnter: PropTypes.func,
};
