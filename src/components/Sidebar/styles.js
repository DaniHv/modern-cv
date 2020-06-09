import styled from 'styled-components';
import Img from 'gatsby-image';

export const Container = styled.aside`
  background-color: rgb(247, 248, 249);
  padding: 2rem;
`;

export const InfoGrid = styled.div`
  @media (min-width: 599px) and (max-width: 899px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5%;
  }
`;

export const Avatar = styled(Img)`
  width: 150px;
  height: 150px;
  border-radius: 100%;
  margin: 0 auto 25px auto;
`;

export const Table = styled.table`
  font-size: 14px;
  border-collapse: collapse;
  width: 100%;

  tbody {
    tr {
      td {
        border-bottom: 1px solid rgb(201, 206, 214);
        padding: 5px 0px;
      }

      td:first-child {
        font-weight: 600;
        border-bottom: 1px solid rgb(201, 206, 214);
        min-width: 55px;
      }
    }
  }
`;

export const LinkImg = styled.div`
  margin: 2.5px auto;
  border-radius: 100%;
  overflow: hidden;
  width: 40px;
  height: 40px;
  padding: 10px;
  background: rgb(20,40,75);
  img {
    width: 20px;
    height: 20px;
  }
`;
