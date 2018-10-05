import React from 'react';
import { moneyPipe } from '../../../utils';

const InfoCard = ({movie}) => {

    if (movie.production_companies.length === 0 && movie.budget === 0 && movie.revenue === 0) {
        return null;
    }

    let production_companies = movie.production_companies.map(company => company.name).join(', ');

    let budget = null;

    if (movie.budget > 0 || movie.revenue > 0) {
        budget = <div className="content">
                    {movie.budget > 0 ? <p>Budget: ${moneyPipe(movie.budget)}</p> : null}
                    {movie.revenue > 0 ? <p>Gross: ${moneyPipe(movie.revenue)}</p> : null}
                </div>;
    }

    return (
        <div className="card">
            <div className="card-header">
                <div className="card-header-title">
                    Movie Info
                </div>
            </div>

            <div className="card-content">
                {budget}
                {movie.production_companies.length > 0 ? 
                    <div className="content">
                        <p>Production Compan{movie.production_companies.length > 1 ? 'ies' : 'y'}: {production_companies}</p>
                    </div> : 
                    null}
            </div>
            
        </div>
    );
}

export default InfoCard;
