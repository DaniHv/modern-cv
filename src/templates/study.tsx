/* eslint-disable react/no-danger */
import * as React from 'react';

import { Study as StudyType } from '../common/types';
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
    study: StudyType,
    mds?: Array<{}>
  }
};

const Study: React.FunctionComponent<Props> = ({ pageContext: { study, mds } }: Props) => {
  const title = useTranslation(study.title);
  const description = useTranslation(study.description);
  const md = useMDTranslation(mds);

  return (
    <Layout>
      <SEO title={title} description={description} />

      <Section>
        <SectionTitle
          title={(
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

export default Study;
