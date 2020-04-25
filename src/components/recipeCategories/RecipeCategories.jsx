import PropTypes from 'prop-types';
import React from 'react';
import './recipeCategories.less';

class RecipeCategories extends React.Component {
	render() {
		const { categories, tags } = this.props;
		const categoriesList = categories.concat(tags);

		return (
			<ul className = 'component-recipe-categories'>
				{ this._renderCategoriesList(categoriesList) }
			</ul>
		);
	}

	_renderCategoriesList(categoriesList) {
		// TODO: links to categories
		return (
			categoriesList.map((categoryPoint) => {
				return (
					<li className = 'component-recipe-categories-point'>
						{ categoryPoint }
					</li>
				);
			})
		);
	}
}

RecipeCategories.propTypes = {
	categories: PropTypes.array,
	tags: PropTypes.array
};

RecipeCategories.defaultProps = {
	categories: [],
	tags: []
};

export default RecipeCategories;
