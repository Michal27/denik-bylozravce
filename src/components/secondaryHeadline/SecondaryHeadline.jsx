import PropTypes from 'prop-types';
import React from 'react';
import "./secondaryHeadline.less";

function SecondaryHeadline({ text = '' }) {
	return (
		<h2 className='component-secondary-headline'>
			{text}
		</h2>
	);
}

SecondaryHeadline.propTypes = {
	text: PropTypes.string
};

export default SecondaryHeadline;
