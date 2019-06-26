import React from "react";
import "../Styles/loadingStyles.scss";

const LoadingPage = props => {
  return (
    <>
      <div id="loading-opacity-layer" />
      <div id="loading-div" class="mx-auto my-auto">
        <div class="lds-spinner">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
        <br />
        <span id="doggo-text">Organizing puppies ...</span>
      </div>
    </>
  );
};

export default LoadingPage;
