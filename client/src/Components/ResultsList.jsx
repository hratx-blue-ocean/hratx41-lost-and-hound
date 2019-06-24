import React from "react";
import Result from "./Result.jsx";

const ResultsList = props => {
  return (
    <div>
      {props.results.map((result, index) => {
        return <Result result={result} />;
      })}
    </div>
  );
};

export default ResultsList;
