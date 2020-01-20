import React, { Component } from "react";
import {  Link } from "react-router-dom";

class AddMovie extends Component {
  state = {};
  SubmitDetails = e => {
    e.preventDefault();

    const name = e.target[0].value;
    const des = e.target[1].value;
    const runtime = e.target[2].value;
    const genre = e.target[3].value;
    const rating = e.target[4].value;
    const metascore = e.target[5].value;
    const votes = e.target[6].value;
    const gross = e.target[7].value;
    const director = e.target[8].value;
    const actor = e.target[9].value;
    const year = e.target[10].value;

    const inputData = {
      title: name,
      description: des,
      runtime: runtime,
      genre: genre,
      rating: rating,
      metascore: metascore,
      votes: votes,
      Gross_Earning_in_Mil: gross,
      director: director,
      actor: actor,
      year: year
    };

    this.props.addNewData(inputData);
  };

  render() {
    return (
      <div className="popup-add-container">
        <div className="popup">
          <Link to="/movies">
            <button className="close-button">X</button>
          </Link>
          <h3>Add New Movie</h3>
          <div className="add-form">
           
            <form className="edit-form-container" onSubmit={this.SubmitDetails}>
              <div style={{ padding: "0.5%" }}>
                <label>Title: </label>
                <input
                  id="input-name"
                  type="text"
                  placeholder="Movie Name"
                  required
                />
              </div>
              <div style={{ padding: "0.5%" }}>
                <label>Description: </label>
                <input
                  style={{ width: "200px", height: "20px" }}
                  id="input-des"
                  type="text"
                  placeholder="Movie Description"
                  required
                />
              </div>
              <div className="edit-form-items">
                <div>
                  <label>Runtime: </label>
                  <input
                    id="input-runtime"
                    type="number"
                    placeholder="Minutes"
                    required
                  />
                </div>
                <div>
                  <label>Genre: </label>
              <input
                  id="input-genre"
                  type="text"
                  placeholder="Type Genre"
                  required
                />
                </div>
              </div>
              <div className="edit-form-items">
                <div>
                  <label>Rating: </label>
                  <input
                    id="input-rating"
                    type="number"
                    placeholder="rate"
                    required
                  />
                </div>
                <div>
                  <label>Metascore: </label>
                  <input
                    id="input-metascore"
                    type="number"
                    placeholder="write here"
                    required
                  />
                </div>
              </div>
              <div className="edit-form-items">
                <div>
                  <label>Votes: </label>
                  <input
                    id="input-votes"
                    type="number"
                    placeholder="Total Votes"
                    required
                  />
                </div>
                <div>
                  <label>Gross Earning: </label>
                  <input
                    id="input-gross"
                    type="number"
                    step="0.01"
                    placeholder="Million $"
                  />
                </div>
              </div>
              <div className="edit-form-items">
                <div>
                  <label>Director: </label>
                  <input
                    id="input-director"
                    type="text"
                    placeholder="Director Name"
                    required
                  />
                </div>
                <div>
                  <label>Cast: </label>
                  <input
                    id="input-cast"
                    type="text"
                    placeholder="Actor/Actress"
                    required
                  />
                </div>
                <div>
                  <label>Year: </label>
                  <input
                    id="input-year"
                    type="number"
                    placeholder="YYYY"
                    required
                  />
                </div>
              </div>
              <button className="submit-btn" type="submit" value="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddMovie;
