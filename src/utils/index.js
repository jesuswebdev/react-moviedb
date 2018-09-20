import { genres } from '../config';

export const getMovieGenres = (genresArray) => {
    return genresArray.map(genre_id => genres.find(genresItem => genresItem.id === genre_id).name).join(', ');
}
