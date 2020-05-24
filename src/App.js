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
  ArticlePage,
  Whoops404,
} from "./views/pages";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/:dirName/:fileName" component={ArticlePage} />
        <Route path="/javascript" component={JavascriptPage} />
        <Route path="/php"  component={PHPPage}/>
        <Route path="/python"  component={PythonPage}/>
        <Route path="/math" component={MathPage} />
        <Route path="/project"  component={ProjectPage}/>
        <Route path="/others"  component={OthersPage}/>
        <Route component={Whoops404} />
      </Switch>
    </HashRouter>
  );
}

export default App;
