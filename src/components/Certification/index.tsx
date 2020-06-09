import * as React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { Certification as CertificationType } from '../../common/types';
import useTranslation from '../../hooks/useTranslation';
import ListElement from '../UI/ListElement';
import ArrowLink from '../UI/ArrowLink';
import FormattedDate from '../UI/FormattedDate';
import ListElementTitle from '../UI/ListElementTitle';

const Certification: React.FunctionComponent<CertificationType> = ({
  badge, title, description, organization, date, courses, page,
}: CertificationType) => {
  const intl = useIntl();
  const certificationTitle = useTranslation(title);
  const certificationDescription = useTranslation(description);

  const information = (
    <>
      {date ? (
        <FormattedDate date={date} />
      ) : null}
      {date && courses.length ? ' • ' : null}
      {courses.length ? `${courses.length} ${courses.length > 1 ? intl.formatMessage({ id: 'courses' }) : intl.formatMessage({ id: 'course' })}` : null}
    </>
  );

  return (
    <ListElement
      image={`/images/badges/${badge}`}
      title={(
        <ListElementTitle
          title={certificationTitle}
          atTitle={organization.name}
          atUrl={organization.url}
        />
      )}
      information={information}
      description={certificationDescription}
      right={page ? <ArrowLink url={`/${intl.locale}/certification/${page}`} /> : null}
    />
  );
};

export default Certification;
