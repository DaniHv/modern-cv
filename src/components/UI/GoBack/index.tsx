import * as React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { Link, Arrow } from './styles';
import LeftArrow from '../../../images/arrow-left.svg';

const GoBack: React.FunctionComponent = () => {
  const intl = useIntl();

  return (
    <Link to={`/${intl.locale}`}>
      <Arrow src={LeftArrow} />
      {intl.formatMessage({ id: 'goBack' })}
    </Link>
  );
};

export default GoBack;
