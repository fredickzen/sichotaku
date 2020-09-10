import React from "react";
import { Container } from "reactstrap";
import NavMenu from "./partial/NavMenu.jsx";

export const Layout = ({ children }) => {
  return (
    <div>
      <NavMenu/>
      <Container>{children}</Container>
    </div>
  );
};
