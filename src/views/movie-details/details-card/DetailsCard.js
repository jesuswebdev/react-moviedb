import React from 'react';

const DetailsCard = ({movie}) => {

    let genres = movie.genres.map(genre => genre.name).join(', ');
    let imdbButton = movie.imdb_id ?
                        <a href={`https://www.imdb.com/title/${movie.imdb_id}`} className="card-footer-item">Visit IMDb</a> :
                        null;
    
    let homepageButton = movie.homepage ? 
                        <a href={movie.homepage} className="card-footer-item">Visit Homepage</a> :
                        null;

    return (
        <div className="card">
            <div className="card-content">
                <div className="title is-3">
                    {movie.title}
                </div>
                <div className="subtitle is-6">{genres}</div>

                <p>{movie.overview}</p>
                <br></br>
                <p>Runtime: {movie.runtime} minutes</p>
                <p>Rating: {movie.vote_average}/10 ({movie.vote_count} votes)</p>
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