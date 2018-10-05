import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as peopleActions from '../../state/people/actions';
import DetailsCard from './details-card/DetailsCard';
import Spinner from '../../components/Spinner';
import Biography from './biography/Biography';
import Credits from './credits/Credits';
import Breadcrumbs from '../../components/Breadcrumbs';

class PeopleDetails extends Component {

    componentDidMount() {
        this.props.clearCredits();
        this.props.getDetails(this.props.match.params.id);
        this.props.getCredits(this.props.match.params.id);
    }

    styles = {
        minHeight: '85vh',
        marginBottom: '30px'
    };

    render() { 
        if (!this.props.details) {
            return <Spinner />;
        }

        if (this.props.details.id !== parseInt(this.props.match.params.id, 10)) {
            return <Spinner />;
        }

        const url = "https://image.tmdb.org/t/p/h632";
        const dummyImg = 'https://placeimg.com/500/750/animals';
        const img = this.props.details.profile_path ? url + this.props.details.profile_path : dummyImg;
        const breadcrumbLinks = [
            {to: '/people', name: 'people'},
            {to: '/people/' + this.props.details.id, name: this.props.details.name}
        ];

        return (
            <div className="container" style={this.styles}>
                <Breadcrumbs links={breadcrumbLinks} />
                <div className="columns is-mobile is-centered is-multiline">
                    <div className="column is-10-mobile is-5-tablet is-5-desktop">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image">
                                    <img src={img} alt={this.props.details.name} />
                                </figure>
                            </div>
                        </div>
                    </div>

                    <div className="column is-10-mobile is-5-tablet is-5-desktop">
                        <DetailsCard details={this.props.details} />
                    </div>
                </div>

                <Biography bio={this.props.details.biography} />
                <Credits credits={this.props.credits} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        details: state.people.people_details,
        credits: state.people.credits
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDetails: (id) => { dispatch(peopleActions.fetchPeopleDetails(id)) },
        getCredits: (id) => { dispatch(peopleActions.fetchPeopleCredits(id)) },
        clearCredits: () => { dispatch(peopleActions.clearPeopleCredits()) }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(PeopleDetails);
