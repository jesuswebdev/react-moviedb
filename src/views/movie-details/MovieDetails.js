import React, {Component} from 'react';

class MovieDetails extends Component {

    render() { 
        
        let id = this.props.match.params.id;
        return (
            <p>Movie N°{id} details component</p>
        );
    }
}
 
export default MovieDetails;
