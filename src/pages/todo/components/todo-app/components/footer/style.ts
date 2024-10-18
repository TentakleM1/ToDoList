import styled from "styled-components";

export const StyleFooter = styled.footer`
  padding: 10px;
  border-top: 1px solid #e6e6e6;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
    0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
    0 17px 2px -6px rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: space-between;

  li {
    display: inline;
  }

  button {
    font-size: 100%;
    cursor: pointer;
    background: none;
    border: none;
  }

  button:hover {
    text-decoration: underline;
  }

  button:active {
    text-decoration: none;
  }
`;

interface IFilterButton {
  active: number
}

export const FilterButton = styled.a<IFilterButton>`
    border: 1px solid;
    border-color: ${({ active }) => active ? '#ce4646' : 'transparent'};
    border-radius: 3px;
    color: inherit;
    margin: 3px;
    padding: 3px 7px;
    text-decoration: none;

  &:hover {
    border-color: #ce4646;
  }

  &:focus {
    border: 1px solid #ce4646;
    box-shadow: 0 0 2px 2px #cf7d7d;
  }



`;
