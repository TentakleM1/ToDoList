import styled from "styled-components";

export const StyleInputContainer = styled.header`
  &:focus-within {
    box-shadow: 0 0 2px 2px #cf7d7d;
  }

  input {
    width: 80%;
    height: 100%;
    padding: 16px 0;
    font-size: 24px;
    background: none;
    border: none;
  }

  input:focus {
    outline: none;
  }

  .toggle-all::before {
    content: "❯";
    display: inline-block;
    font-size: 22px;
    color: #949494;
    padding: 10px 27px 10px 27px;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
`;
