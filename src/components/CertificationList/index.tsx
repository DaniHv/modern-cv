/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';

import { List } from '../../common/types';
import Section from '../UI/Section';
import SectionTitle from '../UI/SectionTitle';
import ToggleButton from '../UI/ToggleButton';
import Certification from '../Certification';

const query = graphql`
  {
    allCertificationsJson(
      sort: {
        fields: [date___year, date___month]
        order: [DESC, DESC]
      }
    ) {
      edges {
        node {
          id
          badge
          title {
            locale
            text
          }
          description {
            locale
            text
          }
          organization {
            name
            url
          }
          date {
            month
            year
          }
          page
          courses {
            id
          }
        }
      }
    }
  }
`;

const CertificationList: React.FunctionComponent<List> = ({ max, toggable }: List) => {
  const { allCertificationsJson: { edges: certificationList } } = useStaticQuery(query);
  const [showAll, setShowAll] = React.useState<boolean>(false);
  const [certifications, setCertifications] = React.useState<[Array<{}>, any]>(
    max ? certificationList.slice(0, max) : certificationList,
  );
  const intl = useIntl();

  const handleToggle = () => {
    if (showAll) {
      setShowAll(false);
      setCertifications(max ? certificationList.slice(0, max) : certificationList);
    } else {
      setShowAll(true);
      setCertifications(certificationList);
    }
  };

  const toggleButton = toggable && certificationList.length > max ? (
    <ToggleButton toggled={showAll} handleToggle={handleToggle} />
  ) : null;

  return (
    <Section>
      <SectionTitle title={intl.formatMessage({ id: 'certifications' })} right={toggleButton} />

      {certifications.map(({ node: certification }) => (
        <Certification
          key={certification.id}
          {...certification}
        />
      ))}
    </Section>
  );
};

export default CertificationList;
