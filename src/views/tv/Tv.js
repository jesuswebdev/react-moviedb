import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as tvActions from '../../state/tv/actions';
import TrendingTv from './trending-tv/TrendingTv';

class Tv extends Component {

    componentDidMount() {
        this.props.getTrendingTv();
        //get trending tv series
        //get top tv series
    }


    render() { 
        return (<div className="container">
            <TrendingTv series={this.props.trendingTvSeries} />
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        trendingTvSeries: state.tv.trending
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTrendingTv: () => { dispatch(tvActions.fetchTrendingTv()) }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Tv);
