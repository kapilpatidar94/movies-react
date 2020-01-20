import React, { Component } from "react";
import { Switch, Link, Route } from "react-router-dom";

import MoviesItem from "./moviesItem";
import AddMovies from "./addMovies";
class Movies extends Component {
  state = {
    data: [],
    updateId: 0,
    currMovie: []
  };

  componentDidMount() {
    fetch("http://localhost:8080/api/movies")
      .then(result => result.json())
      .then(moviesData => {
        this.setState({
          data: moviesData
        });
      });
  }
  addNewData = async data => {
    await fetch("http://localhost:8080/api/movies", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .catch(err => {
        console.log(err);
      });
    this.componentDidMount();
  };
  deleteMovies = async event => {
    const id = event.target.parentElement.parentElement.getAttribute(
      "position"
    );
    const url = `http://localhost:8080/api/movies/${id}`;
    await fetch(url, {
      method: "DELETE"
    })
      .then(res => res.json())
      .catch(error => {
        console.log(error);
      });
    this.componentDidMount();
  };

  onEdit = async event => {
    const id = event.target.parentElement.parentElement.parentElement.getAttribute(
      "position"
    );
    await this.setState({
      updateId: id
    });
    
    
  };
  onEditItem = async data => {
      const id = Number(this.state.updateId);
    await fetch(`http://localhost:8080/api/movies/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .catch(error => {
        console.log(error);
      });

    this.componentDidMount();
  };

  render() {
    return (
      <div>
        <Link to={"/"}>
          <div class="left">Go Back</div>
        </Link>
        <Link to={"/directors"}><div class="right">Go to Director</div></Link>
        <h1>All Movies</h1>
        <Link to={"/movies/add"}>
          <button className="">Add New Movies</button>
        </Link>
        <Switch>
          <Route
            path="/movies/add"
            component={() => <AddMovies addNewData={this.addNewData} />}
          />
        </Switch>
        <MoviesItem
          movies={this.state.data}
          deleteMovies={this.deleteMovies}
          onEdit={this.onEdit}
          onEditItem={this.onEditItem}
          parentState={this.state}
        />
      </div>
    );
  }
}
export default Movies;
