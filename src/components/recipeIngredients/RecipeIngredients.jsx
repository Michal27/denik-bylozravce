import PropTypes from 'prop-types';
import React from 'react';
import RecipeContentList from '../recipeContentList/RecipeContentList';
import './recipeIngredients.less';

class RecipeIngredients extends React.Component {
	render() {
		const { ingredients, ingredientsSections } = this.props;

		return (
			<div className = 'component-recipe-ingredients'>
				<RecipeContentList
					sectionsContentList = { ingredients }
					sectionTitles = { ingredientsSections }
					renderOrderedList = { false }
				/>
			</div>
		);
	}
}

RecipeIngredients.propTypes = {
	ingredients: PropTypes.array,
	ingredientsSections: PropTypes.array
};

RecipeIngredients.defaultProps = {
	ingredients: [],
	ingredientsSections: []
};

export default RecipeIngredients;
