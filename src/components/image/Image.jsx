import PropTypes from 'prop-types';
import React from "react";
import Img from "gatsby-image";

class Image extends React.Component {
	render() {
		const { image } = this.props;

		if (!image) {
			return null;
		}

		return (
			<Img fluid = { image.childImageSharp.fluid } />
		);
	}
}

Image.propTypes = {
	image: PropTypes.object
};

Image.defaultProps = {
	image: null
};

export default Image;
