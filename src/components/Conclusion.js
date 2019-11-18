import React from 'react';
import PropTypes from 'prop-types';
import './Conclusion.css';
import CustomButton from './CustomButton';

const wait = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

export default class Conclusion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonsActive: false
        }
    }

    async componentDidMount() {
        await wait(3000);
        this.setState({ buttonsActive: true });
    }

    render() {
        return (
            <div className="conclusion-page-container">
                <p className="conclusion-page-intro">Thank you for your time!</p>
                {this.state.buttonsActive ? (
                    <CustomButton
                        className={'conclusion-website-btn'}
                        text={'View static website'}
                        inverted={true}
                        onClick={() => {
                            this.props.history.push('/static');
                        }}
                    />
                ) : (
                    <CustomButton
                        className={'conclusion-website-btn-inactive'}
                        text={'View static website'}
                        inactive={true}
                    />
                )}
            </div>
        );
    }
}

Conclusion.propTypes = {
    navigateTo: PropTypes.func,
};