import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';

import useTranslation from '../../hooks/useTranslation';
import Section from '../UI/Section';
import SectionTitle from '../UI/SectionTitle';
import ArrowLink from '../UI/ArrowLink';
import { AboutText } from './styles';
import SkillList from '../SkillList';

const query = graphql`
  {
    dataJson {
      about {
        locale
        text
      }
    }
  }
`;

const About: React.FunctionComponent = () => {
  const intl = useIntl();
  const { dataJson: { about } } = useStaticQuery(query);
  const aboutMe = useTranslation(about);

  return (
    <Section>
      <SectionTitle
        title={intl.formatMessage({ id: 'aboutMe' })}
        right={(
          <ArrowLink url={`/${intl.locale}/about`} />
        )}
      />
      <AboutText>
        {aboutMe}
      </AboutText>

      <SkillList />
    </Section>
  );
};

export default About;
