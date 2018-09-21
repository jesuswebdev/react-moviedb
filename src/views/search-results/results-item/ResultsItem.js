import React from 'react';
import { IMG_URL } from '../../../config';
import { Link } from 'react-router-dom';

const ResultsItem = ({item}) => {

    const releaseDate = new Date(item.release_date);
    const releaseYear = releaseDate.getFullYear();
    
    return (
        <div className="media" style={{minHeight: '100px'}}>
            <figure className="media-left">
                <p className="image is-64x64">
                    <img src={IMG_URL + item.poster_path} alt={item.title}/>
                </p>
            </figure>
            <div className="media-content">
                <div className="content">
                    <p>
                        <strong>{item.title} {item.release_date !== '' ? `(${releaseYear})` : null}</strong>
                        <br />
                        {item.overview}
                    </p>
                </div>
                <Link to={`/movies/${item.id}`} className="button is-info">Details</Link>
            </div>
        </div>
    );
}

export default ResultsItem;
