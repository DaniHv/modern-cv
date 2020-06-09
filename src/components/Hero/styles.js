import styled from 'styled-components';
import Img from 'gatsby-image';

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 300px;
  overflow: hidden;
  position: center center;
`;

export const Background = styled(Img)`
  position: absolute !important;
  width: 100%;
  height: 100%;
  z-index: -10;
  filter: grayscale() blur(2px);
  * {
    height: 100%;
  }
`;

export const Container = styled.div`
`;

export const Name = styled.h1`
  color: white;
  font-size: 3.5rem;
  text-transform: uppercase;
  letter-spacing: .66rem;
  text-align: center;
  margin: 1rem;
  span {
    font-weight: 300;
  }
`;

export const Profession = styled.h2`
  color: white;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 1rem;
  letter-spacing: .33rem;
  text-align: center;
`;
