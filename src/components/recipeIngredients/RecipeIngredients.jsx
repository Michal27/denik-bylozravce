import PropTypes from 'prop-types';
import React from 'react';
import RecipeContentList from '../recipeContentList/RecipeContentList';
import './recipeIngredients.less';

class RecipeIngredients extends React.Component {
	render() {
		const { ingredients, ingredientsSections, renderOrderedList } = this.props;

		return (
			<div className = 'component-recipe-ingredients'>
				<RecipeContentList
					sectionsContentList = { ingredients }
					sectionTitles = { ingredientsSections }
					renderOrderedList = { renderOrderedList }
				/>
			</div>
		);
	}
}

RecipeIngredients.propTypes = {
	ingredients: PropTypes.array,
	ingredientsSections: PropTypes.array,
	renderOrderedList: PropTypes.bool
};

RecipeIngredients.defaultProps = {
	ingredients: [],
	ingredientsSections: [],
	renderOrderedList: false
};

export default RecipeIngredients;
