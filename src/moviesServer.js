const {
    getAllMovies,
  
  } = require("./components/databaseCon");
  
  //  Get all Movies
  const allMovies = (req, res) => {
    getAllMovies()
      .then(results => {
        if (Object.values(results).length !== 0) {
          res.send(results);
        } else {
          res.sendStatus(204);
        }
      })
     
  };

  module.exports ={
      allMovies
  }