import React, { Component } from "react";
import { Switch, Link, Route } from "react-router-dom";
import EditDirector from "./editDirectors";

class DirectorsItem extends Component {
  render() {
    return (
      <div className="directors-container">
        {this.props.directors.map((data, index) => (
          <div key={index} className="lists" position={data.id}>
            <div>
              <Link to={`/director/${data.id}`}>
              
                <div>
                  <b>Id</b>: {data.id}
                </div>
              </Link>
              <div>
                <b>Director Name</b>: {data.director_name}
              </div>
            </div>
            <div className="buttons">
              <Link to={`/directors/${data.id}/edit`}>
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
                      DirId={data.id}
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
