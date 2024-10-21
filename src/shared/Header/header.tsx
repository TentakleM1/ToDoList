import React from "react";
import { HeaderWrapper } from "./header.styles";

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <h1 className="title">todos</h1>
    </HeaderWrapper>
  );
};
