import PropTypes from 'prop-types';
import React from 'react';
import RecipeContentList from '../recipeContentList/RecipeContentList';
import './recipeInstructions.less';

class RecipeInstructions extends React.Component {
	render() {
		const { instructions, instructionsSections } = this.props;

		return (
			<div className = 'component-recipe-instructions'>
				<RecipeContentList
					sectionsContentList = { instructions }
					sectionTitles = { instructionsSections }
					renderOrderedList = { true }
				/>
			</div>
		);
	}
}

RecipeInstructions.propTypes = {
	instructions: PropTypes.array,
	instructionsSections: PropTypes.array,
};

RecipeInstructions.defaultProps = {
	instructions: [],
	instructionsSections: [],
};

export default RecipeInstructions;
