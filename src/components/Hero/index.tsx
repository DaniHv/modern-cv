import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';

import {
  Section, Background, Container, Name, Profession,
} from './styles';

const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "bg.jpg" }) {
      image: childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    information: dataJson {
      name,
      lastName,
      jobTitle {
        locale
        text
      }
    }
  }
`;

const Hero: React.FunctionComponent = () => {
  const intl = useIntl();
  const { heroImage: { image }, information } = useStaticQuery(query);
  const [{ text: jobTitle }] = information.jobTitle.filter(({ locale }) => locale === intl.locale);

  return (
    <Section>
      <Background fluid={image.fluid} />
      <Container>
        <Name>
          {`${information.name} `}
          <span>{information.lastName}</span>
        </Name>
        <Profession>{jobTitle}</Profession>
      </Container>
    </Section>
  );
};

export default Hero;
