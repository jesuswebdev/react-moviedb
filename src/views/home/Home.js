import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as movieActions from '../../state/movies/actions';

import TrendingMovies from './trending-movies/TrendingMovies';

class Home extends Component {

    componentDidMount() {
        this.props.getTrendingMovies();
    }

    render() {
        return (
            <div>
                <TrendingMovies movies={this.props.trendingMovies}/>
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
