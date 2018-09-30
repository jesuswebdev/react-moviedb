import React from 'react';
import { getFullDate } from '../../../utils';

const DetailsCard = ({details}) => {

    const knownAs = details.also_known_as.map(name => name).join(', ');

    const homepageButton = details.homepage ? 
        <a className="card-footer-item" href={details.homepage}>Visit Homepage</a> :
        null;
    
    const imdbUrl = 'https://www.imdb.com/name/';

    return (
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <p className="title is-3">{details.name}</p>
                    {knownAs ? <p className="subtitle is-6">Also known as: {knownAs}</p>: null}
                    
                </div>
                <div className="content">
                    {details.birthday ? <p>Birthday: {getFullDate(details.birthday)}</p> : null}
                    {details.place_of_birth ? <p>Place of birth: {details.place_of_birth} </p> : null }
                </div>
            </div>
            <div className="card-footer">
                {homepageButton}
                <a className="card-footer-item" href={imdbUrl + details.imdb_id}>
                    Visit on IMDb
                </a>
            </div>
        </div>
    );
}

export default DetailsCard;
