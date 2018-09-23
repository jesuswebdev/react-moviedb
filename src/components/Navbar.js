import React from 'react';
import SearchBar from './SearchBar';
import { NavLink } from 'react-router-dom';

const onClickBurgerMenu = () => {
    let menu = document.querySelector('.navbar-menu');
    let burger = document.querySelector('.navbar-burger');

    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
}

const onCloseBurgerMenu = () => {
    let menu = document.querySelector('.navbar-menu');
    let burger = document.querySelector('.navbar-burger');

    if (menu.classList.contains('is-active')) {
        menu.classList.remove('is-active');
    }

    if (burger.classList.contains('is-active')) {
        burger.classList.remove('is-active');
    }
}

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

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" onClick={onClickBurgerMenu}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                    <NavLink to='/' exact className='navbar-item' activeClassName='is-active' onClick={onCloseBurgerMenu} >Home</NavLink>
                    <NavLink to='/movies' className='navbar-item' activeClassName='is-active' onClick={onCloseBurgerMenu} >Movies</NavLink>
                    <NavLink to='/tv' className='navbar-item' activeClassName='is-active' onClick={onCloseBurgerMenu} >TV Series</NavLink>
                    <NavLink to='/people' className='navbar-item' activeClassName='is-active' onClick={onCloseBurgerMenu} >People</NavLink>
                    <NavLink to='/search' className='navbar-item' activeClassName='is-active' onClick={onCloseBurgerMenu} >Search</NavLink>
                </div>
                <div className="navbar-end is-hidden-touch" style={verticalAlignStyle}>
                    <SearchBar />
                </div>
            </div>
        </nav>
    );
}

export default Header;
