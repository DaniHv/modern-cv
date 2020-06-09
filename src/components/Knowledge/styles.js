import styled from 'styled-components';

export const Container = styled.div`
`;

export const Title = styled.h4`
  color: rgb(54,71,102);
`;

export const Bar = styled.progress`
  width: 100%;
  appearance: none;

  &::-webkit-progress-bar {
    background: rgb(201,206,214);
  }

  &::-webkit-progress-value {
    background: rgb(20,40,75);
  }
`;
