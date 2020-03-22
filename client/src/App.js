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
          <Route>
            <Contact />
          </Route>
          <Route>
            <Portfolio />
          </Route>
          <Route>
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
