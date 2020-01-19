import React, { Component } from "react";
import { Switch, Link, Route } from "react-router-dom";
import "../../App.css";
import DirectorsItem from "./directorsItem";
import AddDirector from "./addDirector";
// import DirectorById from "./DirectorById";

class Directors extends Component {
  state = {
    id: 0,
    data: [],
    currDirector: "",
    updateId: 0
  };

  componentDidMount() {
    const url = "http://localhost:8080/api/directors";
    fetch(url)
      .then(result => result.json())
      .then(directorsData => {
        this.setState({
          data: directorsData
        });
      });
  }

  deleteClick = async event => {
    const id = event.target.parentElement.parentElement.getAttribute(
      "position"
    );
    const url = `http://localhost:8080/api/directors/${id}`;
    await fetch(url, {
      method: "DELETE"
    })
      .then(res => res.json())
      .catch(error => {
        console.log(error);
      });
    this.componentDidMount();
  };

  addNewData = async data => {
    await fetch("http://localhost:8080/api/directors", {
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

  onEdit = async event => {
    const id = event.target.parentElement.parentElement.parentElement.getAttribute(
      "position"
    );
    await this.setState({
      updateId: id
    });
    await fetch(`http://localhost:8080/api/directors/${id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          currDirector: data[0]
        });
      });
  };
  onEditItem = async data => {
    const id = this.state.updateId;
    await fetch(`http://localhost:8080/api/directors/${id}`, {
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
        <h1>All Directors</h1>

        <Link to={"/directors/add"}>
          <button className="add-directiors">Add Director</button>
        </Link>
        <Switch>
          <Route
            path="/directors/add"
            component={() => <AddDirector addNewData={this.addNewData} />}
          />
        </Switch>

        <DirectorsItem
          directors={this.state.data}
          delete={this.deleteClick}
          onEditItem={this.onEditItem}
          onEdit={this.onEdit}
          record={this.state.currDirector}
        />
      </div>
    );
  }
}

export default Directors;
