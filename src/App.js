import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Results: [],
      search: "sunflowers",
    };
  }

  searchIds = async () => {
    const Results = await Axios.get(
      `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${this.state.search}`
    ).then((response) => response.data.objectIDs);
    this.setState({ Results });
  };

  componentDidMount() {
    this.searchIds();
  }

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
