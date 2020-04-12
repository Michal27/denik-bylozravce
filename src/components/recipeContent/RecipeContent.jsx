import React from 'react';
import './recipeContent.less';
import SecondaryHeadline from "../secondaryHeadline/SecondaryHeadline";

class RecipeContent extends React.Component {
	render() {
		return (
			<div className = 'component-recipe-content'>
				<div className = 'component-recipe-content-row'>
					<div className = 'component-recipe-content-left'>
						<SecondaryHeadline text='Postup'/>
					</div>
					<div className = 'component-recipe-content-right'>
						<SecondaryHeadline text='Ingredience'/>
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

export default RecipeContent;
