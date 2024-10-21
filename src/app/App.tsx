import React from "react";
import { ToDoList } from "pages";
import { GlobalStyle } from "./style";
import { Provider } from "react-redux";
import { store } from "store";

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ToDoList />
    </Provider>
  );
};
