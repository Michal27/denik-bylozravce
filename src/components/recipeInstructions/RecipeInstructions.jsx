import PropTypes from 'prop-types';
import React from 'react';
import RecipeContentList from '../recipeContentList/RecipeContentList';
import './recipeInstructions.less';

class RecipeInstructions extends React.Component {
	render() {
		const { instructions, instructionsSections, renderOrderedList } = this.props;

		return (
			<div className = 'component-recipe-instructions'>
				<RecipeContentList
					sectionsContentList = { instructions }
					sectionTitles = { instructionsSections }
					renderOrderedList = { renderOrderedList }
				/>
			</div>
		);
	}
}

RecipeInstructions.propTypes = {
	instructions: PropTypes.array,
	instructionsSections: PropTypes.array,
	renderOrderedList: PropTypes.bool
};

RecipeInstructions.defaultProps = {
	instructions: [],
	instructionsSections: [],
	renderOrderedList: true
};

export default RecipeInstructions;
