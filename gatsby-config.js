const path = require('path');

module.exports = {
  siteMetadata: {
    defaultTitle: '',
    titleTemplate: '',
    defaultDescription: '',
    defaultImage: '',
    url: '',
    twitterUsername: '',
  },
  plugins: [
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: path.join(__dirname, 'src', 'data'),
      },
    },
    {
      resolve: 'gatsby-plugin-intl',
      options: {
        path: path.join(__dirname, 'src', 'i18n'),
        languages: ['en', 'es'],
        defaultLanguage: 'en',
        redirect: false,
      },
    },
  ],
};
