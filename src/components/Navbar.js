import React from 'react';
import SearchBar from './SearchBar';
import { NavLink } from 'react-router-dom';

const Header = () => {

    const styles = {
        marginBottom: '30px'
    };

    const verticalAlignStyle = {
        display: 'flex',
        marginBottom: 'auto',
        marginTop: 'auto'
    }

    return (
        <nav className="navbar is-dark" aria-label="main navigation" style={styles}>
            <div className="navbar-brand">
                <h4 style={verticalAlignStyle}>
                    MovieFinder
                </h4>
            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                    <NavLink to='/' className='navbar-item'>Home</NavLink>
                </div>
                <div className="navbar-end" style={verticalAlignStyle}>
                    <SearchBar />
                </div>
            </div>
        </nav>
    );
}

export default Header;
