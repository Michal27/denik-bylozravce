import PropTypes from 'prop-types';
import React from 'react';
import './servingsBadge.less';

function ServingsBadge({ servings }) {
	return (
		<div className='component-servings-badge'>
			<svg
				className='component-servings-badge__icon'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 24 24'
				width='22'
				height='22'
				fill='currentColor'
				aria-hidden='true'
			>
				<path d='M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z'/>
			</svg>
			<span className='component-servings-badge__value'>{servings}</span>
			<span className='component-servings-badge__label'>porce</span>
		</div>
	);
}

ServingsBadge.propTypes = {
	servings: PropTypes.string
};

export default ServingsBadge;
