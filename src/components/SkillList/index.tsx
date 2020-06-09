import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { SkillsContainer } from './styles';
import Skill from '../Skill';

const query = graphql`
  {
    allSkillsJson {
      edges {
        node {
          id
          name {
            locale
            text
          }
          percent
        }
      }
    }
  }
`;

const SkillList: React.FunctionComponent = () => {
  const { allSkillsJson: { edges: skills } } = useStaticQuery(query);

  return (
    <SkillsContainer>
      {skills.map(({ node: skill }) => (
        <Skill
          key={skill.id}
          name={skill.name}
          percent={skill.percent}
        />
      ))}
    </SkillsContainer>
  );
};

export default SkillList;
