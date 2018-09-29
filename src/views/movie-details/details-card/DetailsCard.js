import React from 'react';

const DetailsCard = ({movie}) => {

    const genres = movie.genres.map(genre => genre.name).join(', ');
    const imdbButton = movie.imdb_id ?
                        <a href={`https://www.imdb.com/title/${movie.imdb_id}`} className="card-footer-item">Visit IMDb</a> :
                        null;
    
    const homepageButton = movie.homepage ? 
                        <a href={movie.homepage} className="card-footer-item">Visit Homepage</a> :
                        null;
    const releaseDate = new Date(movie.release_date);
    const releaseYear = releaseDate.getFullYear();

    return (
        <div className="card">
            <div className="card-content">
                <div className="title is-3">
                    {movie.title} {movie.release_date ? `(${releaseYear})` : null} 
                </div>
                <div className="subtitle is-6">{genres}</div>

                <p className="has-text-justified">{movie.overview}</p>
                <br></br>
                <p>Runtime: {movie.runtime} minutes</p>
                <p>Rating: {movie.vote_count > 0 ? `${movie.vote_average}/10 (${movie.vote_count} votes)` : 'No votes yet'} </p>
                <p>Release Date: {movie.release_date}</p>
            </div>
            <div className="card-footer">
            {homepageButton}
            {imdbButton}
            </div>
        </div>
    );
};

export default DetailsCard;
