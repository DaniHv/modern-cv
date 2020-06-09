import * as React from 'react';

import { Toggle } from './styles';
import Plus from '../../../images/plus.svg';
import Minus from '../../../images/minus.svg';

type Props = {
  toggled?: boolean,
  handleToggle: () => void,
  children?: null,
};

const ToggleButton: React.FunctionComponent<Props> = ({ toggled, handleToggle }: Props) => (
  <Toggle
    src={toggled ? Minus : Plus}
    alt={toggled ? '' : ''}
    title={toggled ? '' : ''}
    onClick={handleToggle}
  />
);

export default ToggleButton;
