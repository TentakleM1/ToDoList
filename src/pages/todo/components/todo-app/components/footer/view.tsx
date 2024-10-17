import React from "react";
import { StyleFooter } from "./style";

export const Footer: React.FC = () => {
  return (
      <StyleFooter>
        <span>1 items left!</span>
        <ul>
          <li>
            <a href="#">All</a>
          </li>
          <li>
            <a href="#">Active</a>
          </li>
          <li>
            <a href="#">Completed</a>
          </li>
        </ul>
        <button>Clear completed</button>
      </StyleFooter>
  );
};
