import React from 'react';
import PropTypes from 'prop-types';
import ScrollTrigger from 'react-scroll-trigger';
import { openLink } from '../Helpers';
import shuttleImg from '../assets/dailyui/Day5_Shuttle_Combined-01.png';
import employmentImg from '../assets/nuhub/PurpleWindow_Combined-01.png';

import CustomButton from './CustomButton';

export default class NuHub extends React.Component {
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
                            <p className="project-page-header default-hovercolor">NU Hub</p>
                            <p className="project-page-role">Adobe Illustrator, React Native</p>
                            <CustomButton
                                className={'project-page-website-btn'}
                                text={'ONLY CONCEPT'}
                                inactive={true}
                            />
                        </div>
                    </ScrollTrigger>
                    <div className="project-page-keypoints-container">
                        <p className="project-page-subheader default-hovercolor">KEY POINTS</p>
                        <ul className="project-page-keypoints-ul">
                            <li className="project-page-keypoints-li">
                                <span>
                                    Prototyped applications that collectively focus on improving{' '}
                                    <p className="project-page-keyword default-keyword">on-campus experience</p> for
                                    students.
                                </span>
                            </li>
                            <li className="project-page-keypoints-li">
                                <span>
                                    Developed a working prototype of on-campus job searching using{' '}
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
                        Northwestern University Hub is an{' '}
                        <p className="project-page-keyword default-keyword">experimental prototype system</p> focused on
                        improving on-campus technologies such as shuttle services, class registrations, and more.
                    </span>
                </ScrollTrigger>
                <ScrollTrigger
                    onEnter={() => {
                        this.props.onViewportEnter('PURPOSE', 2);
                    }}
                >
                    <div className="project-page-project-container project-step">
                        <p className="project-page-subheader default-hovercolor">Purpose</p>
                        <span className="project-page-project-text">
                            By focusing the scope on only Northwestern-based services, the goal of the Northwestern
                            University Hub was to provide mobile web applications that facilitate student-specific
                            needs. Instead of creating applications that have a general purpose such as social media
                            platforms, car sharing services, and others, the NU Hub takes advantage of{' '}
                            <p className="project-page-keyword default-keyword">locality</p> and focuses on providing
                            for student-specific needs. Below are some prototypes of the the types of applications that
                            could be created to improve overall performance and centralization of Northwestern-related
                            services.
                        </span>
                    </div>
                </ScrollTrigger>
                <ScrollTrigger
                    onEnter={() => {
                        this.props.onViewportEnter('SHUTTLE', 3);
                    }}
                >
                    <div className="project-page-project-container project-step">
                        <p className="project-page-subheader default-hovercolor">Shuttle Service</p>
                        <span className="project-page-project-text">
                            Northwestern currently does not have a user-friendly shuttle service mobile application,
                            which comes in handy since Northwestern has campuses both on Evanston and in Chicago. Not
                            only that, but due to the harsh weather conditions during the winter, planning accordingly
                            for a shuttle is crucial. This application would consist of not only displaying{' '}
                            <p className="project-page-keyword default-keyword">live positions</p> of the shuttles, but
                            would also send <p className="project-page-keyword default-keyword">notifications</p> to
                            users when a shuttle approaches their locations of interest. This would make it so that even
                            if the student is not thinking about taking the shuttle, the application reminds that they
                            have such an option.
                        </span>
                        <img className="project-page-project-img" src={shuttleImg} />
                    </div>
                </ScrollTrigger>
                <ScrollTrigger
                    onEnter={() => {
                        this.props.onViewportEnter('TUTOR', 4);
                    }}
                >
                    <div className="project-page-project-container project-step">
                        <p className="project-page-subheader default-hovercolor">Tutoring</p>
                        <span className="project-page-project-text">
                            Tutoring applications can be a challenge to implement as a general application. By focusing
                            this application to only Northwestern students, however, many opportunities arise. Tutoring
                            sessions can be created based on{' '}
                            <p className="project-page-keyword default-keyword">school-specific subjects</p> and
                            material and meeting locations can be conveniently set to on-campus points. Not only that,
                            but since this application would be limited to only authenticated Northwestern students,
                            safety parameters can be easily implemented.
                        </span>
                    </div>
                </ScrollTrigger>
                <ScrollTrigger
                    onEnter={() => {
                        this.props.onViewportEnter('EMPLOYMENT', 5);
                    }}
                >
                    <div className="project-page-project-container project-step">
                        <p className="project-page-subheader default-hovercolor">On-campus employment</p>
                        <span className="project-page-project-text">
                            Another big part of an undergraduate or graduate career at Northwestern is on-campus
                            employment. Whether that consists of a work-study opportunity or a research assistant
                            position, on-campus professional opportunities are important in exposing students to new
                            learning experiences. Although Northwestern keeps a listing of on-campus work study
                            opportunites on its website, many other non-paid or volunteering opportunites are not
                            visible. Furthermore, this application would provide users with{' '}
                            <p className="project-page-keyword default-keyword">reviews</p> and{' '}
                            <p className="project-page-keyword default-keyword">recommendations</p>
                            from previous student employees at job positions to better aid the user in finding a job
                            that would align the best with their interests and goals.
                        </span>
                        <img className="project-page-project-img" src={employmentImg} />
                    </div>
                </ScrollTrigger>
                <ScrollTrigger
                    onEnter={() => {
                        this.props.onViewportEnter('FUTURE WORK', 6);
                    }}
                >
                    <div className="project-page-project-container project-step">
                        <p className="project-page-subheader default-hovercolor">Future Work</p>
                        <span className="project-page-project-text">
                            Although this concept was designed to improving Northwestern-related services, this can
                            easily be extended to any organization. By creating locally-scaled solutions, organizations
                            can increase inner efficiency and connectivity.
                        </span>
                    </div>
                </ScrollTrigger>
            </div>
        );
    }
}

NuHub.propTypes = {
    onViewportEnter: PropTypes.func,
};
