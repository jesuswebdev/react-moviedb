import React from 'react';
import {Link} from 'react-router-dom';

const Cast = (props) => {

        let castArray = null;
        const url = 'https://image.tmdb.org/t/p/w45';
        const vAlign = { verticalAlign: 'middle' };
        const dummyImg = 'https://placeimg.com/45/68/animals';
        let cardFooter = null;

        if (props.cast.length > 0) {
            castArray = props.cast.map(castItem => {
                return (
                <tr key={castItem.id}>
                    <td>
                        <img src={castItem.profile_path ? url + castItem.profile_path : dummyImg } alt={castItem.name} />
                    </td>
                    <td style={vAlign}>
                        <Link to={'/people/' + castItem.id}>
                            {castItem.name}
                        </Link>
                    </td>
                    <td style={vAlign}>...</td>
                    <td style={vAlign}>
                        {castItem.character}
                    </td>
                </tr>)
            })
        }

        if (!props.isFullCast) {
            cardFooter = (
                <div className="card-footer">
                    <div className="card-footer-item" onClick={props.onClickShowFullCast}>
                        <button className="button is-white">Show Full Cast</button>
                    </div>
                </div>
            );
        }

        return (
            <div className="card">
                <div className="card-header">
                    <div className="card-header-title">
                        Cast
                    </div>
                </div>
                <div className="card-content">
                    <table className="table is-striped is-fullwidth">
                        <tbody>
                            {castArray}
                        </tbody>
                    </table>
                </div>
                {cardFooter}
            </div>
        );
    
}

export default Cast;
