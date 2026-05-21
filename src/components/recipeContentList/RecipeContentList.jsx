import PropTypes from 'prop-types';
import React from 'react';
import './recipeContentList.less';

const IGNORED_SECTION_TITLE = 'baseSection';

function renderSectionsTitle(sectionTitle) {
	if (!sectionTitle || sectionTitle === IGNORED_SECTION_TITLE) {
		return null;
	}

	return (
		<h3 className='component-recipe-content-list-headline'>
			{sectionTitle}
		</h3>
	);
}

function renderContentListItems(sectionContent) {
	return sectionContent.map((contentPoint, index) => (
		<li key={index} className='component-recipe-content-list-point'>
			{contentPoint}
		</li>
	));
}

function renderContent(sectionsContentList, sectionTitles, renderOrderedList) {
	return sectionsContentList.map((sectionContent, index) => {
		const list = renderOrderedList
			? <ol className='component-recipe-content-list-ordered'>{renderContentListItems(sectionContent)}</ol>
			: <ul className='component-recipe-content-list-unordered'>{renderContentListItems(sectionContent)}</ul>;

		return (
			<div key={index}>
				{renderSectionsTitle(sectionTitles && sectionTitles[index])}
				{list}
			</div>
		);
	});
}

function RecipeContentList({ sectionsContentList = null, sectionTitles = null, renderOrderedList = true }) {
	return (
		<div className='component-recipe-content-list'>
			{renderContent(sectionsContentList, sectionTitles, renderOrderedList)}
		</div>
	);
}

RecipeContentList.propTypes = {
	sectionsContentList: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
	sectionTitles: PropTypes.arrayOf(PropTypes.string),
	renderOrderedList: PropTypes.bool
};

export default RecipeContentList;
