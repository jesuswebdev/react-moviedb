import React, { Component } from 'react';

class TvDetails extends Component {
    render() { 
        return (<div>
            TV Details Component. ID: {this.props.match.params.id}
        </div>);
    }
}
 
export default TvDetails;
