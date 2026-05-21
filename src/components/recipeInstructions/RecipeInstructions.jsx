import PropTypes from 'prop-types';
import React from 'react';
import RecipeContentList from '../recipeContentList/RecipeContentList';
import './recipeInstructions.less';

function RecipeInstructions({ instructions = [], instructionsSections = [] }) {
	return (
		<div className='component-recipe-instructions'>
			<RecipeContentList
				sectionsContentList={instructions}
				sectionTitles={instructionsSections}
				renderOrderedList={true}
			/>
		</div>
	);
}

RecipeInstructions.propTypes = {
	instructions: PropTypes.array,
	instructionsSections: PropTypes.array
};

export default RecipeInstructions;
