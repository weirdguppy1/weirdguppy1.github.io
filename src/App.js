import React from "react";
import "./styles/styles.css";
import { Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";

import "./styles/App.css";
import Projects from "./routes/Projects";
import Services from "./routes/Services";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/projects">
        <Projects />
      </Route>
      <Route exact path="/services">
        <Services />
      </Route>
    </Switch>
  );
}

export default App;
