import * as React from 'react';

import { Img } from './styles';

type Props = {
  title?: string,
  img: string,
  url?: string,
}

const Certificate: React.FunctionComponent<Props> = ({ title, img, url }: Props) => (
  <a href={url} target="_blank" rel="noreferrer">
    <Img src={`/images/certifications/${img}`} alt={title} title={title} />
  </a>
);

export default Certificate;
