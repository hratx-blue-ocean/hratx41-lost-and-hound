import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from "./App.js";
import Flyer from "./Components/Flyer.jsx";

function AppRouter() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/flyer">Flyer</Link>
            </li>
          </ul>
        </nav> */}

        <Route exact path="/" component={App} />
        <Route path="/flyer" component={Flyer} />
      </div>
    </Router>
  );
}

export default AppRouter;
