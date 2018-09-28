import React from 'react';

const Seasons = ({seasons}) => {

    const url = 'https://image.tmdb.org/t/p/w92';
    const dummyImg = 'https://placeimg.com/92/133/animals';

    let seasonsArray = seasons.map(season => {
        return (
            <article className="media" key={season.id}>
                <figure className="media-left">
                    <p className="image">
                        <img src={season.poster_path ? url + season.poster_path : dummyImg } alt={season.name} />
                    </p>
                </figure>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{season.name}</strong><br />
                            {season.air_date ? <small>Air date: {season.air_date}</small>: null}
                            <br />
                            <small>Episodes: {season.episode_count}</small>
                            <br /> 
                        </p>
                        <p className="has-text-justified">
                            {season.overview} 
                        </p>
                    </div>
                </div>
            </article>
        );
    });

    return (

        <div className="card">
            <div className="card-header">
                <div className="card-header-title">
                    Seasons
                </div>
            </div>
            <div className="card-content">
                {seasonsArray}
            </div>
        </div>
    );
}

export default Seasons;
