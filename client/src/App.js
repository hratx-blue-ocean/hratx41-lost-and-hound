import React from "react";
// import axios from "axios";
import Splash from "./Components/Splash.jsx";
//import "./App.scss";
import SearchForm from "./Components/SearchForm.jsx";
import ResultsList from "./Components/ResultsList.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      action: "",
      formData: {
        search: "",
        date: "",
        color: "",
        size: ["small", "medium", "large"],
        gender: ["male", "female"],
        zipcode: null
      },
      results: []
    };
    this.splashPageClickHandler = this.splashPageClickHandler.bind(this);
    this.fetchHandler = this.fetchHandler.bind(this);
    this.setText = this.setText.bind(this);
  }
  //
  splashPageClickHandler(e) {
    this.setState({
      action: e.target.value
    });
  }

  fetchHandler() {
    this.setState({
      results: [1, 2, 3]
    });
  }

  setText(e) {
    let temp = e.target.id;
    let value = e.target.value;
    this.setState(
      (prevState, props) => {
        prevState.formData[temp] = value;
        return { formData: prevState.formData };
      },
      () => {
        console.log(this.state);
      }
    );
  }

  render() {
    return (
      <div>
        {this.state.action === "" ? (
          <Splash clickHandler={this.splashPageClickHandler} />
        ) : (
          <SearchForm text={this.setText} fetch={this.fetchHandler} />
        )}
        {this.state.results === [] ? null : (
          <ResultsList results={this.state.results} />
        )}
      </div>
    );
  }
}

export default App;
