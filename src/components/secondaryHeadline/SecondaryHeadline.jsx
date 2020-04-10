import PropTypes from 'prop-types';
import React from 'react';
import "./secondaryHeadline.less";

class SecondaryHeadline extends React.Component {
	render() {
		return (
			<h2 className = 'component-secondary-headline'>
				{this.props.text}
			</h2>
		);
	}
}

SecondaryHeadline.propTypes = {
	text: PropTypes.string
};

SecondaryHeadline.defaultProps = {
	text: ''
};

export default SecondaryHeadline;
