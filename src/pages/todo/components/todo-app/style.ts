import styled from "styled-components";

export const StyleToDoApp = styled.main`
  width: 100%;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);

  .toggle-all::before {
    content: '❯';
    display: inline-block;
    font-size: 22px;
    color: #949494;
    padding: 10px 27px 10px 27px;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
`;
