import PropTypes from 'prop-types';
import React from 'react';
import Image from "../image/Image";
import './mainImage.less';

class MainImage extends React.Component {
	render() {
		const { image } = this.props;

		if (!image) {
			return null;
		}

		return (
			<div className = 'component-main-image'>
				<Image image = { image }/>
			</div>
		);
	}
}

MainImage.propTypes = {
	image: PropTypes.object
};

MainImage.defaultProps = {
	image: null
};

export default MainImage;
