 render() {
        return (
            <div className='container'>
                <Link to="/directors/add">
                    <button className='add' >Add Director</button>
                </Link>
                {this.state.data.map((element, index) => <div className="lists" position={element.id} key={index}>
                    <div>
                        <Link to={`/directors/${element.id}`}>
                            <h1 className="single-record" >{element.name}</h1>
                        </Link>
                        <p><b>Id</b>: {element.id}</p>
                        <p><b>Name</b>: {element.name}</p>
                    </div>
                    <div className="buttons">
                        <Link to={`/directors/${element.id}/update`}>
                            <button className="update" onClick={this.onUpdate}>Update</button>
                        </Link>
                        <Link to={`/directors/${element.id}/delete`}>
                            <button className="update delete" onClick={this.deleteReq}>Delete</button>
                        </Link>
                    </div>
                </div>
                )}
                <Switch>
                    <Route path="/directors/add" component={() => <AddDirector addNewRecord={this.addNewRecord} />} />
                    <Route path="/directors/:id/update" component={() => <UpdateDirector record={this.state.singleRecord} onUpdateApi={this.onUpdateApi} />} />
                    <Route path="/directors/:id/delete" component={() => <DeleteDirector deleteApiReq={this.deleteApiReq} />} />
                    <Route path="/directors/:id" component={SingleDirector}/>
                </Switch>
            </div>
        )
    }
}

export default DirectorsHomeconst mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '77777',
  database: 'movies_react',
});

connection.connect();
// let arrayData = [];
const getAllMovies = () => {
  return new Promise ((resolve, reject) => {
    connection.query('select * from movies_info', (error, results) => {
      if (error) {
        return reject(error);
      }
      console.log(results);
      return resolve(results);
    });
  });
};
module.exports={ getAllMovies };