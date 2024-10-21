import styled from "styled-components";

export const Lists = styled.li`
  font-weight: 400;
  font-size: 24px;

  .task-container {
    padding: 15px;

    display: flex;
    justify-content: space-between;
    gap: 20px;
  }

  .checkbox {
    width: 20px;
    height: 20px;
  }

  .change-or-delete-task-button {
    background: none;
    border: none;
    cursor: pointer;
  }

  .change-or-delete-task-icon {
    width: 24px;
    height: 24px;
  }
`;
