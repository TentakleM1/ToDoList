import styled from "styled-components";

export const StyleInputContainer = styled.header`
  position: relative;
  &:focus-within {
    box-shadow: 0 0 2px 2px #cf7d7d;
  }

  input {
    width: 70%;
    height: 100%;
    margin-left: 15%;
    padding: 16px 0;
    font-size: 24px;
    background: none;
    border: none;
  }

  input:focus {
    outline: none;
  }

  .toggle-all {
    position: absolute;
  }

  .toggle-all::before {
    content: "❯";
    display: inline-block;
    font-size: 22px;
    color: #949494;
    padding: 20px 20px 10px 27px;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
`;
