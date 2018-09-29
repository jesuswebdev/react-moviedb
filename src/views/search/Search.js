import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as searchActions from '../../state/search/actions';
import SearchBar from '../../components/SearchBar';
import Results from './results/Results';
import Breadcrumbs from '../../components/Breadcrumbs';

class Search extends Component {

    styles = {
        minHeight: '85vh',
        marginBottom: '30px'
    }

    render() {

        const breadcrumbLinks = [
            {to: '/search', name: 'search'}
        ];

        return (
            <div className="container" style={this.styles}>
                <Breadcrumbs links={breadcrumbLinks} />
                <div className="columns is-mobile is-centered">
                    <div className="column is-10-mobile is-8-tablet is-6-desktop">
                        <SearchBar
                        query={this.props.query}
                        onSubmitSearch={this.props.onSearch}
                        onInputChange={this.props.onInputChange}
                        onSelectOption={this.props.onSelectOption}
                        selectedOption={this.props.selectedOption}
                        isLoading={this.props.loading}
                        nextPage={this.props.nextPage} />
                    </div>
                </div>
                <Results 
                    results={this.props.results}
                    loading={this.props.loading}
                    query={this.props.query}
                    totalResults={this.props.totalResults}
                    finishedSearching={this.props.finishedSearching}
                    option={this.props.selectedOption}
                    nextPage={this.props.nextPage} />
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
        loading: state.search.loading,
        selectedOption: state.search.selected_option,
        finishedSearching: state.search.finished_searching
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearch: (event, query, option, page) => { event.preventDefault(); dispatch(searchActions.requestSearch(query, option, page)) },
        onInputChange: (input) => { dispatch(searchActions.searchQueryInput(input)) },
        onSelectOption: (option) => { dispatch(searchActions.selectOption(option)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
