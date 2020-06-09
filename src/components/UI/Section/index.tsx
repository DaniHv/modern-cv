import * as React from 'react';

import { Section as StyledSection } from './styles';

type Props = {
  children: React.ReactNode,
}

const Section: React.FunctionComponent<Props> = ({ children }: Props) => (
  <StyledSection>
    {children}
  </StyledSection>
);

export default Section;
