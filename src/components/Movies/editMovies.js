import React, { Component } from "react";
import {Link } from "react-router-dom";

class EditMovies extends Component {
  state = {
    movie: []
    
  };

   async componentDidMount(){
      const id= this.props.parentState.updateId;
      for(let i in this.props.parentState.data)
      {
          let obj = this.props.parentState.data[i];
          if(Number(id) === obj.rank)
          {
             await this.setState({
             movie:obj
              });
            }
        }
        
  }

  submitEditForm = e => {
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

    const editedData = {
        title: name,
        description: des,
        runtime: Number(runtime),
        genre: genre,
        rating: Number(rating),
        metascore: Number(metascore),
        votes: Number(votes),
        Gross_Earning_in_Mil: Number(gross),
        director: director,
        actor: actor,
        year: Number(year)
    }
    this.props.onEditItem(editedData)
  };

  render() {
    const {
        rank,
        title,
        description,
        runtime,
        genre,
        rating,
        metascore,
        votes,
        Gross_Earning_in_Mil,
        director,
        actor,
        year
      } = this.state.movie;
    return (
      <div className="popup-movie-edit-container">
        <div className="popup">
          <Link to="/movies">
            <button className="close-button">X</button>
          </Link>
          <h2>Edit Movie Details</h2>
          <form className="edit-form-container" onSubmit={this.submitEditForm}>
            <div style={{ padding: "0.5%" }}>
    
              <label>Name: </label>
              <input
                id="input-name"
                type="text"
                defaultValue={title}
                placeholder="Movie name"
                required
              />
            </div>
            <div style={{ padding: "0.5%" }}>
              <label>Description: </label>
              <input
                style={{ width: "400px", height: "20px" }}
                id="input-des"
                type="text"
                defaultValue={description}
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
                  defaultValue={runtime}
                  placeholder="Minutes"
                  required
                />
              </div>
              
              <div>
                <label>Genre: </label>
                <input
                  id="input-genre"
                  type="text"
                  defaultValue={genre}
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
                  defaultValue={rating}
                  placeholder="Out of 10"
                  required
                />
              </div>
              <div>
                <label>Metascore: </label>
                <input
                  id="input-metascore"
                  type="number"
                  defaultValue={metascore}
                  placeholder="Out of 100"
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
                  defaultValue={votes}
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
                  defaultValue={Gross_Earning_in_Mil}
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
                  defaultValue={director}
                  placeholder="Director Name"
                  required
                />
              </div>
              <div>
                <label>Cast: </label>
                <input
                  id="input-cast"
                  type="text"
                  defaultValue={actor}
                  placeholder="Actor/Actress"
                  required
                />
              </div>
              <div>
                <label>Year: </label>
                <input
                  id="input-year"
                  type="number"
                  defaultValue={year}
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
    );
  }
}

export default EditMovies;
