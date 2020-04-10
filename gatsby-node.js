exports.createPages = async({ actions, graphql }) => {
	const { data: recipesData } = await graphql(`
		query {
			allRecipesJson {
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
		}
	`);//TODO: reduce this structure later (only necessary keys)

	const allRecipes = recipesData.allRecipesJson.nodes;
	allRecipes.forEach((currentRecipe) => {
		const slug = currentRecipe.slug;
		const image = currentRecipe.image;
		const { relatedRecipesSlugs, relatedRecipesImages } = _getRelatedRecipes(allRecipes, currentRecipe);

		actions.createPage({
			path: `/recept/${slug}`,
			component: require.resolve(`./src/pagesDynamic/recipe.jsx`),
			context: { slug, image, relatedRecipesSlugs, relatedRecipesImages }
		});
	});

	function _getRelatedRecipes(allRecipes, currentRecipe) {
		const relatedRecipesSlugs = [];
		const relatedRecipesImages = [];

		allRecipes.forEach((recipe, index) => {
			if (index < 3) {
				relatedRecipesSlugs.push(recipe.slug);
				relatedRecipesImages.push(recipe.image.split('.').shift());
			}
		});

		return {
			relatedRecipesSlugs,
			relatedRecipesImages
		};
	}
};
