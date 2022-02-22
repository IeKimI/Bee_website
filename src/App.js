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
          <Route path="/Bee_website" exact component={Home} />
          <Route path="/Bee_website/#/exhibit" component={Exhibit} />
          <Route path="/Bee_website/#/pictures" component={Pictures} />
          <Route path="/Bee_website/#/bee-tour" component={BeeTour} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
