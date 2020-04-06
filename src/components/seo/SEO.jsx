import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

class SEO extends React.Component {
	render() {
		const { description, lang, meta, siteInfo, title } = this.props;
		const siteMetadataTitle = siteInfo && siteInfo.siteMetadata && siteInfo.siteMetadata.title;

		return (
			<Helmet
				htmlAttributes = {{ lang }}
				title = { title }
				titleTemplate = { `%s | ${siteMetadataTitle}` }
				meta = { this._getMetaInfo(description, meta, siteInfo, title) }
			/>
		);
	}

	_getMetaInfo(description, meta, siteInfo, title) {
		const { siteMetadata } = siteInfo;
		const metaDescription = description || (siteMetadata && siteMetadata.description);
		const metaStructure = [
			{
				name: `description`,
				content: metaDescription
			},
			{
				property: `og:title`,
				content: title
			},
			{
				property: `og:description`,
				content: metaDescription
			},
			{
				property: `og:type`,
				content: `website`
			},
			{
				name: `twitter:card`,
				content: `summary`
			},
			{
				name: `twitter:creator`,
				content: siteMetadata.author
			},
			{
				name: `twitter:title`,
				content: title
			},
			{
				name: `twitter:description`,
				content: metaDescription
			}
		];

		return metaStructure.concat(meta);
	}
}

SEO.defaultProps = {
	description: ``,
	lang: `en`,
	meta: [],
	siteInfo: {}
};

SEO.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string.isRequired,
	siteInfo: PropTypes.object
};

export default (props) => {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
					}
				}
			}
			`
	);

	return (
		<SEO
			siteInfo = { site }
			{...props}/>
	);
};
