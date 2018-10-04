import React from 'react';
import Aux from './Aux';

const Spinner = () => {
    return (
        <Aux>
            <p className="has-text-centered">
                <img src="/img/loading.gif" alt="loading" />
            </p>
            <p className="has-text-centered">Loading...</p>
        </Aux>
    );
}

export default Spinner;
