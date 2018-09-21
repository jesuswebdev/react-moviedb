import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as searchActions from '../state/search/actions';

class SearchBar extends Component {

    onSubmitSearch(e) {
        e.preventDefault();
        this.props.searchMovie(this.props.query, this.props.nextPage);
        this.props.history.push(`/search/${this.props.query}`);
    }

    onInputChange(value) {
        this.props.queryInput(value);
    }

    render() {

        const buttonClasses = this.props.isLoading ? 'button is-loading' : 'button';

        return (
            <form onSubmit={(e) => { this.onSubmitSearch(e) }}>
                <div className="field has-addons">
                    <div className="control">
                        <input className="input"
                            type="text"
                            placeholder="Search movie..."
                            onChange={(e) => { this.onInputChange(e.target.value) }}
                            value={this.props.query}
                            />
                    </div>
                    <div className="control">
                        <button className={buttonClasses}>
                            Search
                        </button>  
                    </div>
                </div>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        nextPage: state.search.loaded_pages + 1,
        isLoading: state.search.loading,
        query: state.search.query
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        queryInput: (input) => { dispatch(searchActions.searchQueryInput(input)); },
        searchMovie: (query, nextPage) => { dispatch(searchActions.requestSearchMovie(query, nextPage)) }
    }
}
 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));
