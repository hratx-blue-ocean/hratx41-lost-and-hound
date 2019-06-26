import React from "react";
import axios from "axios";
import Splash from "./Components/Splash.jsx";
import "./App.scss";
import SearchForm from "./Components/SearchForm.jsx";
import ResultsList from "./Components/ResultsList.jsx";
import Footer from "./Components/Footer.jsx";
// import ResultsList from "./Components/ResultsList.jsx";
import Header from "./Components/Header.jsx";

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
    this.homeRedirect = this.homeRedirect.bind(this);
  }

  splashPageClickHandler(e) {
    this.setState({
      action: e.target.value
    });
  }

  homeRedirect() {
    this.setState({
      action: ""
    });
  }

  fetchHandler() {
    if (this.state.action === "Found") {
      axios.get("/api/found").then(response => {
        console.log(response.data);
        this.setState({
          results: response.data
        });
      });
    } else if (this.state.action === "Lost") {
      axios.get("/api/lost").then(response => {
        console.log(response.data);
        this.setState({
          results: response.data
        });
      });
    }
  }

  setText(e) {
    let temp = e.target.id;
    let value = e.target.value;
    this.setState((prevState, props) => {
      prevState.formData[temp] = value;
      return { formData: prevState.formData };
    });
  }

  render() {
    return (
      <>
        <Header homeRedirect={this.homeRedirect} />
        {this.state.action === "" ? (
          <Splash clickHandler={this.splashPageClickHandler} />
        ) : (
          <SearchForm
            results={this.state.results}
            text={this.setText}
            fetch={this.fetchHandler}
            action={this.state.action}
          />
        )}
        <Footer />
        {/* {this.state.results === [] ? null : (
          <ResultsList results={this.state.results} />
        )}
      </div>
        )} */}
      </>
    );
  }
}

export default App;
