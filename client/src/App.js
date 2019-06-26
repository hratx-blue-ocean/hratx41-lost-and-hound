import React from "react";
import axios from "axios";
import Splash from "./Components/Splash.jsx";
import SearchForm from "./Components/SearchForm.jsx";
import Footer from "./Components/Footer.jsx";
import Header from "./Components/Header.jsx";
import PostDog from "./Components/PostDog.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      action: "",
      formData: {
        lostDate: "",
        color: "",
        gender: ["male", "female"],
        zipcode: null
      },
      modalView: true,
      modalIndex: -1,
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
    if (temp === "lostDate") {
      value += "T00:00:00.000";
    }
    this.setState((prevState, props) => {
      prevState.formData[temp] = value;
      return { formData: prevState.formData };
    });
  }

  resultExpand(index) {
    this.setState({
      modalView: !this.state.modalView,
      modalIndex: index
    });
  }

  render() {
    return (
      <>
        <Header
          clickHandler={this.splashPageClickHandler}
          homeRedirect={this.homeRedirect}
        />
        {this.state.action === "" ? (
          <Splash clickHandler={this.splashPageClickHandler} />
        ) : this.state.action === "post" ? (
          <PostDog />
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
