import React from "react";
import axios from "axios";
import Splash from "./Components/Splash.jsx";
import SearchForm from "./Components/SearchForm.jsx";
import Footer from "./Components/Footer.jsx";
import Header from "./Components/Header.jsx";
// import { Modal } from "react-bootstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      action: "",
      formData: {
        search: "",
        lostDate: "",
        color: "",
        gender: ["male", "female"],
        zipcode: null,
        modalView: true,
        modalIndex: -1
      },
      results: []
    };
    this.splashPageClickHandler = this.splashPageClickHandler.bind(this);
    this.fetchHandler = this.fetchHandler.bind(this);
    this.setText = this.setText.bind(this);
    this.resultExpand = this.resultExpand.bind(this);
  }

  splashPageClickHandler(e) {
    this.setState({
      action: e.target.value
    });
  }

  fetchHandler() {
    axios.get("/api/found").then(response => {
      this.setState({
        results: response.data
      });
    });
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
        <Header />
        {this.state.action === "" ? (
          <Splash clickHandler={this.splashPageClickHandler} />
        ) : (
          <SearchForm
            results={this.state.results}
            text={this.setText}
            fetch={this.fetchHandler}
            resultExpand={this.resultExpand}
            modalView={this.state.modalView}
            modalIndex={this.state.modalIndex}
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
