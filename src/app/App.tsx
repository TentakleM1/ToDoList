import React from "react";
import { ToDoList } from "pages";
import { GlobalStyle, Wrapper } from "./style";
import { Provider } from "react-redux";
import { store } from "shared";

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Wrapper>
        <ToDoList />
      </Wrapper>
    </Provider>
  );
};
