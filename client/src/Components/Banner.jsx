import React from "react";
import "../Styles/banner.scss";
import Logo from "./Assets/Logo.jsx";

const Banner = () => (
  <div id="banner">
    <Logo id="logo" />
    <div id="title">
      <h1 id="company-name">lost and hound</h1>
      <h3 id="sub-title">bringing pet families back together</h3>
    </div>
  </div>
);

export default Banner;
