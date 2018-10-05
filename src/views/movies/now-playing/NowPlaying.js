import React from 'react';
import MovieCardItem from '../movie-card-item/MovieCardItem';

const NowPlaying = ({movies}) => {

    let peliculas = null;

    if (movies.length > 0) {
        peliculas = movies.map((movie) => <MovieCardItem key={movie.id} movie={movie} />);
    }

    return (
        <div className="columns is-mobile is-multiline is-centered">
            {peliculas}
        </div>
    );
}

export default NowPlaying;
