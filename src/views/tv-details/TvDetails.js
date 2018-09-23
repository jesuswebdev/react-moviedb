import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as tvActions from '../../state/tv/actions';
import { IMG_URL } from '../../config';
import DetailsCard from './details-card/DetailsCard';

class TvDetails extends Component {

    componentDidMount() {
        this.props.fetchTvSerieDetails(this.props.match.params.id);
    }

    render() { 

        if (!this.props.serie) {
            return <div className="container"><p className="has-text-centered">Loading...</p></div>
        }

        return (<div className="container">
            <div className="columns is-mobile is-centered is-multiline">
                <div className="column is-10-mobile is-5-tablet is-5-desktop">
                    <img src={IMG_URL + this.props.serie.poster_path} alt={this.props.serie.name} />
                </div>
                <div className="column is-10-mobile is-5-tablet is-5-desktop">
                    <DetailsCard serie={this.props.serie} />
                </div>
            </div>
            <div className="columns is-mobile is-centered">
                <div className="column is-10">
                    cast
                </div>
            </div>
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        serie: state.tv.serie_details
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTvSerieDetails: (id) => { dispatch(tvActions.fetchTvDetails(id)) }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(TvDetails);
