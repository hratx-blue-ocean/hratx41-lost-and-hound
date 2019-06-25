import React from "react";
import "../Styles/splash.scss";
import { Container } from "react-bootstrap";
import Pawprint from "../Assets/paw-print-01.svg";
import MenuDropdown from "../Assets/icons9-menu.svg";

const Header = props => {
  return (
    <>
      <Container>
        <div class="header">
          <Pawprint id="header-logo" /> <span id="header-">LOST AND HOUND</span>
          <MenuDropdown class="menu-icon" id="header-menu-icon" />
        </div>
      </Container>
    </>
  );
};

export default Header;
