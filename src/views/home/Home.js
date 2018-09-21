import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as movieActions from '../../state/movies/actions';

import TrendingMovies from './trending-movies/TrendingMovies';

class Home extends Component {

    componentDidMount() {
        this.props.getTrendingMovies();
    }

    render() {

        let trending = <p className="has-text-centered">Loading...</p>;

        if (this.props.trendingMovies.length > 0) {
            trending =  <TrendingMovies movies={this.props.trendingMovies}/>;
        }
        return (
            <div className="container" style={{minHeight: '85vh'}}>
               {trending}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        trendingMovies: state.movies.trending
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTrendingMovies: () => { dispatch(movieActions.fetchTrendingMovies()) }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Home);
