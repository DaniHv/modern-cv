import styled from 'styled-components';

export const Element = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const Image = styled.img`
  width: 75px;
  height: 75px;
  margin-right: 15px;
  border-radius: 100%;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-weight: normal;
  text-transform: none;
  font-family: 'Open Sans',sans-serif;
  letter-spacing: 0;
`;

export const Title = styled.h3`
  color: rgb(54, 71, 102);

  a {
    color: rgb(54, 71, 102);
  }
`;

export const Information = styled.p`
  display: block;
  font-size: 10px;
  text-transform: capitalize;
`;

export const Description = styled.p`
  margin-top: 5px;
  font-size: 14px;
`;

export const RightSection = styled.div`
  display: block;
  width: 28px;
  height: 28px;
`;
