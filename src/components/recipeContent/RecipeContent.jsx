import PropTypes from 'prop-types';
import React from 'react';
import './recipeContent.less';
import RecipeCategories from '../recipeCategories/RecipeCategories';
import RecipeIngredients from '../recipeIngredients/RecipeIngredients';
import RecipeInstructions from '../recipeInstructions/RecipeInstructions';
import RelatedRecipes from '../relatedRecipes/RelatedRecipes';
import SecondaryHeadline from '../secondaryHeadline/SecondaryHeadline';
import ServingsBadge from '../servingsBadge/ServingsBadge';

function RecipeContent({ currentRecipe = null, relatedRecipes = [] }) {
	if (!currentRecipe) {
		return null;
	}

	return (
		<div className='component-recipe-content'>
			<div className='component-recipe-content-row'>
				<div className='component-recipe-content-left'>
					<SecondaryHeadline text='Postup' />
					<RecipeInstructions
						instructions={currentRecipe.instructions}
						instructionsSections={currentRecipe.instructionsSections}
					/>
				</div>
				<div className='component-recipe-content-right'>
					<div className='component-recipe-content-ingredients-header'>
						<SecondaryHeadline text='Ingredience' />
						<ServingsBadge servings={currentRecipe.servings} />
					</div>
					<RecipeIngredients
						ingredients={currentRecipe.ingredients}
						ingredientsSections={currentRecipe.ingredientsSections}
					/>
				</div>
			</div>
			<div className='component-recipe-content-full'>
				<SecondaryHeadline text='Kategorie receptu' />
				<RecipeCategories
					categories={currentRecipe.categories}
					tags={currentRecipe.tags}
				/>
			</div>
			<div className='component-recipe-content-full'>
				<SecondaryHeadline text='Další recepty' />
				<RelatedRecipes recipes={relatedRecipes} />
			</div>
		</div>
	);
}

RecipeContent.propTypes = {
	currentRecipe: PropTypes.object,
	relatedRecipes: PropTypes.arrayOf(PropTypes.object)
};

export default RecipeContent;
