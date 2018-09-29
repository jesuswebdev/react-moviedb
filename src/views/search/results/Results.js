import React, { Component } from 'react';
import ResultsItem from '../results-item/ResultsItem';
import Spinner from '../../../components/Spinner';

class Results extends Component {

    shouldComponentUpdate(nextProps) {
        if (nextProps.option !== this.props.option) {
            return true;
        }
        if (nextProps.finishedSearching !== this.props.finishedSearching) {
            return true;
        }
        if (nextProps.loading !== this.props.loading) {
            return true;
        }
        if (nextProps.nextPage !== this.props.nextPage) {
            return true;
        }
        if (nextProps.totalResults !== this.props.totalResults) {
            return true;
        }
        return false;
    }

    render() {

        let results = null;

        if (this.props.loading) {
            return <Spinner />
        }
    
        if (this.props.results.length > 0) {
            results = this.props.results.map((result) => {
                return <ResultsItem item={result} key={result.id} selectedOption={this.props.option}/>
            })
        }
    
        if (!this.props.finishedSearching && this.props.results.length < 1) {
            return null;
        }
    
        return (
            <div className="columns is-mobile is-centered">
                <div className="column is-10-mobile is-8-tablet is-8-desktop">
                    <p className="has-text-centered">
                        {this.props.totalResults} results
                    </p>
                    {results}
                </div>
            </div>
        )
    }
}

export default Results;
