import React from 'react';
import { Link } from 'react-router-dom';

const Credits = ({credits}) => {

    const creditsArray = credits.map(credit => {

        if (!credit.character) {
            return null;
        }
        
        let url = `/${credit.media_type}/${credit.id}`;

        return (
            <tr key={'' + credit.media_type + credit.id + credit.character}>
                <td>{credit.character}</td>
                <td><Link to={url}>{credit.title || credit.name}</Link></td>
                <td>{credit.release_date || credit.first_air_date}</td>
            </tr>
        );
    }).filter(credit => credit !== null)

    return (
        <div className="columns is-mobile is-centered">
            <div className="column is-10-mobile is-10-tablet is-10-desktop">
                <div className="card">
                    <div className="card-header">
                        <div className="card-header-title">
                            Credits
                        </div>
                    </div>
                    <div className="card-content">
                        <div className="content">
                            <table className="table is-striped is-fullwidth">
                                <thead>
                                    <tr>
                                        <td>
                                            Character
                                        </td>
                                        <td>Movie</td>
                                        <td>Release Date</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {creditsArray}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Credits;
