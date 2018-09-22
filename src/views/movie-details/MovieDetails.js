import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as moviesActions from '../../state/movies/actions';
import { IMG_URL } from '../../config';
import InfoCard from './info-card/InfoCard';
import DetailsCard from './details-card/DetailsCard';

class MovieDetails extends Component {

    componentDidMount() {
        this.props.getMovieDetails(this.props.match.params.id);
    }

    render() { 
        
        if (this.props.details === null) {
            return <div className="container"><p className="has-text-centered">Loading...</p></div>;
        }
        
        if (this.props.movieId !== parseInt(this.props.match.params.id, 10)) {
            return <div className="container"><p className="has-text-centered">Loading...</p></div>;
        }
        
        let movie = this.props.details;
        let img = `${IMG_URL}${movie.poster_path}`;

        return (
            <div className="container" style={{minHeight: '85vh'}}>
                <div className="columns is-mobile is-tablet is-desktop is-multiline">
                    <div className="column is-offset-1-mobile is-10-mobile is-half-tablet is-half-desktop">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image">
                                    <img src={img} alt={movie.title} />
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="column is-offset-1-mobile is-10-mobile is-half-tablet is-half-desktop">
                        <DetailsCard movie={movie} />
                    </div>
                </div>

                <div className="columns is-mobile is-tablet is-desktop">
                    <div className="column is-offset-1-mobile is-10-mobile">
                        <InfoCard movie={movie} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        details: state.movies.movie_details,
        movieId: state.movies.current_movie_details_id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMovieDetails: (movie_id) => { dispatch(moviesActions.fetchMovieDetails(movie_id)) }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
