import React, { Component } from "react";
import { Switch, Link, Route } from "react-router-dom";

import EditMovies from "./editMovies";

class MoviesItem extends Component {
  state = {};
  render() {
    return (
      <div className="movies-containers">
        {this.props.movies.map((data, index) => (
          <div key={index} className="movies-cards" position={data.rank}>
            <div style={{ textAlign: "center", fontSize: 24 }}>
              <b>{data.title}</b>
            </div>
            <div>
              <b>Description: </b>
              {data.description}
            </div>
            <div>
              <b>Runtime: </b>
              {data.runtime}
            </div>
            <div>
              <b>Genre: </b>
              {data.genre}
            </div>
            <div>
              <b>Rating: </b>
              {data.rating}
            </div>
            <div>
              <b>Metascore: </b>
              {data.metascore}
            </div>
            <div>
              <b>Votes: </b>
              {data.votes}
            </div>
            <div>
              <b>Gross: </b>${data.Gross_Earning_in_Mil} Million
            </div>
            <div>
              <b>Director: </b>
              {data.director}
            </div>
            <div>
              <b>Cast: </b>
              {data.actor}
            </div>
            <div>
              <b>Year: </b>
              {data.year}
            </div>
            <div>
              <Link to={`/movies/${data.rank}/edit`}>
                <button>Edit</button>
              </Link>
              <Switch>
                <Route
                  path="/movies/:id/edit"
                  component={() => (
                    <EditMovies
                      record={this.props.records}
                      onEditItem={this.props.onEditItem}
                    />
                  )}
                />
              </Switch>
              <button onClick={this.props.deleteMovies}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default MoviesItem;
