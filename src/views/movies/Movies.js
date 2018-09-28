import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as movieActions from '../../state/movies/actions';
import TrendingMovies from '../../components/trending-movies/TrendingMovies';
import TopMovies from '../../components/top-movies/TopMovies';

class Movies extends Component {

    componentDidMount() {
        this.props.getTopMovies();
        this.props.getTrendingMovies();
    }

    render() { 
        return (
            <div className="container" style={{minHeight: '85vh'}}>
                <div className="tabs is-centered is-boxed">
                    <ul>
                        <li className={this.props.selectedTab === 'trending' ? 'is-active' : null} onClick={() => this.props.selectTab('trending')}>
                        <a>
                            <span className="icon is-small"> <FontAwesomeIcon icon="fire" className="has-text-danger" /> </span>
                            <span>Trending Movies</span>
                        </a>
                        </li>
                        <li className={this.props.selectedTab === 'top' ? 'is-active' : null} onClick={() => this.props.selectTab('top')}>
                        <a>
                            <span className="icon is-small is-warning"> <FontAwesomeIcon icon="star" className="has-text-warning" /> </span>
                            <span>Top Rated Movies</span>
                        </a>
                        </li>
                    </ul>
                </div>

                {this.props.selectedTab === 'trending' && <TrendingMovies movies={this.props.trending}/>}
                {this.props.selectedTab === 'top' && <TopMovies movies={this.props.top} />}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        trending: state.movies.trending,
        top: state.movies.top,
        selectedTab: state.movies.selectedTab
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTrendingMovies: () => { dispatch(movieActions.fetchTrendingMovies()) },
        getTopMovies: () => { dispatch(movieActions.fetchTopMovies()) },
        selectTab: (tab) => { dispatch(movieActions.selectTab(tab)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
