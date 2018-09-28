import React, {Component} from 'react';
import { connect } from 'react-redux';


class Home extends Component {

    componentDidMount() {
    }

    render() {
        return (
            <div className="container" style={{minHeight: '85vh'}}>
                Home component
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Home);
