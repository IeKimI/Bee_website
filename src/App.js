import "./App.css";
import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Exhibit from "./components/pages/Exhibit";
import Pictures from "./components/pages/Pictures";
import Pollination from "./components/pages/Pollination";
import Lifecycle from "./components/pages/Lifecycle";
import Decline from "./components/pages/Decline";
import Action from "./components/pages/Action";

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
          <Route exact path="/pictures" component={Pictures} />
          <Route path="/bee-tour" component={BeeTour} />
          <Route
            exact
            path="/pictures/pollination"
            exact
            component={Pollination}
          />
          <Route exact path="/pictures/lifecycle" exact component={Lifecycle} />
          <Route exact path="/pictures/decline" exact component={Decline} />
          <Route exact path="/pictures/action" exact component={Action} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
