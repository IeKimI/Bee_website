import "./App.css";
import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Exhibit from "./components/pages/Exhibit";
import Pictures from "./components/pages/Pictures";
import BeeTour from "./components/pages/BeeTour";
import { HashRouter } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/exhibit" component={Exhibit} />
          <Route path="/pictures" component={Pictures} />
          <Route path="/bee-tour" component={BeeTour} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
