import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Movies from "./components/Movies/movies";
import Directors from "./components/Directors/directors";
import DirectorById from "./components/Directors/DirectorById"
import MovieByRank from "./components/Movies/MovieByRank";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/movie/:id" component={MovieByRank} />


            <Route path="/directors" component={Directors} />
            <Route path="/director/:id" component={DirectorById} />
            
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
