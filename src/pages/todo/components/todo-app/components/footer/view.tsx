import React from "react";
import { StyleFooter } from "./style";

export const Footer: React.FC = () => {
  return (
      <StyleFooter>
        <span>1 items left</span>
        <ul>
          <li>
            <button>All</button>
          </li>
          <li>
            <button>Active</button>
          </li>
          <li>
            <button>Completed</button>
          </li>
        </ul>
        <button>Clear completed</button>
      </StyleFooter>
  );
};
