import React from "react";
import { StyleToDoApp } from "./style";
import { Footer } from "./components";

export const ToDoApp: React.FC = () => {
  return (
    <StyleToDoApp>
      <header className="create__task">
        <label className="toggle-all"></label>
        <input type="text" />
      </header>
      <main>
        <ul>
          <li>
            <div>
              <input type="checkbox" name="" />
              <label>New to do</label>
            </div>
          </li>
        </ul>
      </main>
      <Footer />
    </StyleToDoApp>
  );
};
