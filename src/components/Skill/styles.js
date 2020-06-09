import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  position: relative;
  margin: 0 auto;
  svg {
    position: absolute;
  }
`;

export const ProgressCircle = styled.circle`
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
`;

export const Text = styled.span`
  color: rgb(54,71,102);
  text-align: center;
  line-height: 1rem;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
`;
