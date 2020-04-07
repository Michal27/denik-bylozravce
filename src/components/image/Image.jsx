import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

class Image extends React.Component {
	render() {
		return (
			<Img fluid = { this.props.data.placeholderImage.childImageSharp.fluid } />
		);
	}
}

export default () => {
	const data = useStaticQuery(graphql`
		query {
			placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
				childImageSharp {
					fluid(maxWidth: 300) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	return <Image data = { data }/>;
};
