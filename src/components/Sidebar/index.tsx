import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';

import useTranslation from '../../hooks/useTranslation';
import {
  Container, Avatar, InfoGrid, Table, LinkImg,
} from './styles';
import Section from '../UI/Section';
import SectionTitle from '../UI/SectionTitle';

const query = graphql`
  query {
    avatar: file(relativePath: { eq: "avatar.jpg" }) {
      image: childImageSharp {
        fluid(maxWidth: 175, maxHeight: 175) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    information: dataJson {
      name
      lastName
      jobTitle {
        locale
        text
      }
      age
      address
      phone
      email
      languages {
        language
        level
      }
    }
    links: allLinksJson {
      edges {
        node {
          name
          img
          url
          domain
          path
        }
      }
    }
  }
`;

const Sidebar: React.FunctionComponent = () => {
  const queryData = useStaticQuery(query);
  const { avatar: { image }, information, links: { edges: links } } = queryData;
  const intl = useIntl();
  const jobTitle = useTranslation(information.jobTitle);

  return (
    <Container>
      <Avatar fluid={image.fluid} />

      <InfoGrid>
        <Section>
          <SectionTitle title={intl.formatMessage({ id: 'personalInfo' })} />

          <Table>
            <tbody>
              <tr>
                <td>
                  {intl.formatMessage({ id: 'name' })}
                </td>
                <td>
                  {`${information.name} ${information.lastName}`}
                </td>
              </tr>
              <tr>
                <td>
                  {intl.formatMessage({ id: 'jobTitle' })}
                </td>
                <td>
                  {jobTitle}
                </td>
              </tr>
              <tr>
                <td>
                  {intl.formatMessage({ id: 'age' })}
                </td>
                <td>
                  {`${information.age} ${intl.formatMessage({ id: 'years' })}`}
                </td>
              </tr>
            </tbody>
          </Table>
        </Section>

        <Section>
          <SectionTitle title={intl.formatMessage({ id: 'contactInfo' })} />

          <Table>
            <tbody>
              <tr>
                <td>
                  {intl.formatMessage({ id: 'email' })}
                </td>
                <td>
                  <a href={`mailto:${information.email}`}>{information.email}</a>
                </td>
              </tr>
              <tr>
                <td>
                  {intl.formatMessage({ id: 'phone' })}
                </td>
                <td>
                  <a href={`tel:${information.phone}`}>{information.phone}</a>
                </td>
              </tr>
              <tr>
                <td>
                  {intl.formatMessage({ id: 'address' })}
                </td>
                <td>
                  {information.address}
                </td>
              </tr>
            </tbody>
          </Table>
        </Section>

        <Section>
          <SectionTitle title={intl.formatMessage({ id: 'links' })} />

          <Table>
            <tbody>
              {links.map(({ node: link }) => (
                <tr key={link.name}>
                  <td>
                    <LinkImg>
                      <img src={`/images/links/${link.img}`} alt={link.name} title={link.name} />
                    </LinkImg>
                  </td>
                  <td>
                    <a href={link.url} target="_blank" rel="noreferrer">
                      <b>{link.domain}</b>
                      {`/${link.path}`}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Section>

        <Section>
          <SectionTitle title={intl.formatMessage({ id: 'languages' })} />

          <Table>
            <tbody>
              {information.languages.map(({ language, level }) => (
                <tr>
                  <td>{language}</td>
                  <td>{level}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Section>
      </InfoGrid>
    </Container>
  );
};

export default Sidebar;
