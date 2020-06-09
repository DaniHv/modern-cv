const path = require('path');

module.exports = {
  siteMetadata: {
    defaultTitle: 'Jonh Doe CV',
    titleTemplate: '%s - John Doe CV',
    defaultDescription: '',
    defaultImage: '',
    url: 'https://www.example.com',
    twitterUsername: 'example',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: path.join(__dirname, 'src', 'data'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'md',
        path: path.join(__dirname, 'src', 'md'),
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
