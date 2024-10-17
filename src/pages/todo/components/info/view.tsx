import React from "react";
import { StyleInfo } from "./style";

export const Info: React.FC = () => {
  return (
    <StyleInfo>
      <ul>
        <li>Double-click to edit a todo</li>
        <li>Updated by the TodoMVC Team</li>
        <li>Part of TodoMVC</li>
      </ul>
    </StyleInfo>
  );
};
