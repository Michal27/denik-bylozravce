import PropTypes from 'prop-types';
import React from 'react';
import Image from "../image/Image";
import './mainImage.less';

function MainImage({ imageData = null }) {
	if (!imageData) {
		return null;
	}

	return (
		<div className='component-main-image'>
			<Image
				src={imageData.src}
				srcSet={imageData.srcSet}
				width={imageData.width}
				height={imageData.height}
				sizes='(max-width: 768px) 100vw, (max-width: 1264px) calc(100vw - 64px), 1200px'
			/>
		</div>
	);
}

MainImage.propTypes = {
	imageData: PropTypes.shape({
		src: PropTypes.string,
		srcSet: PropTypes.string,
		width: PropTypes.number,
		height: PropTypes.number
	})
};

export default MainImage;
