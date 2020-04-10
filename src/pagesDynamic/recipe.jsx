import React from "react";
import Image from "../components/image/Image";
import MainHeadline from "../components/mainHeadline/MainHeadline";
import RecipeContent from "../components/recipeContent/RecipeContent";
import SEO from "../components/seo/SEO";
import PageTemplate from "../templates/PageTemplate";

class RecipePage extends React.Component {
	render() {
		const { data } = this.props;

		if (!data) {
			return null;
		}

		return (
			<PageTemplate>
				<SEO title = 'Recept'/>
				<MainHeadline text = 'Chana Masala'/>
				<Image image = { this.props.data.relatedRecipesImages.nodes[0] }/>
				<RecipeContent/>
			</PageTemplate>
		);
	}
}

export default RecipePage;

export const query = graphql`
	query($slug: String!, $image: String!, $relatedRecipesSlugs: [String], $relatedRecipesImages: [String]) {
		currentRecipe: recipesJson(slug: { eq: $slug }) {
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
		relatedRecipes: allRecipesJson(filter: {slug: {in: $relatedRecipesSlugs}}) {
			nodes {
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
		}
		image: file(relativePath: { eq: $image }) {
			childImageSharp {
				fluid(maxWidth: 300) {
					...GatsbyImageSharpFluid
				}
			}
		}
		relatedRecipesImages: allFile(filter: {sourceInstanceName: {eq: "images"}, name: {in: $relatedRecipesImages}}) {
			nodes {
				name
				childImageSharp {
					fluid(maxWidth: 300) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	}
`;
