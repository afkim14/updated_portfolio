import React from 'react';
import PropTypes from 'prop-types';
import SideBar from './SideBar';
import { leaveProjectAnimationDuration } from '../Helpers';
import { animateScroll as scroll } from 'react-scroll';
import './ProjectPage.css';

let thisRef;

export default class ProjectPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goBackClicked: false,
            currentNavItem: 'TOP',
            step: 0,
            totalSteps: 0,
        };
        this.animateThenGoTo = this.animateThenGoTo.bind(this);
        this.updateCurrNavTitle = this.updateCurrNavTitle.bind(this);
        this.onViewportEnter = this.onViewportEnter.bind(this);
        thisRef = this;
        scroll.scrollToTop();
    }

    componentDidMount() {
        let numSteps = document.getElementsByClassName('project-step').length;
        this.setState({ totalSteps: numSteps === 0 ? numSteps : numSteps - 1 });
    }

    componentWillUnmount() {
        thisRef = null;
    }

    animateThenGoTo(link) {
        this.setState({ goBackClicked: true });
        setTimeout(() => {
            this.props.history.push(link);
        }, leaveProjectAnimationDuration);
    }

    updateCurrNavTitle(navTitle, step) {
        if (this.state.totalSteps === 0) {
            return;
        }
        this.setState({
            currentNavItem: navTitle,
            offsetFromTop: Math.floor((parseFloat(step) / parseFloat(this.state.totalSteps)) * 100),
        });
    }

    onViewportEnter(navTitle, step) {
        this.updateCurrNavTitle(navTitle, step);
    }

    render() {
        return (
            <div id="project-page" className={`${this.state.goBackClicked && 'project-page-back-animation'}`}>
                <div
                    className="project-page-back-container default-back-background"
                    onMouseDown={() => {
                        this.animateThenGoTo(this.props.backURL);
                    }}
                >
                    <p className="project-page-back-text">GO BACK</p>
                </div>
                <this.props.content
                    onViewportEnter={this.onViewportEnter}
                    imageColorHoverFilter={this.props.imageColorHoverFilter}
                />
                <SideBar currentNavTitle={this.state.currentNavItem} offsetFromTop={this.state.offsetFromTop} />
            </div>
        );
    }
}

window.onscroll = function() {
    if (thisRef && window.scrollY < 10) {
        thisRef.setState({ currentNavItem: 'TOP', offsetFromTop: 0 });
    }
};

ProjectPage.propTypes = {
    content: PropTypes.func,
    imageColorHoverFilter: PropTypes.string,
    backURL: PropTypes.string
};
