import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as tvActions from '../../state/tv/actions';
import TrendingTv from './trending-tv/TrendingTv';
import TopTv from './top-tv/TopTv';

class Tv extends Component {

    componentDidMount() {
        this.props.getTrendingTv();
        this.props.getTopTv();
    }


    render() { 
        return (
            <div className="container">
                <div className="tabs is-centered is-boxed">
                    <ul>
                        <li className={this.props.selectedTab === 'trending' ? 'is-active' : null} onClick={() => this.props.selectTab('trending')}>
                        <a>
                            <span className="icon is-small"> <FontAwesomeIcon icon="fire" className="has-text-danger" /> </span>
                            <span>Trending TV Series</span>
                        </a>
                        </li>
                        <li className={this.props.selectedTab === 'top' ? 'is-active' : null} onClick={() => this.props.selectTab('top')}>
                        <a>
                            <span className="icon is-small is-warning"> <FontAwesomeIcon icon="star" className="has-text-warning" /> </span>
                            <span>Top Rated TV Series</span>
                        </a>
                        </li>
                    </ul>
                </div>

                {this.props.selectedTab === 'trending' && <TrendingTv series={this.props.trending} />}
                {this.props.selectedTab === 'top' && <TopTv series={this.props.top} />}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        trending: state.tv.trending,
        top: state.tv.top,
        selectedTab: state.tv.selected_tab
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTrendingTv: () => { dispatch(tvActions.fetchTrendingTv()) },
        getTopTv: () => { dispatch(tvActions.fetchTopTv()) },
        selectTab: (tab) => { dispatch(tvActions.selectTab(tab)) }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Tv);
