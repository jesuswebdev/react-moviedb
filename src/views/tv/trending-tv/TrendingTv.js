import React from 'react';
import Aux from '../../../components/Aux';
import TvCardItem from '../tv-card-item/TvCardItem';

const TrendingTv = ({series}) => {

    let trending = <p>Loading trending series...</p>;

    if (series && series.length > 0) {
        trending = series.map(serie => {
            return (
                <div className="column is-10-mobile is-5-tablet is-4-desktop" key={serie.id}>
                    <TvCardItem serie={serie} />
                </div>
            );
        })
    }

    return (
        <Aux>
            <p className="title is-3 has-text-centered">Trending TV series</p>
            <div className="columns is-mobile is-multiline is-centered">
                {trending}
            </div>
        </Aux>
    );
}

export default TrendingTv;
