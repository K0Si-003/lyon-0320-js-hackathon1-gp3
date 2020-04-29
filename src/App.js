import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Details from "./pages/Details";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>Museum Search</h1>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:id" component={Details} />
        </Switch>
      </Router>
    );
  }
}

export default App;
