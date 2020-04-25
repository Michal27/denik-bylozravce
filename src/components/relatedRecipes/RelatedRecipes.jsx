import PropTypes from 'prop-types';
import React from 'react';
import { Link } from "gatsby";
import Image from "../image/Image";
import './relatedRecipes.less';

class RelatedRecipes extends React.Component {
	render() {
		const { recipes } = this.props;

		if (!recipes) {
			return null;
		}

		return (
			<div className = 'component-related-recipes'>
				{ this._renderRelatedRecipes(recipes) }
			</div>
		);
	}

	_renderRelatedRecipes(recipes) {
		return recipes.map(recipe =>
			this._renderRelatedRecipeCard(recipe)
		);
	}

	_renderRelatedRecipeCard(recipe) {
		return (
			<div className = 'component-related-recipes__card'>
				<div className = 'component-related-recipes__card-image'>
					<Link to = {`/recept/${recipe.slug}`}>
						<Image image = { recipe.imageGatsbyObject }/>
					</Link>
				</div>
				<div className = 'component-related-recipes__card-text-area'>
					<Link
						className = 'component-related-recipes__card-link'
						to = {`/recept/${recipe.slug}`}
					>
						{ recipe.name }
					</Link>
					<div className = 'component-related-recipes__card-categories'>
						{ this._renderRecipeCategories(recipe.categories) }
					</div>
				</div>
			</div>
		);
	}

	_renderRecipeCategories(categories) {
		if (!Array.isArray(categories)) {
			return null;
		}

		return categories.map((category, index) => {
			return (
				<div className = 'component-related-recipes__card-category'>
					{`${category}${index !== categories.length - 1 ? ',' : ''}`}
				</div>
			);
		});
	}
}

RelatedRecipes.propTypes = {
	recipes: PropTypes.arrayOf(PropTypes.object)
};

RelatedRecipes.defaultProps = {
	recipes: []
};

export default RelatedRecipes;
