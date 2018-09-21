import React from 'react';

const moneyPipe = (value) => {
    if (value / 1000000 > 0) {
       return Math.floor(value/1000000).toLocaleString('en').concat(' M');
    }

    if (value / 100000 > 0) {
       return Math.floor(value/100000).toLocaleString('en').concat(' K');
    }

    return value.toLocaleString('en');
}

const InfoCard = ({movie}) => {

    let production_companies = movie.production_companies.map(company => company.name).join(', ');

    return (
        <div className="card">
            <div className="card-header">
                <div className="card-header-title">
                    Movie Info
                </div>
            </div>

            <div className="card-content">
                <div className="content">
                    <p>Budget: ${moneyPipe(movie.budget)}</p>
                    <p>Gross: ${moneyPipe(movie.revenue)}</p>
                </div>
                <div className="content">
                    <p>Production Compan{movie.production_companies.length > 1 ? 'ies' : 'y'}: {production_companies}</p>
                </div>
            </div>
            
        </div>
    );
}

export default InfoCard;
