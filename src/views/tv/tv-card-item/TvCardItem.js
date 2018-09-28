import React from 'react';
import { Link } from 'react-router-dom';
import { IMG_URL } from '../../../config';
import { getTvGenres } from '../../../utils';

const TvCardItem = ({serie}) => {
    const genres = getTvGenres(serie.genre_ids);
    const detailsLink = `/tv/${serie.id}`;

    let overview = <p className="has-text-justified">
                        {serie.overview}
                    </p>;

    if (serie.overview.length > 160) {
        overview = <p className="has-text-justified">
                        {serie.overview.slice(0,150)}... 
                        <Link to={detailsLink}>More</Link>
                    </p>
    }

    return (
        <div className="card">
            <div className="card-image">
                <Link to={detailsLink}>
                    <figure className="image">
                        <img src={IMG_URL+serie.poster_path} alt={serie.name}/>
                    </figure>
                </Link>
            </div>
            <div className="card-content">
                <Link to={detailsLink}>
                    <p className="title is-4">{serie.name}</p>
                </Link>
                <p className="subtitle is-6">{genres}</p>
                <p className="subtitle is-6">Score: {serie.vote_count > 0 ? `${serie.vote_average}/10 (${serie.vote_count} votes)`: 'No votes yet'}</p>
                {overview}
            </div>
            <div className="content">

            </div>
        </div>
    )
}

export default TvCardItem;
