import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Movies from "./components/Movies/movies";
import Directors from "./components/Directors/directors";

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/directors" component={Directors} />
          </Switch>
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;