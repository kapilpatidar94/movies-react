import React, { Component } from "react";
import { Switch, Link, Route } from "react-router-dom";

class EditDirector extends Component {
  state = {
    singleRecord: this.props.record,
    inputValue: '',
}

selectChange = () => {
    this.setState({
        inputValue: this.state.singleRecord.director_name,
    })
}

changeInput = (event) => {
    this.setState({
        inputValue: event.target.value,
        singleRecord: { ...this.state.singleRecord, ...{ director_name: event.target.value } }
    })
}

onUpdate = () => {
  console.log(this.state.singleRecord);
    this.props.onUpdateApi(this.state.singleRecord);
}

  render() {
    return (
      <div className="popup-edit-container">
        <div className="popup">
          <Link to="/directors">
            <button className="close-button">X</button>
          </Link>
          <select className="selection" required onChange={this.selectChange}>
            <option value="0" selected disabled>
              select
            </option>
            <option value="name">Name</option>
          </select>
          <input
            type="text"
            className="d-input"
            value={this.state.inputValue}
            placeholder="Enter here..."
            onChange={this.changeInput}
          />
          <Link to="/directors">
            <button
              type="submit"
              className="update d-update"
              onClick={this.onUpdate}
            >
              Done
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default EditDirector;
