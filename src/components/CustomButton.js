import React from 'react';
import PropTypes from 'prop-types';
import './CustomButton.css';

function CustomButton({ className, text, style, onClick, onHover, onLeave, inactive }) {
    return (
        <button
            className={`custom-button ${
                inactive
                    ? 'custom-button-inactive default-button-color'
                    : 'custom-button-active default-button-color default-button-color-active'
            } ${className}`}
            style={style}
            onClick={onClick}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
        >
            {text}
        </button>
    );
}

CustomButton.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string.isRequired,
    style: PropTypes.object,
    onClick: PropTypes.func.isRequired,
    onHover: PropTypes.func,
    onLeave: PropTypes.func,
    inactive: PropTypes.bool,
};

export default CustomButton;
