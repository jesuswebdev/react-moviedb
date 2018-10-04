import React from 'react';
import TvCardItem from '../tv-card-item/TvCardItem';

const TopTv = (props) => {

    if (props.hasError) {
        return <p>There was an error trying to load the top tv series... <strong onClick={props.reloadTop}>Click here to try again.</strong></p>;
    }

    let top = <p>Loading top series...</p>;

    if (props.series && props.series.length > 0) {
        top = props.series.map(serie => {
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
