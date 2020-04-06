import React from "react";
import PageTemplate from "../templates/PageTemplate";
import SEO from "../components/seo/SEO";

class NotFoundPage extends React.Component {
	render() {
		return (
			<PageTemplate>
				<SEO title='404: Not found'/>
				<h1>NOT FOUND</h1>
				<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
			</PageTemplate>
		);
	}
}

export default NotFoundPage;
