import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

class SearchBar extends Component {

    state = {
        term: ''
    }

    componentDidMount() {
        console.log(this.props);
    }

    onSubmitSearch(e) {
        e.preventDefault();
        console.log(e);
        console.log(this.state.term);
    }

    onInputChange(value) {
        this.setState({term: value});
    }

    render() {
        return (
            <form onSubmit={(e) => { this.onSubmitSearch(e) }}>
                <div className="field has-addons">
                    <div className="control">
                        <input className="input"
                            type="text"
                            placeholder="Buscar una pelicula"
                            onChange={(e) => { this.onInputChange(e.target.value) }}
                            value={this.state.term}
                            />
                    </div>
                    <div className="control">
                        <button className="button is-info">
                            Buscar
                        </button>  
                    </div>
                </div>
            </form>
        );
    }
}
 
export default withRouter(SearchBar);
