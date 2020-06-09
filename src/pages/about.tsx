import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/UI/Section';
import SectionTitle from '../components/UI/SectionTitle';
import GoBack from '../components/UI/GoBack';

const query = graphql`
  {
    allFile(
      filter: { name: { regex: "/about/" } }
    ) {
      edges {
        node {
          name
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`;

const About: React.FunctionComponent = () => {
  const { allFile: { edges: files } } = useStaticQuery(query);
  const intl = useIntl();

  const [{ node: { childMarkdownRemark: { html } } }] = files.length === 1 ? files : files.filter(({ node: file }) => file.name === `about.${intl.locale}`);

  return (
    <>
      <SEO title="hola" description="hola" />

      <Layout>
        <Section>
          <SectionTitle title={intl.formatMessage({ id: 'aboutMe' })} right={(<GoBack />)} />

          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Section>
      </Layout>
    </>
  );
};

export default About;
