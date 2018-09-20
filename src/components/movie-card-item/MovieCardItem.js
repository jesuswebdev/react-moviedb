import React from 'react';
import { Link } from 'react-router-dom';
import { getMovieGenres } from '../../utils';

const MovieCardItem = ({movie}) => {
    console.log(movie);

    let img = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    let originalTitle = movie.title !== movie.original_title ? ` (${movie.original_title})` : null;
    let detailsLink = `/movies/${movie.id}`;
    let genres = getMovieGenres(movie.genre_ids);

    return (
        <div className="column is-offset-1-mobile is-4-desktop is-5-tablet is-10-mobile">
            <div className="card">
                <div className="card-image">
                    <Link to={detailsLink}>
                        <figure className="image">
                            <img src={img} alt={movie.title} />
                        </figure>
                    </Link>
                </div>
                
                <div className="card-content">
                    <Link to={detailsLink}>
                        <p className="title is-4">{movie.title}{originalTitle}</p>
                    </Link>
                    <p className="subtitle is-6">{genres}</p>
                    <p className="subtitle is-6">Score: {movie.vote_average}/10 ({movie.vote_count} votes)</p>
                    <p>{movie.overview}</p>
                </div>

                <div className="card-footer">
                    <Link to={detailsLink} className="card-footer-item"> Details </Link>
                </div>
            </div>
        </div>
    );
}

export default MovieCardItem;
