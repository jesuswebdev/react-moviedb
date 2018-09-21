import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as searchActions from '../../state/search/actions';
import ResultsItem from './results-item/ResultsItem';

class SearchResults extends Component {

    componentDidMount() {
        if (this.props.match.params.query !== this.props.query) {
            this.props.searchMovie(this.props.match.params.query, this.props.nextPage);
        }
    }

    shouldComponentUpdate(nextProps) {

        if (nextProps.match.params.query !== this.props.match.params.query) {
            return true;
        }

        if (nextProps.nextPage !== this.props.nextPage) {
            return true;
        }

        if (nextProps.results.length !== this.props.results.length) {
            return true;
        }

        return false;
    }

    render() {

        let results = null;
        let searching = <p className="has-text-centered">Searching...</p>;

        if (this.props.results.length > 0) {
            results = this.props.results.map((result) => {
                return <ResultsItem item={result} key={result.id}/>
            })
        }

        if (!this.props.loading) {
            searching = <p className="has-text-centered">
                            {this.props.totalResults} results for <strong>{this.props.query}</strong>
                        </p>;
        }
        
        return (
            <div className="container" style={{minHeight: '85vh'}}>
                {searching}
                {results}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        results: state.search.results,
        totalResults: state.search.total_results,
        query: state.search.query,
        nextPage: state.search.loaded_pages + 1,
        loading: state.search.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchMovie: (query, nextPage) => { dispatch(searchActions.requestSearchMovie(query, nextPage)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
