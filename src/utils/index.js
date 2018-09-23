import { genres, tvGenres } from '../config';

export const getMovieGenres = (genresArray) => {
    return genresArray.map(genre_id => genres.find(genresItem => genresItem.id === genre_id).name).join(', ');
}

export const getTvGenres = (serieGenres) => {

    return serieGenres.map(genre_id => {
        const genre = tvGenres.find(tvGenre => tvGenre.id === genre_id);
        return genre ? genre.name : null;
    })
    .filter(genre => genre !== null)
    .join(', ');
}
