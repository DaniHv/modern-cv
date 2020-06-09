import * as React from 'react';

import { Box, ProgressCircle, Text } from './styles';
import useTranslation from '../../hooks/useTranslation';

type Props = {
  name: {
    locale: string,
    text: string,
  }[],
  percent: number,
}

const Skill: React.FunctionComponent<Props> = ({ name, percent }: Props) => {
  const skillName: string = useTranslation(name);

  return (
    <Box>
      <svg
        height="110"
        width="110"
      >
        <circle
          stroke="rgb(201,206,214)"
          strokeWidth="12"
          fill="transparent"
          r="49"
          cx="55"
          cy="55"
        />
        <ProgressCircle
          stroke="rgb(20,40,75)"
          strokeWidth="12"
          strokeDasharray="314"
          strokeDashoffset={308 - (percent / 100) * 308}
          fill="transparent"
          r="49"
          cx="55"
          cy="55"
        />
      </svg>
      <Text>{skillName}</Text>
    </Box>
  );
};

export default Skill;
