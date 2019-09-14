import React from 'react';
import PropTypes from 'prop-types';
import './CustomButton.css';

function CustomButton({ className, text, style, onClick, onHover, onLeave }) {
    return (
        <button
            className={`custom-button default-button-color ${className}`}
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
};

export default CustomButton;
