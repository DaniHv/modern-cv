import * as React from 'react';
import { FormattedDate as Formatted } from 'gatsby-plugin-intl';

import { DateMY } from '../../../common/types';

type Props = {
  date: DateMY,
};

const FormattedDate: React.FunctionComponent<Props> = ({ date }: Props) => {
  const dateObj = new Date(date.year, date.month - 1);

  return (
    <Formatted value={dateObj} year="numeric" month="long" />
  );
};

export default FormattedDate;
