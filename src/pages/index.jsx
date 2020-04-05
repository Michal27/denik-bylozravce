import React from "react";
import { Link } from "gatsby";
import PageTemplate from "../templates/PageTemplate";
import Image from "../components/Image";
import SEO from "../components/seo";
import Button from "../components/button/Button";

class IndexPage extends React.Component {
	render() {
		return (
			<PageTemplate>
				<SEO title='Home' />
				<h1>Hi people</h1>
				<p>Welcome to your new Gatsby site.</p>
				<p>Now go build something great.</p>
				<Button text='Lalala'/>
			</PageTemplate>
		);
	}
}

export default IndexPage;
