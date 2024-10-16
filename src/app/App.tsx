import React from "react";
import { ToDoList } from "pages";
import { GlobalStyle, Wrapper } from "./style";

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <ToDoList />
      </Wrapper>
    </>
  );
};
