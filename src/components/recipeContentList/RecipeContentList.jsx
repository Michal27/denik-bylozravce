import PropTypes from 'prop-types';
import React from 'react';
import './recipeContentList.less';

const IGNORED_SECTION_TITLE = 'baseSection';

class RecipeContentList extends React.Component {
	render() {
		const { sectionsContentList, sectionTitles, renderOrderedList } = this.props;

		return (
			<div className = 'component-recipe-content-list'>
				{ this._renderContent(sectionsContentList, sectionTitles, renderOrderedList) }
			</div>
		);
	}

	_renderContent(sectionsContentList, sectionTitles, renderOrderedList) {
		const sectionsList = sectionsContentList.map((sectionContent, index) => {
			let renderedList;

			if (renderOrderedList) {
				renderedList =
					<ol
						className = 'component-recipe-content-list-ordered'>
						{ this._renderContentList(sectionContent) }
					</ol>;
			} else {
				renderedList =
					<ul
						className = 'component-recipe-content-list-unordered'>
						{ this._renderContentList(sectionContent) }
					</ul>;
			}

			return (
				<div>
					{ this._renderSectionsTitle(sectionTitles && sectionTitles[index]) }
					{ renderedList }
				</div>
			);
		});

		return sectionsList;
	}

	_renderContentList(sectionContent) {
		return (
			sectionContent.map((contentPoint) => {
				return (
					<li className = 'component-recipe-content-list-point'>
						{ contentPoint }
					</li>
				);
			})
		);
	}

	_renderSectionsTitle(sectionTitle) {
		if (!sectionTitle || sectionTitle === IGNORED_SECTION_TITLE) {
			return null;
		}

		return (
			<h3 className = 'component-recipe-content-list-headline'>
				{ sectionTitle }
			</h3>
		);
	}
}

RecipeContentList.propTypes = {
	sectionsContentList: PropTypes.object,
	sectionTitles: PropTypes.object,
	renderOrderedList: PropTypes.bool
};

RecipeContentList.defaultProps = {
	sectionsContentList: null,
	sectionTitles: null,
	renderOrderedList: true
};

export default RecipeContentList;
