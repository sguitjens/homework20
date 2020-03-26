import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Profile from "./pages/Profile";
 


// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
