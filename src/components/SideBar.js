import React from 'react';
import PropTypes from 'prop-types';
import './SideBar.css';
import { animateScroll as scroll } from 'react-scroll';

function SideBar({ currentNavTitle, offsetFromTop }) {
    return (
        <div className="side-bar-container">
            <div
                className="side-bar-current-container"
                style={{
                    top: `${offsetFromTop > 100 ? 100 : offsetFromTop}%`,
                }}
            >
                <p className="side-bar-header">{currentNavTitle}</p>
                <div className="side-bar-circle default-light-background"></div>
            </div>
            <div className="side-bar-bar default-light-background"></div>
            <div className={offsetFromTop > 0 ? 'side-bar-top-container' : 'side-bar-top-container-hidden'}>
                <p className="side-bar-top-header">GO UP</p>
                <div
                    className="side-bar-top-circle default-light-background"
                    onClick={() => {
                        scroll.scrollToTop();
                    }}
                ></div>
            </div>
        </div>
    );
}

SideBar.propTypes = {
    currentNavTitle: PropTypes.string,
    offsetFromTop: PropTypes.number,
};

export default SideBar;
