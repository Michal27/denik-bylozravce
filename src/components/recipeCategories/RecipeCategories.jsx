import PropTypes from 'prop-types';
import React from 'react';
import './recipeCategories.less';

function RecipeCategories({ categories = [], tags = [] }) {
	const allItems = [
		...categories.map(c => ({ ...c, urlPrefix: 'kategorie' })),
		...tags.map(t => ({ ...t, urlPrefix: 'tag' }))
	];

	if (allItems.length === 0) {
		return null;
	}

	return (
		<div className='component-recipe-categories'>
			{allItems.map(item => (
				<a
					key={item.slug}
					className='component-recipe-categories__tag'
					href={`/${item.urlPrefix}/${item.slug}`}
				>
					{item.name}
				</a>
			))}
		</div>
	);
}

RecipeCategories.propTypes = {
	categories: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		slug: PropTypes.string.isRequired
	})),
	tags: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		slug: PropTypes.string.isRequired
	}))
};

export default RecipeCategories;
