import * as React from 'react';

import {
  Element, Image, Content, Title, Information, Description, RightSection,
} from './styles';

type Props = {
  image: string,
  title: React.ReactNode,
  information: React.ReactNode,
  description: string,
  right?: React.ReactNode,
};

const ListElement: React.FunctionComponent<Props> = ({
  image, title, information, description, right,
}: Props) => (
  <Element>
    <Image src={image} />
    <Content>
      <div>
        <Title>{title}</Title>
        <Information>{information}</Information>
        <Description>{description}</Description>
      </div>
      <RightSection>
        {right}
      </RightSection>
    </Content>
  </Element>
);


export default ListElement;
