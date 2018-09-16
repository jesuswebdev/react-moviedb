import React from 'react';
import SearchBar from './SearchBar';

const Header = () => {
    return (
        <nav className="navbar is-dark" aria-label="main navigation">
            <div className="navbar-brand">
                <h4>PeliculasDB</h4>
            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item">
                        Peliculas
                    </a>
                    <a className="navbar-item">
                        Series
                    </a>
                </div>
                <div className="navbar-end">
                    <SearchBar />
                </div>
            </div>
        </nav>
    );
}

export default Header;
