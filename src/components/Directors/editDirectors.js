import React, { Component } from "react";
import { Link } from "react-router-dom";

class EditDirector extends Component {
  state = {
    inputValue: "",
    directorData: this.props.record
  };

  selectChange = () => {
    this.setState({
      inputValue: this.state.directorData.director_name
    });
  };

  changeInput = event => {
    this.setState({
      inputValue: event.target.value,
      directorData: {
        ...this.state.directorData,
        ...{ director_name: event.target.value }
      }
    });
  };

  onUpdate = () => {
    this.props.onEditItem(this.state.directorData);
  };

  render() {
    return (
      <div className="popup-edit-container">
        <div className="popup">
          <Link to="/directors">
            <button className="close-button">X</button>
          </Link>

          <label>Name</label>
          <input
            type="text"
            value={this.state.inputValue}
            placeholder="Enter here..."
            onChange={this.changeInput}
          />
          <Link to="/directors">
            <button type="submit" onClick={this.onUpdate}>
              Change
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default EditDirector;
