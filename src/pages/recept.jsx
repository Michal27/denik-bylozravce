import React from "react";
import PageTemplate from "../templates/PageTemplate";
import SEO from "../components/seo/SEO";
import MainHeadline from "../components/mainHeadline/MainHeadline";
import SecondaryHeadline from "../components/secondaryHeadline/SecondaryHeadline";

class IndexPage extends React.Component {
	render() {
		return (
			<PageTemplate>
				<SEO title = 'Recept' />
				<MainHeadline text='Chana masala'/>
				<SecondaryHeadline text='Postup'/>
			</PageTemplate>
		);
	}
}

export default IndexPage;
