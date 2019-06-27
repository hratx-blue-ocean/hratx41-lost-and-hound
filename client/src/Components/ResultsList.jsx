import React from "react";
import Result from "./Result.jsx";
import { Container, Row } from "react-bootstrap";
import "../Styles/resultslist.scss";

const ResultsList = props => {
  return (
    <div id="card-container" className="mx-auto">
      <Container>
        <Row>
          {props.results.map((result, index) => {
            return <Result result={result} action={props.action} />;
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ResultsList;
