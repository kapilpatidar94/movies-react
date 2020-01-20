import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DirectorById extends Component {
    
    state = {
        data: {},
        id: 0,
    }

    componentDidMount() {
        fetch(`http://localhost:8080/api/directors/${this.props.match.params.id}`).then(res => res.json()).then(data => {
            this.setState({
                data: data[0],
                id: this.props.match.params.id
            });
            console.log(data);
        }).catch(error => {
            this.setState({
                data: 0,
            })
        })
    }

    render() {
        
        return (
            <div>
                <Link to="/directors"><div class="left">Go Back</div></Link>
                <h1>Director By Id</h1>
                <div class="director-id">
                    <h1>{this.state.data.name}</h1>
                    <p><b>Id</b>: {this.state.id}</p>
                    <p><b>Director Name</b>: {this.state.data.director_name}</p>
                </div>
            </div>
        );
    }
}

export default DirectorById;
