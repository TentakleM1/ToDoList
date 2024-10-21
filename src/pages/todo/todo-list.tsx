import React from "react";
import { Info, ToDoApp } from "./components";
import { Header } from "shared";

export const ToDoList: React.FC = () => {
  return (
    <>
      <Header />
      <ToDoApp />
      <Info />
    </>
  );
};
