import * as React from 'react';

import { Link, Anchor, Arrow } from './styles';
import RightArrow from '../../../images/arrow-right.svg';

type Props = {
  text?: string,
  url: string,
  external?: boolean
}

const ArrowLink: React.FunctionComponent<Props> = ({ text, url, external }: Props) => {
  if (external) {
    return (
      <Anchor href={url} target="_blank" rel="noreferrer">
        {text}
        <Arrow src={RightArrow} />
      </Anchor>
    );
  }

  return (
    <Link to={url}>
      {text}
      <Arrow src={RightArrow} />
    </Link>
  );
};

export default ArrowLink;
