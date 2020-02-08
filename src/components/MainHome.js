import React from 'react';
import PropTypes from 'prop-types';
import './MainHome.css';
import { openLink } from '../Helpers';

export default class MainHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSocialHover: ''
        };
    }

    render() {
        if (!this.props.imageColorFilter || !this.props.imageColorHoverFilter) {
            return <div></div>;
        }
        return (
            <div className="main-home-container">
                <div className="main-home-header-container">
                    <p className="main-home-name"></p>
                    <div className="main-home-social-container">
                        <img 
                            className="main-home-social-icon" 
                            src="./assets/social/github-image.png" 
                            onMouseEnter={() => { this.setState({ currentSocialHover: 'github' }) }}
                            onMouseLeave={() => { this.setState({ currentSocialHover: '' }) }}
                            onClick={() => {
                                openLink('https://github.com/afkim14');
                            }}
                            style={{ filter: this.state.currentSocialHover === 'github' ? this.props.imageColorHoverFilter : this.props.imageColorFilter }} 
                        />
                        <img 
                            className="main-home-social-icon" 
                            src="./assets/social/linkedin.png" 
                            onMouseEnter={() => { this.setState({ currentSocialHover: 'linkedin' }) }}
                            onMouseLeave={() => { this.setState({ currentSocialHover: '' }) }}
                            onClick={() => {
                                openLink('https://www.linkedin.com/in/andres-fernando-kim/');
                            }}
                            style={{ filter: this.state.currentSocialHover === 'linkedin' ? this.props.imageColorHoverFilter : this.props.imageColorFilter }} 
                        />
                        <img 
                            className="main-home-social-icon" 
                            src="./assets/social/mail.png" 
                            onMouseEnter={() => { this.setState({ currentSocialHover: 'mail' }) }}
                            onMouseLeave={() => { this.setState({ currentSocialHover: '' }) }}
                            onClick={() => {
                                openLink('mailto:andresfernandokim@gmail.com');
                            }}
                            style={{ filter: this.state.currentSocialHover === 'mail' ? this.props.imageColorHoverFilter : this.props.imageColorFilter }} 
                        />
                        <img 
                            className="main-home-social-icon" 
                            src="./assets/social/medium-01.png" 
                            onMouseEnter={() => { this.setState({ currentSocialHover: 'medium' }) }}
                            onMouseLeave={() => { this.setState({ currentSocialHover: '' }) }}
                            onClick={() => {
                                openLink('https://medium.com/@fernandokim');
                            }}
                            style={{ filter: this.state.currentSocialHover === 'medium' ? this.props.imageColorHoverFilter : this.props.imageColorFilter }} 
                        />
                    </div>
                </div>
                <div className="main-home-intro-container">
                    <p className="main-home-intro-name default-accent-color">{"Andres Fernando Kim"}</p>
                    <span className="main-home-intro-job-title">
                        Software Engineer @
                        <a 
                            className="project-page-keyword main-home-intro-company default-accent-color" 
                            onClick={() => { openLink('http://deeplocal.com') }}
                        >
                            Deeplocal
                        </a>
                    </span>
                    <br />
                </div>
                <p className="main-home-projects-header">Work Projects</p>
                <div className="main-home-projects-container">
                    <div className="main-home-project-container">
                        <div>
                            <p className="main-home-project-name default-accent-color">Google NYC Lobby</p>
                            <span className="main-home-project-description">A ceiling of mechanical flowers installed at the new Google office in New York. Using{' '}<p className="default-accent-color main-home-keyword">motion and gesture detection</p>, the flowers react and animate based on the movement of people going in and out of the lobby.</span>
                        </div>
                        <div className="main-home-project-frameworks">
                            <p className="main-home-framework-text">Node</p>
                            <p className="main-home-framework-text">Websocket</p>
                            <p className="main-home-framework-text">Tensorflow</p>
                        </div>
                    </div>
                    <div className="main-home-project-container">
                        <div>
                            <p className="main-home-project-name default-accent-color">Gumband</p>
                            <span className="main-home-project-description">A show control service developed by Deeplocal to help{' '}<p className="default-accent-color main-home-keyword">manage and maintain</p>{' '}live exhibits.</span>
                        </div>
                        <div className="main-home-project-frameworks">
                            <p className="main-home-framework-text">Node</p>
                            <p className="main-home-framework-text">React</p>
                            <p className="main-home-framework-text">Kubernetes</p>
                        </div>
                    </div>
                    <div className="main-home-project-container">
                        <div>
                            <p className="main-home-project-name default-accent-color">Equinox Smart Scale</p>
                            <span className="main-home-project-description">Developed a{' '}<p className="default-accent-color main-home-keyword">Smart Scale Kiosk</p>{' '}that expedited a 2-hour long fitness assessment to a 3-4 minute interaction.</span>
                        </div>
                        <div className="main-home-project-frameworks">
                            <p className="main-home-framework-text">Node</p>
                            <p className="main-home-framework-text">React</p>
                            <p className="main-home-framework-text">Docker</p>
                        </div>
                    </div>
                    <div className="main-home-project-container">
                        <div>
                            <p className="main-home-project-name default-accent-color">Tile Vending Machine</p>
                            <span className="main-home-project-description">Developed a customized vending machine that dispensed{' '}<p className="default-accent-color main-home-keyword">Tile Stickers</p>{' '}after users interacted with it. At the end of the interaction, we also sent stylized recordings of their interactions.</span>
                        </div>
                        <div className="main-home-project-frameworks">
                            <p className="main-home-framework-text">Node</p>
                            <p className="main-home-framework-text">React</p>
                            <p className="main-home-framework-text">Docker</p>
                            <p className="main-home-framework-text">Gumband</p>
                        </div>
                    </div>
                    <div className="main-home-project-container">
                        <div>
                            <p className="main-home-project-name default-accent-color">Wonderful Weekends</p>
                            <span className="main-home-project-description">Assisted in the development of a{' '}<p className="default-accent-color main-home-keyword">35-feet</p>{' '} Gumball Machine that dispensed Google prizes at the end of an interaction informing the users about Google technology.</span>
                        </div>
                        <div className="main-home-project-frameworks">
                            <p className="main-home-framework-text">Node</p>
                            <p className="main-home-framework-text">React</p>
                            <p className="main-home-framework-text">Docker</p>
                        </div>
                    </div>
                    <div className="main-home-project-container" onClick={() => { this.props.history.push('/monaco'); }}>
                        <div>
                            <p className="main-home-project-name default-accent-color">MONACO Exhibition</p>
                            <span className="main-home-project-description">Exhibited technical artworks that captured the concept of{' '}<p className="default-accent-color main-home-keyword">connectivity</p>. Through server-client socket interactions among multiple displays dispersed around the gallery, my works demonstrated the beauty and power of instant communication as well as its implications in the world today.</span>
                        </div>
                        <div className="main-home-project-frameworks">
                            <p className="main-home-framework-text">p5.js</p>
                            <p className="main-home-framework-text">AWS EC2</p>
                            <p className="main-home-framework-text">Node</p>
                        </div>
                    </div>
                </div>
                <p className="main-home-projects-header">Side Projects</p>
                <div className="main-home-projects-container">
                    <div className="main-home-project-container" onClick={() => { this.props.history.push('/capsule'); }}>
                        <div>
                            <p className="main-home-project-name main-home-side-project-color">Capsule</p>
                            <span className="main-home-project-description">Developed a web application that helps users{' '}<p className="main-home-side-project-color main-home-keyword">send meaningful messages</p>. Capsule provides users with powerful text-editing tools to create stylized and personal cards to send to their friends, families, and significant others.</span>
                        </div>
                        <div className="main-home-project-frameworks">
                            <p className="main-home-framework-text">React</p>
                            <p className="main-home-framework-text">Draft.js</p>
                        </div>
                    </div>
                    <div className="main-home-project-container" onClick={() => { this.props.history.push('/atomichabits'); }}>
                        <div>
                            <p className="main-home-project-name main-home-side-project-color">Atomic Habits</p>
                            <span className="main-home-project-description">Developed a cross-platform mobile application that helps users create new{' '}<p className="main-home-side-project-color main-home-keyword">long-lasting habits</p>{' '} by following the principles outlined by James Clear in "Atomic Habits".</span>
                        </div>
                        <div className="main-home-project-frameworks">
                            <p className="main-home-framework-text">Expo</p>
                        </div>
                    </div>
                    <div className="main-home-project-container">
                        <div>
                            <p className="main-home-project-name main-home-side-project-color">World Poops</p>
                            <span className="main-home-project-description">Developed a cross-platform progressive web application that allows users to read and write{' '}<p className="main-home-side-project-color main-home-keyword">stall stories</p>{' '}while they take care of their needs.</span>
                        </div>
                        <div className="main-home-project-frameworks">
                            <p className="main-home-framework-text">React</p>
                        </div>
                    </div>
                    <div className="main-home-project-container">
                        <div>
                            <p className="main-home-project-name main-home-side-project-color">글써옵써예</p>
                            <span className="main-home-project-description">Developed a cross-platform progressive web application that allows users to improve their writing skills by periodically submiting anectodes, short stories, and thoughts to a{' '}<p className="main-home-side-project-color main-home-keyword">shared room</p>{' '}.</span>
                        </div>
                        <div className="main-home-project-frameworks">
                            <p className="main-home-framework-text">Ionic</p>
                            <p className="main-home-framework-text">React</p>
                        </div>
                    </div>
                    <div className="main-home-project-container" onClick={() => { this.props.history.push('/dailyui'); }}>
                        <div>
                            <p className="main-home-project-name main-home-side-project-color">Daily UI</p>
                            <span className="main-home-project-description">Participated in the{' '}<p className="main-home-side-project-color main-home-keyword">100-day Daily UI challenge</p>{' '} where I designed a specific interface for a feature every day.</span>
                        </div>
                        <div className="main-home-project-frameworks">
                            <p className="main-home-framework-text">Adobe Illustrator</p>
                        </div>
                    </div>
                    <div className="main-home-project-container" onClick={() => { openLink('https://medium.com/@fernandokim/design-based-on-transparency-9a64e6f49c41'); }}>
                        <div>
                            <p className="main-home-project-name main-home-side-project-color">Design Based on Transparency</p>
                            <span className="main-home-project-description">Wrote a Medium article about the need for systems to be open about their{' '}<p className="main-home-side-project-color main-home-keyword">intentions</p>{' '}to form trust in users.</span>
                        </div>
                        <div className="main-home-project-frameworks">
                            <p className="main-home-framework-text">Medium</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

MainHome.propTypes = {
    imageColorFilter: PropTypes.string,
    imageColorHoverFilter: PropTypes.string,
};
