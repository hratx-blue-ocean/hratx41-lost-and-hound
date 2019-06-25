import React from "react";
import Result from "./Result.jsx";
import { Container, Row } from "react-bootstrap";

const ResultsList = props => {
  return (
    <div className="mx-auto">
      <Container>
        <Row>
          {props.results.map((result, index) => {
            return <Result result={result} />;
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ResultsList;
