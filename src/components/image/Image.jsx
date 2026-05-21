import PropTypes from 'prop-types';
import React from "react";

function Image({ src = null, srcSet = null, sizes = null, width = null, height = null, alt = '' }) {
	if (!src) {
		return null;
	}

	return (
		<img
			src={src}
			srcSet={srcSet || undefined}
			sizes={sizes || undefined}
			width={width || undefined}
			height={height || undefined}
			alt={alt}
			loading='lazy'
		/>
	);
}

Image.propTypes = {
	src: PropTypes.string,
	srcSet: PropTypes.string,
	sizes: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number,
	alt: PropTypes.string
};

export default Image;
