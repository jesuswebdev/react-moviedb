import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as peopleActions from '../../state/people/actions';
import PeopleCard from './people-card/PeopleCard';
import Spinner from '../../components/Spinner';

class People extends Component {

    componentDidMount() {
        this.props.getPeople();
    }

    styles = {
        minHeight: '85vh',
        marginTop: '10px',
        marginBottom: '30px'
    }

    render() {

        if (!this.props.people || this.props.people.length < 1) {
            return <Spinner />
        }

        let people = this.props.people.map(person => {
            return (
                <div className="column is-10-mobile is-5-tablet is-4-desktop" key={person.id}>
                    <PeopleCard people={person}/>
                </div>
            );
        })

        return (
            <div className="container" style={this.styles}>
                <div className="columns is-mobile is-centered is-multiline">
                    {people}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        people: state.people.people
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPeople: () => { dispatch(peopleActions.fetchPeople()) }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(People);
