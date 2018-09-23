import React from 'react';
import MovieCardItem from '../../components/movie-card-item/MovieCardItem';
import Aux from '../Aux';

const TrendingMovies = ({movies}) => {

    let peliculas = null;

    if (movies.length > 0) {
        peliculas = movies.map((movie) => <MovieCardItem key={movie.id} movie={movie} />);
    }

    return (
        <Aux>
            <p className="title is-2 has-text-centered">Trending Movies</p>
            <div className="columns is-mobile is-multiline is-centered">
                {peliculas}
            </div>
        </Aux>
    );

}

export default TrendingMovies;
