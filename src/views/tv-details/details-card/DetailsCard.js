import React from 'react';

const DetailsCard = ({serie}) => {
    return (<div className="card">
        <div className="card-content">
            <div className="content">
                <p className="title is-3">{serie.name}</p>
            </div>
        </div>
    </div>)
}

export default DetailsCard;
