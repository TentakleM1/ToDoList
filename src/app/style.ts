import styled, { createGlobalStyle } from 'styled-components';
 
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #f5f5f5;
    font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  h1 {
    margin: 0;
  }

  li {
    list-style: none;
  }
  
`;

export const Wrapper = styled.section`
    width: 550px;
    height: 100%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 65px;

    @media(min-width: 768px) {
    }
`;
