import React from 'react';
import { NavLink, Link } from 'react-router-dom';

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

    return (
        <nav className="navbar is-dark" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to='/'>
                    MovieFinder
                </Link>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" onClick={onClickBurgerMenu}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                    <NavLink to='/movies' className='navbar-item' activeClassName='is-active' onClick={onCloseBurgerMenu} >Movies</NavLink>
                    <NavLink to='/tv' className='navbar-item' activeClassName='is-active' onClick={onCloseBurgerMenu} >TV Series</NavLink>
                    <NavLink to='/people' className='navbar-item' activeClassName='is-active' onClick={onCloseBurgerMenu} >People</NavLink>
                    <NavLink to='/search' className='navbar-item' activeClassName='is-active' onClick={onCloseBurgerMenu} >Search</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Header;
