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
      resultsIds: null,
      resultsIdsFix: null,
      results: null,
      search: "",
      onSearch: false,
    };
  }

  searchIds = async () => {
    const resultsIds = await Axios.get(
      `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${this.state.search}`
    ).then((response) => response.data.objectIDs);
    this.setState({ resultsIds, onSearch: true });
  };

  getResults = async () => {
    if (this.state.resultsIds === null) {
      this.setState({ onSearch: false });
    } else {
      const results = await Promise.all(
        this.state.resultsIds
          .slice(0, 10)
          .map((id) =>
            Axios.get(
              `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
            ).then((response) => response.data)
          )
      );
      this.setState({ results });
    }
  };

  handleChange = (event) => {
    const search = event.target.value;
    this.setState({ search, onSearch: false, resultsIds: null, results: null });
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    this.searchIds();
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home
                {...this.state}
                onLoad={this.getResults}
                onClick={this.searchIds}
                handleChange={this.handleChange}
                onSubmit={this.onSubmitForm}
              />
            </Route>
            <Route
              exact
              path="/details/:id"
              render={(routeProps) => <Details {...routeProps} />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
