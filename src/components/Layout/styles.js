import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Open Sans', sans-serif;
  }

  p {
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Raleway', sans-serif;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: rgb(54, 71, 102);
  }

  li {
    list-style: none;
  }
`;

export const PageBody = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
`;

export const Grid = styled.section`
  @media screen and (min-width: 900px) {
    display: grid;
    grid-template-columns: 3fr 7fr;
  }
`;

export const Main = styled.main`
  padding: 2rem;
`;
