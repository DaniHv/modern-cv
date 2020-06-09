import * as React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { Container, Title, Bar } from './styles';

type Props = {
  name: string,
  percent: number,
};

const Knowledge: React.FunctionComponent<Props> = ({ name, percent }: Props) => (
  <Container>
    <Title>{name}</Title>
    <Bar value={percent} max="100" />
  </Container>
);

export default Knowledge;
