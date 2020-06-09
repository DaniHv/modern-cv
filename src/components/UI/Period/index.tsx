import * as React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { DateMY } from '../../../common/types';
import FormattedDate from '../FormattedDate';

type Props = {
  since: DateMY,
  until?: DateMY,
};

const Period: React.FunctionComponent<Props> = ({ since, until }: Props) => {
  const intl = useIntl();

  return (
    <>
      <FormattedDate date={since} />
      {' - '}
      {until ? (
        <FormattedDate date={since} />
      ) : intl.formatMessage({ id: 'present' })}
    </>
  );
};

export default Period;
