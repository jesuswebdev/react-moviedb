import React from 'react';

const Biography = ({bio}) => {

    if (!bio) {
        return null;
    }

    return (
        <div className="columns is-mobile is-centered">
            <div className="column is-10-mobile is-10-tablet is-10-desktop">
                <div className="card">
                    <div className="card-header">
                        <div className="card-header-title">
                            Biography
                        </div>
                    </div>
                    <div className="card-content">
                        <div className="content">
                            <p className="has-text-justified">
                                {bio}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Biography;
