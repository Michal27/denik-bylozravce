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
		title: `Gatsby Default Starter`,
		description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
		author: `@gatsbyjs`
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
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `assets/img/gatsby-icon.png`, // This path is relative to the root of the site.
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};
