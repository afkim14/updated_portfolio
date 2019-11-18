import React from 'react';
import PropTypes from 'prop-types';
import './IntroPage.css';
import { openLink } from '../Helpers';
import CustomButton from './CustomButton';
import { navigate } from 'hookrouter';

const descriptions = [
    'Imagining and constructing interactive experiences.',
    'Designing transparent and user-focused systems.',
    'Building technology that remains emotional and personal.'
];

const wait = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const DESCRIPTION_TOGGLE_MS = 3 * 1000;
let descriptionInterval;

export default class IntroPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currDescriptionIdx: 0,
            getStartedActive: false
        }
    }

    async componentDidMount() {
        await wait(1500);
        if (this.props.skipIntro) {
            this.setState({ getStartedActive: true });
        }

        descriptionInterval = setInterval(() => {
            if (this.state.currDescriptionIdx === descriptions.length - 1) {
                this.setState({ getStartedActive: true });
            }
            this.setState({ currDescriptionIdx: (this.state.currDescriptionIdx + 1) % descriptions.length });
        }, DESCRIPTION_TOGGLE_MS);
    }

    componentWillUnmount() {
        clearInterval(descriptionInterval);
    }

    render() {
        return (
            <div className="intro-home-container">
                <p className="intro-home-name default-accent-color">{"Hello, I'm Andres!"}</p>
                <span className="intro-home-job-title">
                    Software Engineer @
                    <a 
                        className="project-page-keyword intro-home-company default-accent-color" 
                        onClick={() => { openLink('http://deeplocal.com') }}
                    >
                        Deeplocal
                    </a>
                </span>
                <br />
                <p className="intro-home-desc">{descriptions[this.state.currDescriptionIdx]}</p>
                {
                    this.state.getStartedActive ? (
                        <CustomButton
                            className={'intro-home-button'}
                            text={'Get started'}
                            inverted={true}
                            onClick={() => {
                                navigate('/work');
                            }}
                        />
                    ) : (
                        <CustomButton
                            className={'intro-home-button-inactive'}
                            text={'Get started'}
                            inactive={true}
                        />
                    )
                }
            </div>
        );
    }
}

IntroPage.propTypes = {
    skipIntro: PropTypes.bool
};