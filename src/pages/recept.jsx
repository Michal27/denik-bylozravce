import React from "react";
import MainHeadline from "../components/mainHeadline/MainHeadline";
import RecipeContent from "../components/recipeContent/RecipeContent";
import SEO from "../components/seo/SEO";
import PageTemplate from "../templates/PageTemplate";

class RecipePage extends React.Component {
	render() {
		return (
			<PageTemplate>
				<SEO title = 'Recept'/>
				<MainHeadline text = 'Chana Masala'/>
				<RecipeContent/>
			</PageTemplate>
		);
	}
}

export default RecipePage;
