import PropTypes from 'prop-types';
import React from 'react';
import "./button.less";

class Button extends React.Component {
	constructor() {
		super();

		this.state = {
			color: 'blue'
		};
	}

	render() {
		if (this.state.color === 'blue') {
			return this._renderBlueButton();
		} else if (this.state.color === 'green') {
			return this._renderGreenButton();
		}
	}

	_renderBlueButton() {
		console.log('this.state: ', this.state);
		console.log('Rendering blue button');

		return (
			<button
				className = 'component-button component-button-blue'
				onClick = { () => {
					this._onBlueButtonClicked();
				} }
			>
				{ this.props.text }
			</button>
		);
	}

	_renderGreenButton() {
		console.log('this.state: ', this.state);
		console.log('Rendering green button');

		return (
			<button
				className = 'component-button component-button-green'
				onClick = { this._onGreenButtonClicked.bind(this) }
			>
				{ this.props.text }
			</button>
		);
	}

	_onBlueButtonClicked() {
		this.setState({ color: 'green' });
	}

	_onGreenButtonClicked() {
		this.setState({ color: 'blue' });
	}
}

Button.propTypes = {
	text: PropTypes.string
};

Button.defaultProps = {
	text: 'My very cool button'
};

export default Button;
