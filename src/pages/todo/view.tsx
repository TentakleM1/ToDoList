import React from "react";
import { AppHead } from "features";
import { Info, ToDoApp } from "./components";

export const ToDoList: React.FC = () => {
  return (
    <>
      <AppHead />
      <ToDoApp />
      <Info />
    </>
  );
};
