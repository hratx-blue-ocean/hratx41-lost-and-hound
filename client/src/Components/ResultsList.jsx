import React from "react";
import Result from "./Result.jsx";
import { Container, Row } from "react-bootstrap";
import "../Styles/resultslist.scss";

const ResultsList = props => {
  let results = props.results;
  if (props.filter.color) {
    results = results.filter(element => {
      if (element.color) {
        return element.color
          .toUpperCase()
          .split("/")
          .includes(props.filter.color.toUpperCase());
      }
    });
  }
  if (props.filter.gender) {
    results = results.filter(element => element.sex === props.filter.gender);
  }
  if (props.filter.lostDate) {
    results = results.filter(
      element => new Date(element.date) >= new Date(props.filter.lostDate)
    );
  }
  if (props.filter.zipcode) {
    results = results.filter(
      element => element.location.zip === props.filter.zipcode
    );
  }
  return (
    <div id="card-container">
      <Container>
        <Row>
          {results.map((result, index) => {
            return <Result key={index} result={result} action={props.action} />;
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ResultsList;
