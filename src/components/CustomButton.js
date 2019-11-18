import React from 'react';
import PropTypes from 'prop-types';
import './CustomButton.css';

function CustomButton({ className, text, style, onClick, onHover, onLeave, inactive, inverted }) {
    return (
        <button
            className={`custom-button ${
                inactive
                    ? `custom-button-inactive ${inverted ? 'default-button-inverted-color' : 'default-button-color'}`
                    : `${inverted ? 'default-button-inverted-color' : 'default-button-color custom-button-active'} default-button-color-active`
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
    onClick: PropTypes.func,
    onHover: PropTypes.func,
    onLeave: PropTypes.func,
    inactive: PropTypes.bool,
    inverted: PropTypes.bool,
};

export default CustomButton;
