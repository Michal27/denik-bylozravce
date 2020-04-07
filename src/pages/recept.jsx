import React from "react";
import PageTemplate from "../templates/PageTemplate";
import SEO from "../components/seo/SEO";
import Button from "../components/button/Button";
import MainHeadline from "../components/mainHeadline/MainHeadline";

class IndexPage extends React.Component {
	render() {
		return (
			<PageTemplate>
				<SEO title = 'Recept' />
				<MainHeadline text='Chana masala'/>
			</PageTemplate>
		);
	}
}

export default IndexPage;
