/* eslint-disable react/no-danger */
import * as React from 'react';

import { Job as JobType } from '../common/types';
import useTranslation from '../hooks/useTranslation';
import useMDTranslation from '../hooks/useMDTranslation';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/UI/Section';
import SectionTitle from '../components/UI/SectionTitle';
import GoBack from '../components/UI/GoBack';
import ListElement from '../components/UI/ListElement';
import Period from '../components/UI/Period';
import ListElementTitle from '../components/UI/ListElementTitle';

type Props = {
  pageContext: {
    job: JobType,
    mds?: Array<{}>
  }
};

const Job: React.FunctionComponent<Props> = ({ pageContext: { job, mds } }: Props) => {
  const title = useTranslation(job.title);
  const description = useTranslation(job.description);
  const md = useMDTranslation(mds);

  return (
    <Layout>
      <SEO title={title} description={description} />

      <Section>
        <SectionTitle
          title={(
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
            />
          )}
          right={<GoBack />}
        />

        {md ? (
          <div
            dangerouslySetInnerHTML={{ __html: md }}
          />
        ) : null}
      </Section>
    </Layout>
  );
};

export default Job;
