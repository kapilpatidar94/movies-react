import React, { Component } from "react";
import { Switch, Link, Route } from "react-router-dom";

class EditMovies extends Component {
  render() {
    return (
      <div className="popup-edit-container">
        <div className="popup">
          <Link to="/movies">
            <button className="close-button">X</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default EditMovies;
