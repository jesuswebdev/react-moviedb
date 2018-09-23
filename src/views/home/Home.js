import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as movieActions from '../../state/movies/actions';

import TrendingMovies from '../../components/trending-movies/TrendingMovies';
import TopMovies from '../../components/top-movies/TopMovies';

class Home extends Component {

    componentDidMount() {
        this.props.getTrendingMovies();
        this.props.getTopMovies();
    }

    render() {

        let trending = <p className="has-text-centered">Loading...</p>;

        if (this.props.trendingMovies.length > 0) {
            trending =  <TrendingMovies movies={this.props.trendingMovies.slice(0, 6)}/>;
        }
        return (
            <div className="container" style={{minHeight: '85vh'}}>
               {trending}
               <TopMovies movies={this.props.topMovies.slice(0, 6)} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        trendingMovies: state.movies.trending,
        topMovies: state.movies.top
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTrendingMovies: () => { dispatch(movieActions.fetchTrendingMovies()) },
        getTopMovies: () => { dispatch(movieActions.fetchTopMovies()) }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Home);
