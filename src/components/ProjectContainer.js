import React from 'react';
import PropTypes from 'prop-types';
import './ProjectContainer.css';

export default class ProjectContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hovered: this.props.hovered,
        };
    }

    render() {
        const hovered = this.props.defaultHovered ? this.props.hovered : this.state.hovered;
        return (
            <div className="project-container">
                <img
                    className="project-image"
                    src={this.props.img}
                    style={hovered ? this.props.imgHoverStyle : this.props.imgStyle}
                />
                <div className="project-info-container">
                    <p
                        className={`project-header ${hovered && 'default-hovercolor'}`}
                        onMouseEnter={() => {
                            this.setState({ hovered: true });
                            this.props.onHeaderHover();
                        }}
                        onMouseLeave={() => {
                            this.setState({ hovered: false });
                            this.props.onHeaderLeave();
                        }}
                        onMouseDown={() => {
                            this.props.onHeaderClick();
                        }}
                    >
                        {this.props.header}
                    </p>
                    <p className={`project-description default-subcolor ${hovered && 'default-sub-hovercolor'}`}>
                        {this.props.description}
                    </p>
                </div>
                <div style={{ clear: 'both' }} />
            </div>
        );
    }
}

ProjectContainer.propTypes = {
    img: PropTypes.string,
    imgStyle: PropTypes.object,
    imgHoverStyle: PropTypes.object,
    hovered: PropTypes.bool,
    defaultHovered: PropTypes.bool,
    header: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onHeaderHover: PropTypes.func,
    onHeaderLeave: PropTypes.func,
    onHeaderClick: PropTypes.func,
};
