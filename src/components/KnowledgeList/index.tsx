import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';

import { List, Knowledge as KnowledgeType } from '../../common/types';
import Section from '../UI/Section';
import SectionTitle from '../UI/SectionTitle';
import ToggleButton from '../UI/ToggleButton';
import { KnowledgesContainer } from './styles';
import Knowledge from '../Knowledge';

const query = graphql`
  {
    allKnowledgesJson(
      sort: {
        fields: [priority]
        order: [ASC]
      }
    ) {
      edges {
        node {
          id
          name
          percent
        }
      }
    }
  }
`;

const KnowledgeList: React.FunctionComponent<List> = ({ max, toggable }: List) => {
  const { allKnowledgesJson: { edges: knowledgeList } } = useStaticQuery(query);
  const [showAll, setShowAll] = React.useState<boolean>(false);
  const [knowledges, setKnowledges] = React.useState<[Array<{}>, any]>(
    max ? knowledgeList.slice(0, max) : knowledgeList,
  );
  const intl = useIntl();

  const handleToggle = () => {
    if (showAll) {
      setShowAll(false);
      setKnowledges(max ? knowledgeList.slice(0, max) : knowledgeList);
    } else {
      setShowAll(true);
      setKnowledges(knowledgeList);
    }
  };

  const toggleButton = toggable && knowledgeList.length > max ? (
    <ToggleButton toggled={showAll} handleToggle={handleToggle} />
  ) : null;

  return (
    <Section>
      <SectionTitle title={intl.formatMessage({ id: 'knowledges' })} right={toggleButton} />

      <KnowledgesContainer>
        {knowledges.map(({ node: knowledge }: { node: KnowledgeType }) => (
          <Knowledge
            key={knowledge.id}
            name={knowledge.name}
            percent={knowledge.percent}
          />
        ))}
      </KnowledgesContainer>
    </Section>
  );
};

export default KnowledgeList;
