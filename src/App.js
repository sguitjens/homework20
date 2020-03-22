import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Profile from "./pages/Profile";

// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
