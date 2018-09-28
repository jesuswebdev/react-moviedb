import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as peopleActions from '../../state/people/actions';
import PeopleCard from './people-card/PeopleCard';

class People extends Component {

    componentDidMount() {
        this.props.getPeople();
    }

    render() {

        console.log(this.props.people);

        if (!this.props.people || this.props.people.length < 1) {
            return <p>Loading...</p>
        }

        console.log(this.props.people);

        let people = this.props.people.map(person => {
            return (
                <div className="column is-10-mobile is-5-tablet is-4-desktop" key={person.id}>
                    <PeopleCard people={person}/>
                </div>
            );
        })

        return (
            <div className="container">
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
