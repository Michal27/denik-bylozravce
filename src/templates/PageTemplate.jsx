import React from "react";
import PropTypes from "prop-types";

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
			<>
				<header>I'm cool header</header>
				<main>{this.props.children}</main>
				<footer>
					© {new Date().getFullYear()}, Built with
					{` `}
					<a href='https://www.gatsbyjs.org'>Gatsby</a>
				</footer>
			</>
		);
	}
}

PageTemplate.propTypes = {
	children: PropTypes.node.isRequired
};

export default PageTemplate;
