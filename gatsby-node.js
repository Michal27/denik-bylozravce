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
	`);

	recipesData.allRecipesJson.nodes.forEach((recipe) => {
		const slug = recipe.slug;
		const image = recipe.image;

		actions.createPage({
			path: `/recept/${slug}`,
			component: require.resolve(`./src/pagesDynamic/recipe.jsx`),
			context: { slug, image }
		});
	});
};
