import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';
import Blog from "./blog/Blog";

import { HashRouter, Route, Switch } from "react-router-dom";

import { Home,  About, Knowledge, Work, Whoops404 } from "./views/viewsIndex";

window.React = React

ReactDOM.render(
  // <HashRouter>
  //   <Switch>
  //     <Route  exact path="/"  component={Home}/>
  //     <Route  exact path="/about"  component={About}/>
  //     <Route  exact path="/knowledge"  component={Knowledge}/>
  //     <Route  exact path="/work"  component={Work}/>
  //     <Route component={Whoops404} />
  //   </Switch>
  // </HashRouter> ,
  <Blog />,
  // <App />,
  document.getElementById('root')
);
