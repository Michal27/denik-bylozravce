import React from "react";
import MainHeadline from "../components/mainHeadline/MainHeadline";
import SecondaryHeadline from "../components/secondaryHeadline/SecondaryHeadline";
import SEO from "../components/seo/SEO";
import PageTemplate from "../templates/PageTemplate";

class IndexPage extends React.Component {
	render() {
		return (
			<PageTemplate>
				<SEO title = 'Recept'/>
				<MainHeadline text='Chana masala'/>
				<SecondaryHeadline text='Postup'/>
			</PageTemplate>
		);
	}
}

export default IndexPage;
