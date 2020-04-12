const pxToRem = require('postcss-pxtorem');
const pxToRemOptions = {
	rootValue: 16,
	unitPrecision: 4,
	propList: ['*', '!font', '!*border*'],
	selectorBlackList: [/\w*::(?:after|before)$/],
	replace: true,
	mediaQuery: false,
	minPixelValue: 4
};

module.exports = {
	siteMetadata: {
		title: `Deník býložravce`,
		description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
		author: `Michal Malaník && Dominika Kozlová`
	},
	plugins: [
		{
			resolve: `gatsby-plugin-less`,
			options: {
				postCssPlugins: [pxToRem(pxToRemOptions)],
				modifyVars: require(`./src/lessVariables.js`)
			}
		},
		`gatsby-transformer-json`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: 'data',
				path: `${__dirname}/data`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/assets/img`
			}
		},
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Deník býložravce`,
				short_name: `Deník býložravce`, // eslint-disable-line camelcase
				start_url: `/`, // eslint-disable-line camelcase
				background_color: `#b7da71`, // eslint-disable-line camelcase
				theme_color: `#b7da71`, // eslint-disable-line camelcase
				display: `minimal-ui`,
				icon: `assets/img/gatsby-icon.png` // This path is relative to the root of the site.
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};
