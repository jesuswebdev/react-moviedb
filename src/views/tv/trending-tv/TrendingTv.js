import React from 'react';
import TvCardItem from '../tv-card-item/TvCardItem';

const TrendingTv = (props) => {

    if (props.hasError) {
        return <p>There was an error trying to load the trending tv series... <strong onClick={props.reloadTrending}>Click here to try again.</strong></p>;
    }

    let trending = <p>Loading trending series...</p>;

    if (props.series && props.series.length > 0) {
        trending = props.series.map(serie => {
            return (
                <div className="column is-10-mobile is-5-tablet is-4-desktop" key={serie.id}>
                    <TvCardItem serie={serie} />
                </div>
            );
        })
    }

    return (
        <div className="columns is-mobile is-multiline is-centered">
            {trending}
        </div>
    );
}

export default TrendingTv;
