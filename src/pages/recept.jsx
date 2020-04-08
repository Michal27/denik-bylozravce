import React from "react";
import RecipeContent from "../components/recipeContent/RecipeContent";
import PageTemplate from "../templates/PageTemplate";
import SEO from "../components/seo/SEO";
import MainHeadline from "../components/mainHeadline/MainHeadline";

class IndexPage extends React.Component {
	render() {
		return (
			<PageTemplate>
				<SEO title = 'Recept' />
				<MainHeadline text='Chana Masala'/>
				<RecipeContent text='1'/>
			</PageTemplate>
		);
	}
}

export default IndexPage;
