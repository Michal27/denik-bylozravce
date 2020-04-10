import PropTypes from 'prop-types';
import React from 'react';
import { Link, useStaticQuery, graphql } from "gatsby";
import Image from "../image/Image";
import './navigation.less';

class Navigation extends React.Component {
	render() {
		console.log('this.props: ', this.props);
		return (
			<div className = 'component-navigation'>
				<div className = 'component-navigation-logo'>
					<Image image = { this.props.logo }/>
				</div>
				<div className = 'component-navigation-links'>
					<Link
						className = 'component-navigation-link'
						to = '/recepty'
					>
						Recepty
					</Link>
					<Link
						className = 'component-navigation-link'
						to = '/clanky'
					>
						Články
					</Link>
				</div>
			</div>
		);
	}
}

Navigation.propTypes = {
	logo: PropTypes.object
};

Navigation.defaultProps = {
	logo: null
};

export default (props) => {
	const { logo } = useStaticQuery(
		graphql`
			query {
				logo: file(relativePath: { eq: "logo_0.png" }) {
					childImageSharp {
						fluid(maxWidth: 300) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
			`
	);
	console.log('logo: ', logo);

	return (
		<Navigation
			logo = { logo }
			{...props}
		/>
	);
};
