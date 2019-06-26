import React from "react";
import "../Styles/splash.scss";
import { Container, Row } from "react-bootstrap";

const Resources = props => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Resources</h1>
      <p className="lead">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <hr className="my-4" />
      <p>
        It uses utility classNamees for typography and spacing to space content
        out within the larger container.
      </p>
    </div>
  );
};

export default Resources;
