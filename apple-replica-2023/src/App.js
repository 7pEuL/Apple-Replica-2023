import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ManiRouter from "./MainRouter";


function App() {
  return (
    <Router>
      <React.Fragment>
        <Header />
        
        <ManiRouter />

        <Footer />
      </React.Fragment>
    </Router>
  );
}

export default App;
