require('dotenv').config();

const languages = require('./src/data/languages');

module.exports = {
	siteMetadata: {
		title: `Gatsby with Contentful`,
		languages,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: 'gatsby-plugin-i18n',
			options: {
				langKeyForNull: 'any',
				langKeyDefault: languages.defaultLangKey,
				useLangKeyLayout: false,
			},
		},
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: process.env.CONTENTFUL_SPACE_ID || '',
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
			},
		},
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`,
			},
		},
		`gatsby-transformer-remark`,
	],
};
