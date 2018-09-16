import React, { Component } from 'react';

class SearchResults extends Component {
    render() { 

        let query = this.props.match.params.query;
        return (
            <p>Search Results Component for <strong>{query}</strong></p>
        );
    }
}
 
export default SearchResults;
