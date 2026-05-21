import PropTypes from 'prop-types';
import React from 'react';
import Image from '../image/Image';
import RecipeCategories from '../recipeCategories/RecipeCategories';
import './relatedRecipes.less';

function renderRelatedRecipeCard(recipe) {
	return (
		<div className='component-related-recipes__card' key={recipe.slug}>
			<div className='component-related-recipes__card-image'>
				<a href={`/recept/${recipe.slug}`}>
					<Image
						src={recipe.imageData && recipe.imageData.src}
						srcSet={recipe.imageData && recipe.imageData.srcSet}
						width={recipe.imageData && recipe.imageData.width}
						height={recipe.imageData && recipe.imageData.height}
						sizes='(max-width: 768px) 100vw, (max-width: 1024px) calc(100vw - 64px), 576px'
						alt={recipe.name}
					/>
				</a>
			</div>
			<div className='component-related-recipes__card-text-area'>
				<a
					className='component-related-recipes__card-link'
					href={`/recept/${recipe.slug}`}
				>
					{recipe.name}
				</a>
				<RecipeCategories categories={recipe.categories} />
			</div>
		</div>
	);
}

function RelatedRecipes({ recipes = [] }) {
	if (!recipes) {
		return null;
	}

	return (
		<div className='component-related-recipes'>
			{recipes.map(recipe => renderRelatedRecipeCard(recipe))}
		</div>
	);
}

RelatedRecipes.propTypes = {
	recipes: PropTypes.arrayOf(PropTypes.object)
};

export default RelatedRecipes;
