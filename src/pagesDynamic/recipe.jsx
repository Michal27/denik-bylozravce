import React from "react";
import Image from "../components/image/Image";
import MainHeadline from "../components/mainHeadline/MainHeadline";
import RecipeContent from "../components/recipeContent/RecipeContent";
import SEO from "../components/seo/SEO";
import PageTemplate from "../templates/PageTemplate";
import '../base.less';

class RecipePage extends React.Component {
	render() {
		const { data } = this.props;

		if (!data) {
			return null;
		}

		const {
			currentRecipe,
			relatedRecipes,
			currentRecipeImage,
			relatedRecipesImages
		} = data;
		//TODO:these unused keys should be passed into component RecipeContent to show new component FollowingRecipes :)

		const name = currentRecipe.name;

		return (
			<PageTemplate>
				<SEO title = { name }/>
				<MainHeadline text = { name }/>
				<Image image = { currentRecipeImage }/>
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
		currentRecipeImage: file(relativePath: { eq: $image }) {
			childImageSharp {
				fluid(maxWidth: 2048) {
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
