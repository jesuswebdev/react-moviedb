import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as moviesActions from '../../state/movies/actions';
import { IMG_URL } from '../../config';
import InfoCard from './info-card/InfoCard';
import DetailsCard from './details-card/DetailsCard';
import CastCard from './cast-card/CastCard';
import Spinner from '../../components/Spinner';
import Breadcrumbs from '../../components/Breadcrumbs';

class MovieDetails extends Component {

    componentDidMount() {
        this.props.getMovieDetails(this.props.match.params.id);
        this.props.getMovieCast(this.props.match.params.id);
    }

    styles = {
        minHeight: '85vh',
        marginBottom: '30px'
    }

    render() { 
        
        if (this.props.details === null) {
            return <Spinner />;
        }
        
        if (this.props.movieId !== parseInt(this.props.match.params.id, 10)) {
            return <Spinner />;
        }
        
        let movie = this.props.details;
        const dummyImg = 'https://placeimg.com/500/750/animals';
        let img = movie.poster_path ? `${IMG_URL}${movie.poster_path}` : dummyImg;

        let cast;

        if (this.props.cast.length > 10 && !this.props.showFullCast) {
            cast = <CastCard cast={this.props.cast.slice(0,10)} onClickShowFullCast={this.props.onClickShowFullCast} />
        }
        else {
            cast = <CastCard cast={this.props.cast} showFullCast />;
        }

        const breadcrumbLinks = [
            {to: '/movies', name: 'movie'},
            {to: '/movie/' + movie.id, name: movie.title}
        ];

        return (
            <div className="container" style={this.styles}>
                <Breadcrumbs links={breadcrumbLinks} />
                <div className="columns is-mobile is-centered is-multiline">
                    <div className="column is-10-mobile is-5-tablet is-5-desktop">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image">
                                    <img src={img} alt={movie.title} />
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="column is-10-mobile is-5-tablet is-5-desktop">
                        <DetailsCard movie={movie} />
                    </div>
                </div>

                <div className="columns is-mobile is-centered">
                    <div className="column is-10-mobile is-10-tablet is-10-desktop">
                        { this.props.cast.length > 0 && cast } 
                    </div>
                </div>
                <div className="columns is-mobile is-centered">
                    <div className="column is-10-mobile is-10-tablet is-10-desktop">
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
        movieId: state.movies.current_movie_details_id,
        cast: state.movies.movie_cast,
        showFullCast: state.movies.show_full_cast
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMovieDetails: (movie_id) => { dispatch(moviesActions.fetchMovieDetails(movie_id)) },
        getMovieCast: (movie_id) => { dispatch(moviesActions.fetchMovieCast(movie_id)) },
        onClickShowFullCast: () => { dispatch(moviesActions.showFullCast()) }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
