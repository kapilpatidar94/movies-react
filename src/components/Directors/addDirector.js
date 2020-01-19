import React, { Component } from "react";
import { Switch, Link, Route } from "react-router-dom";


class AddDirector extends Component {
    state={
        director_name:''
    }
takeInput = event => {
    this.setState({
        director_name:event.target.value
    })
}

passValue = (event) =>{
    event.preventDefault();
    if(this.state.director_name.length>0)
    this.props.addNewData(this.state);
    this.setState({
        director_name: ''
    });
}

  render() {
    return (
      <div className="popup-add-container">
        <div className="popup">
          <Link to="/directors"><button className='close-button'>X</button></Link>
            <h3>Add New Director</h3>
            <div className="add-form">
            <div>Director Name</div>
            <form onSubmit={this.passValue}>
            <input
              type="text"
              name="name"
              placeholder="Enter Director Name..."
              onChange={this.takeInput}
               required/>
              </form>
          </div>
                <button type="submit"
          onClick={this.passValue}>
            Submit
          </button>

         
          
        </div>
      </div>
    );
  }
}

export default AddDirector;


