import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as movieActions from '../../state/movies/actions';
import TrendingMovies from './trending-movies/TrendingMovies';
import TopMovies from './top-movies/TopMovies';
import Spinner from '../../components/Spinner';
import Breadcrumbs from '../../components/Breadcrumbs';
import NowPlaying from './now-playing/NowPlaying';

class Movies extends Component {

    componentDidMount() {
        this.props.getTopMovies();
        this.props.getTrendingMovies();
        this.props.getPlayingMovies();
    }

    styles = {
        minHeight: '85vh',
        marginBottom: '30px'
    }

    render() {

        if (this.props.selectedTab === 'trending' && this.props.trending.length < 1) {
            return <Spinner />;
        }

        if (this.props.selectedTab === 'top' && this.props.top.length < 1) {
            return <Spinner />
        }

        const breadcrumbLinks = [
            {to: '/movies', name: 'movie'}
        ];

        return (
            <div className="container" style={this.styles}>
                <Breadcrumbs links={breadcrumbLinks} />
                <div className="tabs is-centered is-boxed">
                    <ul>
                        <li className={this.props.selectedTab === 'trending' ? 'is-active' : null} onClick={() => this.props.selectTab('trending')}>
                        <a>
                            <span className="icon is-small"> <FontAwesomeIcon icon="fire" className="has-text-danger" /> </span>
                            <span>Trending Movies</span>
                        </a>
                        </li>
                        <li className={this.props.selectedTab === 'playing' ? 'is-active' : null} onClick={() => this.props.selectTab('playing')}>
                        <a>
                            <span className="icon is-small"> <FontAwesomeIcon icon="ticket-alt" className="has-text-black" /> </span>
                            <span>In Theatres</span>
                        </a>
                        </li>
                        <li className={this.props.selectedTab === 'top' ? 'is-active' : null} onClick={() => this.props.selectTab('top')}>
                        <a>
                            <span className="icon is-small"> <FontAwesomeIcon icon="star" className="has-text-warning" /> </span>
                            <span>Top Rated Movies</span>
                        </a>
                        </li>
                    </ul>
                </div>

                {this.props.selectedTab === 'trending' && <TrendingMovies movies={this.props.trending}/>}
                {this.props.selectedTab === 'playing' && <NowPlaying movies={this.props.nowPlaying} />}
                {this.props.selectedTab === 'top' && <TopMovies movies={this.props.top} />}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        trending: state.movies.trending,
        top: state.movies.top,
        nowPlaying: state.movies.playing,
        selectedTab: state.movies.selectedTab
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTrendingMovies: () => { dispatch(movieActions.fetchTrendingMovies()) },
        getTopMovies: () => { dispatch(movieActions.fetchTopMovies()) },
        getPlayingMovies: () => { dispatch(movieActions.fetchPlayingMovies()) },
        selectTab: (tab) => { dispatch(movieActions.selectTab(tab)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
