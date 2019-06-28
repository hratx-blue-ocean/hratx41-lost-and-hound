import React from "react";
import axios from "axios";
import Splash from "./Components/Splash.jsx";
import SearchForm from "./Components/SearchForm.jsx";
import Footer from "./Components/Footer.jsx";
import Header from "./Components/Header.jsx";
import PostDog from "./Components/PostDog.jsx";
import About from "./Components/About.jsx";
import Resources from "./Components/Resources.jsx";
import { Button } from "react-bootstrap";
import "./App.scss";

// const GOOGLE_BUTTON_ID = "google-sign-in-button";
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
    this.setState(
      {
        action: e.target.value
      },
      () => {
        this.fetchHandler();
      }
    );
  }

  homeRedirect() {
    this.setState({
      action: ""
    });
  }

  fetchHandler() {
    this.setState(
      {
        results: []
      },
      () => {
        if (this.state.action === "Found") {
          axios
            .get(
              "http://ec2-3-130-116-160.us-east-2.compute.amazonaws.com/api/found"
            )
            .then(response => {
              console.log(response.data);
              this.setState({
                results: response.data
              });
            });
        } else if (this.state.action === "Lost") {
          axios
            .get(
              "http://ec2-3-130-116-160.us-east-2.compute.amazonaws.com/api/lost"
            )
            .then(response => {
              console.log(response.data);
              this.setState({
                results: response.data
              });
            });
        }
      }
    );
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
    const renderPage = action => {
      switch (action) {
        case "":
          return (
            <>
              <Splash
                clickHandler={this.splashPageClickHandler}
                fetch={this.fetchHandler}
              />
            </>
          );

        case "Lost":
          return (
            <SearchForm
              results={this.state.results}
              text={this.setText}
              fetch={this.fetchHandler}
              action={this.state.action}
            />
          );

        case "Found":
          return (
            <SearchForm
              results={this.state.results}
              text={this.setText}
              fetch={this.fetchHandler}
              action={this.state.action}
            />
          );

        case "resources":
          return <Resources />;

        case "about":
          return <About />;

        case "post":
          return <PostDog />;

        default:
          return (
            <Splash
              clickHandler={this.splashPageClickHandler}
              fetch={this.fetchHandler}
            />
          );
      }
    };

    return (
      <>
        <Header
          clickHandler={this.splashPageClickHandler}
          homeRedirect={this.homeRedirect}
          signOut={this.signOut}
        />
        {renderPage(this.state.action)}
        <Footer />
      </>
    );
  }
}

export default App;
