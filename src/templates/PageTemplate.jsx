import React from "react";
import PropTypes from "prop-types";
import Navigation from "../components/navigation/Navigation";
import "./pageTemplate.less";

class PageTemplate extends React.Component {
	/*const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
		`)*/

	render() {
		return (
			<div className = 'page-template'>
				<header className = 'page-template-header'>
					<Navigation/>
				</header>
				<main>{this.props.children}</main>
				<footer>
					© {new Date().getFullYear()}, Built with
					{` `}
					<a href='https://www.gatsbyjs.org'>Gatsby</a>
				</footer>
			</div>
		);
	}
}

PageTemplate.propTypes = {
	children: PropTypes.node.isRequired
};

export default PageTemplate;
