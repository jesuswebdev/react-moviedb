import React from 'react';
import MovieCardItem from '../../../components/movie-card-item/MovieCardItem';

const TrendingMovies = ({movies}) => {

    let peliculas = null;

    if (movies.length > 0) {
        peliculas = movies.map((movie) => <MovieCardItem key={movie.id} movie={movie} />);
    }

    return (
        <div className="container">
            <div className="columns is-mobile is-tablet is-desktop is-multiline">
                {peliculas}
            </div>
        </div>
    );

}

export default TrendingMovies;
