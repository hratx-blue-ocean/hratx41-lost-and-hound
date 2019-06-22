import React, { useState, useEffect } from "react";
// import axios from "axios";
import Splash from "./Components/Splash.jsx";
import "./App.scss";

const App = () => {
  const [pageType, setPageType] = useState();

  useEffect(() => {
    setPageType(<Splash setPageType={setPageType} />);
  }, []);

  return <>{pageType}</>;
};

export default App;
