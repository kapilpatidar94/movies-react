import React, { Component } from "react";
import { Link } from "react-router-dom";

class MovieByRank extends Component {
  state = {
    data: {}
  };

  componentDidMount() {
    fetch(`http://localhost:8080/api/movies/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          data: data[0]
        });
      })
      .catch(error => {
        this.setState({
          data: 0
        });
      });
  }

  render() {
    return (
      <div>
        <Link to="/movies">
          <div class="left"><b>Go Back</b></div>
        </Link>
        <h1>Movie By Rank</h1>
        <div class="movie-rank">
          <p><b>Rank</b>: {this.state.data.rank}</p>
    <p><b>Title</b>: {this.state.data.title}</p>
    <p><b>Description</b>: {this.state.data.description}</p>
    <p><b>Runtime</b>: {this.state.data.runtime}</p>
    <p><b>Genre</b>: {this.state.data.genre}</p>
    <p><b>Rating</b>: {this.state.data.rating}</p>
    <p><b>Metascore</b>: {this.state.data.metascore}</p>
    <p><b>Votes</b>: {this.state.data.votes}</p>
    <p><b>Gross_Earning_in_Mil</b>: {this.state.data.Gross_Earning_in_Mil}</p>
    <p><b>Director</b>: {this.state.data.director}</p>
    <p><b>Actor</b>: {this.state.data.actor}</p>
    <p><b>Year</b>: {this.state.data.year}</p>

        </div>
      </div>
    );
  }
}

export default MovieByRank;
// rank: 3
// title: "The Dark Knight"
// description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice."
// runtime: 152
// genre: "Action"
// rating: 9
// metascore: 82
// votes: 1905413
// Gross_Earning_in_Mil: 535
// director: "Christopher Nolan"
// actor: "Christian Bale"
// year: 2008