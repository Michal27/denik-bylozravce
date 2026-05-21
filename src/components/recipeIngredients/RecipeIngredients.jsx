import PropTypes from 'prop-types';
import React from 'react';
import RecipeContentList from '../recipeContentList/RecipeContentList';
import './recipeIngredients.less';

function RecipeIngredients({ ingredients = [], ingredientsSections = [] }) {
	return (
		<div className='component-recipe-ingredients'>
			<RecipeContentList
				sectionsContentList={ingredients}
				sectionTitles={ingredientsSections}
				renderOrderedList={false}
			/>
		</div>
	);
}

RecipeIngredients.propTypes = {
	ingredients: PropTypes.array,
	ingredientsSections: PropTypes.array
};

export default RecipeIngredients;
