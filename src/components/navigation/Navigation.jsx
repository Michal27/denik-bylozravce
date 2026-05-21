import PropTypes from 'prop-types';
import React from 'react';
import './navigation.less';

function Navigation({ logoSrc }) {
	return (
		<div className='component-navigation'>
			<div className='component-navigation-logo'>
				<img src={logoSrc} alt='Deník býložravce' />
			</div>
			<div className='component-navigation-links'>
				<a className='component-navigation-link' href='/recepty'>Recepty</a>
				<a className='component-navigation-link' href='/clanky'>Články</a>
			</div>
		</div>
	);
}

Navigation.propTypes = {
	logoSrc: PropTypes.string.isRequired
};

export default Navigation;
