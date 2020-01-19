import React, { Component } from "react";
import MoviesItem from './moviesItem';
// const mysql = require("mysql");
class Movies extends Component{

state = {
  movies: []
};


componentDidMount() {
  this.getAllMovies()
}

getAllMovies=()=>{
  const url="http://localhost:8080/api/movies"
  return fetch(url,{
    method:'GET'
  })
  .then(response => response.json())
  .then(data => {
    data.map(item => {
      this.setState({ movies: [...this.state.movies, item] });
      return item;
    });
  });
}

render(){
     return (
    <div>
      <h1>All Movies</h1>
      {/* <Addmoviesbutton addMovies={this.addMovies}/> */}
      <MoviesItem movies={this.state.movies}/>
    </div>
  );
}
}
export default  Movies;
