import PropTypes from 'prop-types';
import React from 'react';
import "./secondaryHeadline.less";

class SecondaHeadline extends React.Component {
	render() {
		return (
			<h1 className = 'component-secondary-headline'>
				{this.props.text}
			</h1>
		);
	}
}

SecondaHeadline.propTypes = {
	text: PropTypes.string
};

SecondaHeadline.defaultProps = {
	text: ''
};

export default SecondaHeadline;
