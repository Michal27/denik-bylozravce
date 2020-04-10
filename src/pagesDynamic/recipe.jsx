import React from "react";
import SEO from "../components/seo/SEO";
import PageTemplate from "../templates/PageTemplate";
import Image from "../components/image/Image";

class RecipePage extends React.Component {
	render() {
		const { data } = this.props;

		if (!data) {
			return null;
		}

		return (
			<PageTemplate>
				<SEO title = 'Recept'/>
				<Image image = { this.props.data.image }/>
			</PageTemplate>
		);
	}
}

export default RecipePage;

export const query = graphql`
	query($slug: String!, $image: String!) {
		recipesJson(slug: { eq: $slug }) {
			categories
			image
			ingredients
			ingredientsSections
			instructions
			instructionsSections
			name
			note
			servings
			slug
			tags
		}
		image: file(relativePath: { eq: $image }) {
			childImageSharp {
				fluid(maxWidth: 300) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;
