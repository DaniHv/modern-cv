import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';

import { List, Study as StudyType } from '../../common/types';
import useTranslation from '../../hooks/useTranslation';
import Section from '../UI/Section';
import SectionTitle from '../UI/SectionTitle';
import ToggleButton from '../UI/ToggleButton';
import ListElement from '../UI/ListElement';
import ArrowLink from '../UI/ArrowLink';
import ListElementTitle from '../UI/ListElementTitle';
import Period from '../UI/Period';

const query = graphql`
  {
    allStudiesJson {
      edges {
        node {
          id
          title {
            locale
            text
          }
          description {
            locale
            text
          }
          institution {
            name
            url
            logo
          }
          period {
            since {
              month
              year
            }
            until {
              month
              year
            }
          }
          page
        }
      }
    }
  }
`;

const StudiesList: React.FunctionComponent<List> = ({ max, toggable }: List) => {
  const { allStudiesJson: { edges: studiesList } } = useStaticQuery(query);
  const [showAll, setShowAll] = React.useState<boolean>(false);
  const [studies, setStudies] = React.useState<[]>(
    max ? studiesList.slice(0, max) : studiesList,
  );
  const intl = useIntl();

  const handleToggle = () => {
    if (showAll) {
      setShowAll(false);
      setStudies(max ? studiesList.slice(0, max) : studiesList);
    } else {
      setShowAll(true);
      setStudies(studiesList);
    }
  };

  const toggleButton = toggable && studiesList.length > max ? (
    <ToggleButton toggled={showAll} handleToggle={handleToggle} />
  ) : null;

  return (
    <Section>
      <SectionTitle title={intl.formatMessage({ id: 'studies' })} right={toggleButton} />

      {studies.map(({ node: study }: { node: StudyType }) => {
        const title = useTranslation(study.title);
        const description = useTranslation(study.description);

        return (
          <ListElement
            key={study.id}
            image={`/images/institutions/${study.institution.logo}`}
            title={(
              <ListElementTitle
                title={title}
                atTitle={study.institution.name}
                atUrl={study.institution.url}
              />
            )}
            information={<Period since={study.period.since} until={study.period.until} />}
            description={description}
            right={study.page ? <ArrowLink url={`/${intl.locale}/study/${study.page}`} /> : null}
          />
        );
      })}
    </Section>
  );
};

export default StudiesList;
