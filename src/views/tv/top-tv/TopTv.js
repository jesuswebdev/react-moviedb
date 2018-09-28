import React from 'react';
import TvCardItem from '../tv-card-item/TvCardItem';

const TopTv = ({series}) => {

    let top = <p>Loading top series...</p>;

    if (series && series.length > 0) {
        top = series.map(serie => {
            return (
                <div className="column is-10-mobile is-5-tablet is-4-desktop" key={serie.id}>
                    <TvCardItem serie={serie} />
                </div>
            );
        })
    }

    return (
        <div className="columns is-mobile is-multiline is-centered">
            {top}
        </div>
    );
}

export default TopTv;
