import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as movieActions from '../../state/movies/actions';

class Home extends Component {

    componentDidMount() {
        this.props.getTrendingMovies();
    }


    render() {
        return (
            <p>Home Component {this.props.trendingMovies.length}</p>
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
