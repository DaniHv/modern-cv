import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';

import { List, Job as JobType } from '../../common/types';
import useTranslation from '../../hooks/useTranslation';
import Section from '../UI/Section';
import SectionTitle from '../UI/SectionTitle';
import ToggleButton from '../UI/ToggleButton';
import ListElement from '../UI/ListElement';
import ListElementTitle from '../UI/ListElementTitle';
import Period from '../UI/Period';
import ArrowLink from '../UI/ArrowLink';

const query = graphql`
  {
    allJobsJson {
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
          organization {
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


const JobList: React.FunctionComponent<List> = ({ max, toggable }: List) => {
  const { allJobsJson: { edges: jobList } } = useStaticQuery(query);
  const [showAll, setShowAll] = React.useState<boolean>(false);
  const [jobs, setJobs] = React.useState<[Array<{}>, any]>(
    max ? jobList.slice(0, max) : jobList,
  );
  const intl = useIntl();

  const handleToggle = () => {
    if (showAll) {
      setShowAll(false);
      setJobs(max ? jobList.slice(0, max) : jobList);
    } else {
      setShowAll(true);
      setJobs(jobList);
    }
  };

  const toggleButton = toggable && jobList.length > max ? (
    <ToggleButton toggled={showAll} handleToggle={handleToggle} />
  ) : null;

  return (
    <Section>
      <SectionTitle title={intl.formatMessage({ id: 'jobs' })} right={toggleButton} />
      {jobs.map(({ node: job }: { node: JobType }) => {
        const title = useTranslation(job.title);
        const description = useTranslation(job.description);

        return (
          <ListElement
            key={job.id}
            image={`/images/organizations/${job.organization.logo}`}
            title={(
              <ListElementTitle
                title={title}
                atTitle={job.organization.name}
                atUrl={job.organization.url}
              />
            )}
            information={<Period since={job.period.since} until={job.period.until} />}
            description={description}
            right={job.page ? <ArrowLink url={`/${intl.locale}/job/${job.page}`} /> : null}
          />
        );
      })}
    </Section>
  );
};

export default JobList;
