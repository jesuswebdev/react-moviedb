import React, {Component} from 'react';

class SearchBar extends Component {

    state = {
        term: ''
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
                        <button className="button is-light">
                            Buscar
                        </button>  
                    </div>
                </div>
            </form>
        );
    }
}
 
export default SearchBar;
