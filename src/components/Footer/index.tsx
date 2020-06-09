import * as React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { Section, Container, Text } from './styles';

const Footer: React.FunctionComponent = () => {
  const intl = useIntl();

  return (
    <Section>
      <Container>
        <Text>
          {intl.formatMessage({ id: 'developedBy' })}
          {' '}
          <a href="https://danihv.com">Daniel Hurtado</a>
          {' - '}
          <a href="https://www.github.com/danihv/modern-cv" target="_blank" rel="noreferrer">
            {intl.formatMessage({ id: 'getSourceCode' })}
          </a>
        </Text>
      </Container>
    </Section>
  );
};

export default Footer;
