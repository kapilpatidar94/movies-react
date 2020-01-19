import React, { Component } from "react";
import { Switch, Link, Route } from "react-router-dom";
import EditDirector from "./editDirectors";

class DirectorsItem extends Component {
  state = {
    singleRecord: "",
    id: 0
  };

  render() {
    return (
      <div className="directors-container">
        {this.props.directors.map((element, index) => (
          <div key={index} className="lists" position={element.id}>
            <div>
              <div>
                <b>Id</b>: {element.id}
              </div>
              <div>
                <b>Name</b>: {element.director_name}
              </div>
            </div>
            <div className="buttons">
              <Link to={`/directors/${element.id}/edit`}>
                <button className="edit" onClick={this.props.onUpdate}>
                  Edit
                </button>
              </Link>
              <Switch>
                <Route
                  path="/directors/:id/edit"
                  component={() => (
                    <EditDirector
                      record={this.props.records}
                      onUpdateApi={this.props.onUpdateApi}
                      DirId={element.id}
                    />
                  )}
                />
              </Switch>
              <button className="delete" onClick={this.props.delete}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default DirectorsItem;
