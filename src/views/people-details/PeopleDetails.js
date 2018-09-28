import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as peopleActions from '../../state/people/actions';

class PeopleDetails extends Component {

    componendDidMount() {
        this.props.getDetails(this.props.match.params.id);
    }

    render() { 
        return (
            <div>
                Details
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDetails: (id) => { dispatch(peopleActions.fetchPeopleDetails(id)) }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(PeopleDetails);
