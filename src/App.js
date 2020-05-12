import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import {
  HomePage,
  JavascriptPage,
  PHPPage,
  PythonPage,
  MathPage,
  ProjectPage,
  OthersPage,
  Whoops404,
} from "./views/pages";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Javascript" component={JavascriptPage} />
        <Route  exact path="/PHP"  component={PHPPage}/>
        <Route  exact path="/Python"  component={PythonPage}/>
        <Route exact path="/Math" component={MathPage} />
        <Route  exact path="/Project"  component={ProjectPage}/>
        <Route  exact path="/Others"  component={OthersPage}/>
        <Route component={Whoops404} />
      </Switch>
    </HashRouter>
  );
}

export default App;
