import styled, { createGlobalStyle } from 'styled-components';
 
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #f5f5f5;
    font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  h1,ul {
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
  }

  a {
    color: inherit;
    outline-color: none;
    text-decoration: none;
  }
  
`;

export const Wrapper = styled.section`
    max-width: 550px;
    min-width: 310px;
    height: 100%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

`;
