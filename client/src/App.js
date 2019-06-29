import React from "react";
import axios from "axios";
import Splash from "./Components/Splash.jsx";
import SearchForm from "./Components/SearchForm.jsx";
import Footer from "./Components/Footer.jsx";
import Header from "./Components/Header.jsx";
import PostDog from "./Components/PostDog.jsx";
import About from "./Components/About.jsx";
import Resources from "./Components/Resources.jsx";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      action: "",
      formData: {
        lostDate: null,
        color: null,
        gender: null,
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

  fetchHandler(obj) {
    this.setState(
      {
        results: [],
        formData: obj || {
          color: null,
          lostDate: null,
          zipcode: null,
          gender: null
        }
      },
      () => {
        if (this.state.action === "Found") {
          axios.get("https://lost-and-hound.com/api/found").then(response => {
            console.log(response.data);
            this.setState({
              results: response.data
            });
          });
        } else if (this.state.action === "Lost") {
          axios.get("https://lost-and-hound.com/api/lost").then(response => {
            console.log(response.data);
            console.log(this.state);
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
              filter={this.state.formData}
            />
          );

        case "Found":
          return (
            <SearchForm
              results={this.state.results}
              text={this.setText}
              fetch={this.fetchHandler}
              action={this.state.action}
              filter={this.state.formData}
            />
          );
        //
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
