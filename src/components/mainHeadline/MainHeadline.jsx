import PropTypes from 'prop-types';
import React from 'react';
import "./mainHeadline.less";

class MainHeadline extends React.Component {
	render() {
		return (
			<h1 className = 'component-main-headline'>
				{this.props.text}
			</h1>
		);
	}
}

MainHeadline.propTypes = {
	text: PropTypes.string
};

MainHeadline.defaultProps = {
	text: ''
};

export default MainHeadline;
