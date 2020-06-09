/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { Certification as CertificationType } from '../common/types';
import useTranslation from '../hooks/useTranslation';
import useMDTranslation from '../hooks/useMDTranslation';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/UI/Section';
import SectionTitle from '../components/UI/SectionTitle';
import ArrowLink from '../components/UI/ArrowLink';
import ListElement from '../components/UI/ListElement';
import FormattedDate from '../components/UI/FormattedDate';
import GoBack from '../components/UI/GoBack';
import CertificationComponent from '../components/Certification';
import Certificate from '../components/Certificate';

type Props = {
  pageContext: {
    certification : CertificationType,
    mds: Array<{}>,
  },
};

const Certification: React.FunctionComponent<Props> = (
  { pageContext: { certification, mds } }: Props,
) => {
  const intl = useIntl();
  const title = useTranslation(certification.title);
  const description = useTranslation(certification.description);
  const md = useMDTranslation(mds);
  console.log(md);

  return (
    <Layout>
      <SEO title={title} description={description} />

      <Section>
        <SectionTitle
          title={(
            <CertificationComponent
              {...certification}
              page={null}
            />
          )}
          right={(<GoBack />)}
        />

        {md ? (
          <div
            dangerouslySetInnerHTML={{ __html: md }}
          />
        ) : null}
      </Section>

      <Section>
        <SectionTitle
          title={intl.formatMessage({ id: 'certificate' })}
          right={certification.certificationUrl
            ? (<ArrowLink text={intl.formatMessage({ id: 'seeCertificate' })} url={certification.certificationUrl} external />)
            : null}
        />

        <Certificate img={certification.certificationImg} url={certification.certificationUrl} />
      </Section>

      {certification.courses.length ? (
        <Section>
          <SectionTitle
            title={`${intl.formatMessage({ id: 'courses' })}: ${certification.courses.length}`}
            right={certification.url
              ? (<ArrowLink text={intl.formatMessage({ id: 'seeProgram' })} url={certification.url} external />)
              : null}
          />

          {certification.courses.map((course) => {
            const coursetitle = useTranslation(course.title);
            const courseDescription = useTranslation(course.description);

            return (
              <ListElement
                key={course.id}
                image={`/images/badges/${course.badge}`}
                title={coursetitle}
                information={course.date
                  ? (<FormattedDate date={course.date} />)
                  : null}
                description={courseDescription}
                right={course.url ? <ArrowLink url={course.url} external /> : null}
              />
            );
          })}
        </Section>
      ) : null}
    </Layout>
  );
};

export default Certification;
