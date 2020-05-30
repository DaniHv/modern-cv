import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

type Props = {
  title?: string,
  description?: string,
  image?: string,
  children?: React.ReactNode,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle
        titleTemplate
        defaultDescription
        defaultImage
        url
        twitterUsername
      }
    }
  }
`;

const SEO: React.FunctionComponent = ({
  title, description, image, children,
}: Props) => {
  const { site } = useStaticQuery(query);

  const seo = {
    title: title || site.defaultTitle,
    titleTemplate: site.titleTemplate,
    description: description || site.defaultDescription,
    image: image || site.defaultImage,
    url: site.url,
    twitterUsername: site.twitterUsername,
  };

  return (
    <Helmet title={seo.title} titleTemplate={seo.titleTemplate}>
      <meta name="description" content={seo.description} />

      {/* OG Metas */}
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.image && <meta property="og:image" content={seo.image} />}

      {/* Twitter Metas */}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && <meta name="twitter:description" content={seo.description} /> }
      {seo.twitterUsername && <meta name="twitter:creator" content={seo.twitterUsername} /> }
      {seo.image && <meta name="twitter:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />

      {children}
    </Helmet>
  );
};

export default SEO;
