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
      resultsIds: [],
      results :[],
      search: "sunflowers",
    };
  }

   searchIds = async () => {
    const resultsIds = await Axios.get(
      `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${this.state.search}`
    ).then((response) => response.data.objectIDs);
    this.setState({ resultsIds });
    console.log(resultsIds)
  }; 

  getResults = async () => {
    const results = await Promise.all(this.state.resultsIds.map((id) => Axios.get(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
    ).then((response) => response.data))) 
    console.log(results);
    
  }

  componentDidMount() {
    this.searchIds()
    }


  render() {
    return (
      <Router>
        <div className="App">
          <h1>Museum Search</h1>
          <button onClick={this.getResults}>Get Results</button>
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