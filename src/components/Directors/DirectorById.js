import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DirectorById extends Component {
    
    state = {
        data: {},
    }

    componentDidMount() {
        // fetch(`http://localhost:8080/api/directors/${this.props.match.params.id}`).then(res => res.json()).then(data => {
        //     this.setState({
        //         data: data[0],
        //     });
        //     console.log(data);
        // }).catch(error => {
        //     this.setState({
        //         data: 0,
        //     })
        // })
    }

    // render() {
    //     // 
    //     // return (
    //     //     <div className="popup-singleDirector-container">
                
    //     //         <div className="popup">
    //     //             <Link to="/directors">
    //     //                 <button className="close">X</button>
    //     //             </Link>
    //     //             <h1>{this.state.data.name}</h1>
    //     //             <p><b>Id</b>: {this.state.data.id}</p>
    //     //             <p><b>Name</b>: {this.state.data.director_name}</p>
    //     //         </div>
    //     //     </div>
    //     // );
    // }
}

export default DirectorById;
