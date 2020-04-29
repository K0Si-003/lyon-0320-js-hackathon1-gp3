import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Search from './components/Search';
import Axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resultsIds: null,
      results :[],
      search: "",
    };
  }

   searchIds = async () => {
    const resultsIds = await Axios.get(
      `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${this.state.search}`
    ).then((response) => response.data.objectIDs);
    this.setState({ resultsIds });
  }; 

  getResults = async () => {
    if(this.state.resultsIds === null) {
        console.log('La nature a horreur du vide !')
    } else {
      const results = await Promise.all(this.state.resultsIds.slice(0, 10).map((id) => Axios.get(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
      ).then((response) => response.data))) 
      console.log(results);
    }
  }

  handleChange = (event) => {
    const search =  event.target.value
    this.setState({ search });
  }


  render() {
    return (
      <Router>
        <div className="App">
          <img src={require('./images/Logo.png')} className="logo" alt="Logo Museum Search" />
          <Search search={this.state.search} handleChange={this.handleChange} onClick={this.searchIds}/>
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