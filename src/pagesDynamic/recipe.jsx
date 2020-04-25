import React from "react";
import MainHeadline from "../components/mainHeadline/MainHeadline";
import MainImage from "../components/mainImage/MainImage";
import RecipeContent from "../components/recipeContent/RecipeContent";
import SEO from "../components/seo/SEO";
import PageTemplate from "../templates/PageTemplate";
import '../less/reset.less';
import '../less/base.less';

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

		const currentRecipeName = currentRecipe.name;
		const relatedRecipesWithImages = this._assignImagesToRecipes(relatedRecipes, relatedRecipesImages);

		return (
			<PageTemplate>
				<SEO title = { currentRecipeName }/>
				<MainHeadline text = { currentRecipeName }/>
				<MainImage image = { currentRecipeImage }/>
				<RecipeContent
					currentRecipe = { currentRecipe }
					relatedRecipes = { relatedRecipesWithImages }
				/>
			</PageTemplate>
		);
	}

	_assignImagesToRecipes(recipesNodes, imagesNodes) {
		if (
			!this._isValidDataObject(recipesNodes) ||
			!this._isValidDataObject(imagesNodes)
		) {
			return [];
		}

		const recipes = recipesNodes.nodes.slice(0);
		const images = imagesNodes.nodes.slice(0);

		return recipes.map((recipe, index) => {
			return Object.assign({}, recipe, { imageGatsbyObject: images[index] });
		});
	}

	_isValidDataObject(dataObject) {
		return (
			dataObject &&
			dataObject.nodes &&
			Array.isArray(dataObject.nodes)
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
					fluid(maxWidth: 1024) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	}
`;
