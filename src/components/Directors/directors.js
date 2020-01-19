import React, { Component } from "react";
import { Switch, Link, Route } from "react-router-dom";
import "../../App.css";
import DirectorsItem from "./directorsItem";
import AddDirector from "./addDirector";

class Directors extends Component {
  state = {
    id:0,
    data: [],
    singleRecord: '',
    dialogInputValue: "",
    newRecord: "",
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
  onUpdate = async event => {

    const id = event.target.parentElement.parentElement.parentElement.getAttribute(
      "position"
    );
    await this.setState({
      updateId:id,
    });
    console.log(this.state.updateId)
    await fetch(`http://localhost:8080/api/directors/${id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          singleRecord: data[0]
        });
      });
     
  };
  onUpdateApi = async data => {
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
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
    this.setState({
      dialogInputValue: ""
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

        <DirectorsItem directors={this.state.data} delete={this.deleteClick}
        onUpdateApi ={this.onUpdateApi}
        onUpdate = {this.onUpdate}
        record={this.state.singleRecord}/>
        

        
      </div>
    );
  }
}

export default Directors;
