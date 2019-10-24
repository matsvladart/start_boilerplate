import React from "react";
import { Router, Link } from "@reach/router";
import Home from "./component/Home/Home";
import Header from "./component/Header/Header";
import About from "./component/About/About";

export default (
  <React.Fragment>
    <Header />
    <Router>
      <Home path="/" />
      <About path="about" />
    </Router>
  </React.Fragment>
);
