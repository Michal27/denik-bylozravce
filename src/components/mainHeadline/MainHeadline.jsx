import PropTypes from 'prop-types';
import React from 'react';
import "./mainHeadline.less";

function MainHeadline({ text = '' }) {
	return (
		<h1 className='component-main-headline'>
			{text}
		</h1>
	);
}

MainHeadline.propTypes = {
	text: PropTypes.string
};

export default MainHeadline;
