import React from "react";
import { StyleInfo } from "./Info.style";

export const Info: React.FC = () => {
  return (
    <StyleInfo>
      <ul>
        <li>Click button to edit or delete a todo</li>
        <li>Created by Martynenko</li>
        <li>Updated by Martynenko</li>
        <li>Part of TodoMVC</li>
      </ul>
    </StyleInfo>
  );
};
