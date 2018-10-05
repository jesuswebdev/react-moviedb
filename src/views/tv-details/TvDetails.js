import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as tvActions from '../../state/tv/actions';
import { IMG_URL } from '../../config';
import DetailsCard from './details-card/DetailsCard';
import Creators from './creators/Creators';
import Cast from './cast/Cast';
import Seasons from './seasons/Seasons';
import Spinner from '../../components/Spinner';
import Breadcrumbs from '../../components/Breadcrumbs';

class TvDetails extends Component {

    componentDidMount() {
        this.props.clearCast();
        this.props.fetchTvSerieDetails(this.props.match.params.id);
        this.props.fetchTvCast(this.props.match.params.id);
    }

    styles = {
        minHeight: '85vh',
        marginBottom: '30px'
    }

    render() {
        if (!this.props.serie) {
            return <Spinner />;
        }
        if (parseInt(this.props.match.params.id, 10) !== this.props.serie.id) {
            return <Spinner />;
        }

        const dummyImg = 'https://placeimg.com/500/750/animals';

        const img = this.props.serie.poster_path ? IMG_URL + this.props.serie.poster_path : dummyImg;

        const breadcrumbLinks = [
            {to: '/tv', name: 'tv'},
            {to: '/tv/' + this.props.serie.id, name: this.props.serie.name}
        ];

        return (<div className="container" style={this.styles}>
            <Breadcrumbs links={breadcrumbLinks} />
            <div className="columns is-mobile is-centered is-multiline">
                <div className="column is-10-mobile is-5-tablet is-5-desktop">
                    <div className="card">
                        <div className="card-image">
                            <figure className="image">
                                <img src={img} alt={this.props.serie.name} />
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
        onClickShowFullCast: () => { dispatch(tvActions.onClickShowFullCast()) },
        clearCast: () => { dispatch(tvActions.clearTvCast()) }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(TvDetails);
