import * as React from 'react';
import { Title } from './styles';

type Props = {
  title: string | React.ReactNode,
  right?: React.ReactNode,
  children?: React.ReactNode,
}

const SectionTitle: React.FunctionComponent<Props> = ({ title, right }: Props) => (
  <Title>
    {title}
    {right}
  </Title>
);

export default SectionTitle;
