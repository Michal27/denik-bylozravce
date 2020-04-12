import PropTypes from 'prop-types';
import React from 'react';
import './recipeInstructions.less';

const IGNORED_SECTION_TITLE = 'baseSection';

class RecipeInstructions extends React.Component {
	render() {
		const { instructions, instructionsSections, renderOrderedList } = this.props;

		return (
			<div className = 'component-recipe-instructions'>
				{ this._renderContent(instructions, instructionsSections, renderOrderedList) }
			</div>
		);
	}

	_renderContent(contentSectionsList, contentSectionsTitles, renderOrderedList) {
		const sectionsList = contentSectionsList.map((contentSection, index) => {
			let renderedList;

			if (renderOrderedList) {
				renderedList = <ol>{ this._renderContentList(contentSection) }</ol>;
			} else {
				renderedList = <ul>{ this._renderContentList(contentSection) }</ul>;
			}

			return (
				<div>
					{ this._renderSectionsTitle(contentSectionsTitles[index]) }
					{ renderedList }
				</div>
			);
		});

		return sectionsList;
	}

	_renderContentList(contentSection) {
		const contentList = contentSection.map((contentPoint) => {
			return (
				<li className = 'component-recipe-instructions-point'>
					<div>{ contentPoint }</div>
				</li>
			);
		});

		return contentList;
	}

	_renderSectionsTitle(sectionTitle) {
		if (sectionTitle === IGNORED_SECTION_TITLE) {
			return null;
		}

		return (
			<h3 className = 'component-recipe-instructions-headline'>
				{ sectionTitle }
			</h3>
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
