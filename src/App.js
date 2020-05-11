import React from 'react';
// import { HashRouter, Route, Switch } from "react-router-dom";
import Blog from "./blog/Blog";

// import { Home,  About, Knowledge, Work, Whoops404 } from "./views/viewsIndex";

function App() {
  return (
    <Blog></Blog>
    // <HashRouter>
    //   <Switch>
    //     <Route  exact path="/"  component={Home}/>
    //     <Route  exact path="/about"  component={About}/>
    //     <Route  exact path="/knowledge"  component={Knowledge}/>
    //     <Route  exact path="/work"  component={Work}/>
    //     <Route component={Whoops404} />
    //   </Switch>
    // </HashRouter>
  )
}

export default App;
