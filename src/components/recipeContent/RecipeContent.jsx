import PropTypes from 'prop-types';
import React from 'react';
import './recipeContent.less';
import RecipeIngredients from '../recipeIngredients/RecipeIngredients';
import RecipeInstructions from '../recipeInstructions/RecipeInstructions';
import RecipeNote from '../recipeNote/RecipeNote';
import SecondaryHeadline from "../secondaryHeadline/SecondaryHeadline";

class RecipeContent extends React.Component {
	render() {
		const { currentRecipe } = this.props;

		if (!currentRecipe) {
			return null;
		}

		return (
			<div className = 'component-recipe-content'>
				<div className = 'component-recipe-content-row'>
					<div className = 'component-recipe-content-left'>
						<SecondaryHeadline text='Postup'/>
						<RecipeInstructions
							instructions = { currentRecipe.instructions }
							instructionsSections = { currentRecipe.instructionsSections }
						/>
						<RecipeNote note = { currentRecipe.note }/>
					</div>
					<div className = 'component-recipe-content-right'>
						<SecondaryHeadline text='Ingredience'/>
						<RecipeIngredients
							ingredients = { currentRecipe.ingredients }
							ingredientsSections = { currentRecipe.ingredientsSections }
						/>
					</div>
				</div>
				<div className = 'component-recipe-content-row'>
					<div className = 'component-recipe-content-left'>
						<SecondaryHeadline text='Další recepty'/>
					</div>
					<div className = 'component-recipe-content-right'>
						<SecondaryHeadline text='Kategorie receptu'/>
					</div>
				</div>
			</div>
		);
	}
}

RecipeContent.propTypes = {
	currentRecipe: PropTypes.object
};

RecipeContent.defaultProps = {
	currentRecipe: null
};


export default RecipeContent;
