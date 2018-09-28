import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as tvActions from '../../state/tv/actions';
import { IMG_URL } from '../../config';
import DetailsCard from './details-card/DetailsCard';
import Creators from './creators/Creators';
import Cast from './cast/Cast';
import Seasons from './seasons/Seasons';

class TvDetails extends Component {

    componentDidMount() {
        this.props.fetchTvSerieDetails(this.props.match.params.id);
        this.props.fetchTvCast(this.props.match.params.id);
    }

    render() {
        if (!this.props.serie) {
            return <div className="container"><p className="has-text-centered">Loading...</p></div>
        }
        if (parseInt(this.props.match.params.id, 10) !== this.props.serie.id) {
            return <div className="container"><p className="has-text-centered">Loading...</p></div>
        }

        return (<div className="container">
            <div className="columns is-mobile is-centered is-multiline">
                <div className="column is-10-mobile is-5-tablet is-5-desktop">
                    <div className="card">
                        <div className="card-image">
                            <figure className="image">
                                <img src={IMG_URL + this.props.serie.poster_path} alt={this.props.serie.name} />
                            </figure>
                        </div>
                    </div>
                </div>
                <div className="column is-10-mobile is-5-tablet is-5-desktop">
                    <DetailsCard serie={this.props.serie} />
                </div>
            </div>
            <div className="columns is-mobile is-centered">
                <div className="column is-10">
                    {this.props.serie.created_by.length > 0 && <Creators creators={this.props.serie.created_by} />}
                </div>
            </div>
            <div className="columns is-mobile is-centered">
                <div className="column is-10">
                    {this.props.cast &&
                        <Cast 
                            cast={this.props.isFullCast ? this.props.cast : this.props.cast.slice(0,10)}
                            isFullCast={this.props.isFullCast}
                            onClickShowFullCast={this.props.onClickShowFullCast} />}
                </div>
            </div>
            <div className="columns is-mobile is-centered">
                <div className="column is-10">
                    <Seasons seasons={this.props.serie.seasons} />
                </div>
            </div>
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        serie: state.tv.serie_details,
        cast: state.tv.cast,
        isFullCast: state.tv.is_full_cast
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTvSerieDetails: (id) => { dispatch(tvActions.fetchTvDetails(id)) },
        fetchTvCast: (id) => { dispatch(tvActions.fetchTvCast(id)) },
        onClickShowFullCast: () => { dispatch(tvActions.onClickShowFullCast()) }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(TvDetails);