import React, { Component } from "react";
import { Switch, Link, Route } from "react-router-dom";
import EditDirector from "./editDirectors";
import DirectorById from "./DirectorById";

class DirectorsItem extends Component {
  render() {
    return (
      <div className="directors-container">
        {this.props.directors.map((element, index) => (
          <div key={index} className="lists" position={element.id}>
            <div>
              <Link to={`/director/${element.id}`}>
                {" "}
                <div>
                  <b>Id</b>: {element.id}
                </div>
              </Link>
              <div>
                <b>Name</b>: {element.director_name}
              </div>
            </div>
            <div className="buttons">
              <Link to={`/directors/${element.id}/edit`}>
                <button className="edit" onClick={this.props.onEdit}>
                  Edit
                </button>
              </Link>
              <Switch>
                <Route
                  path="/directors/:id/edit"
                  component={() => (
                    <EditDirector
                      record={this.props.records}
                      onEditItem={this.props.onEditItem}
                      DirId={element.id}
                    />
                  )}
                />
                {/* <Route path="/directors/:id" component={DirectorById} /> */}
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
