import PropTypes from 'prop-types';
import React from 'react';
import './recipeNote.less';

class RecipeNote extends React.Component {
	render() {
		const { note } = this.props;
		if (!Array.isArray(note) || note[0] === '') {
			return null;
		}

		return (
			<div className = 'component-recipe-note'>
				<h3 className = 'component-recipe-note-headline'>
					Poznámka
				</h3>
				<div>
					{ this._renderContent(note) }
				</div>
			</div>
		);
	}

	_renderContent(notes) {
		const notesList = notes.map((note) => {

			return <p>{ note }</p>;
		});

		return notesList;
	}
}

RecipeNote.propTypes = {
	note: PropTypes.array
};

RecipeNote.defaultProps = {
	note: []
};

export default RecipeNote;
