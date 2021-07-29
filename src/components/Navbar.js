import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const [burgerMenuIsActive, setBurgerMenuIsActive] = useState(false);

  const toggleBurgerMenu = () => {
    setBurgerMenuIsActive(value => !value);
  };

  const closeBurgerMenu = () => {
    setBurgerMenuIsActive(false);
  };

  return (
    <nav className="navbar is-fixed-top is-dark" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          MovieFinder
        </Link>

        <a
          role="button"
          className={`navbar-burger ${burgerMenuIsActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          onClick={toggleBurgerMenu}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className={`navbar-menu ${burgerMenuIsActive ? "is-active" : ""}`}>
        <div className="navbar-start">
          <NavLink
            to="/movies/trending"
            className="navbar-item"
            activeClassName="is-active"
            onClick={closeBurgerMenu}>
            Movies
          </NavLink>
          <NavLink
            to="/shows/trending"
            className="navbar-item"
            activeClassName="is-active"
            onClick={closeBurgerMenu}>
            TV Shows
          </NavLink>
          <NavLink
            to="/people"
            className="navbar-item"
            activeClassName="is-active"
            onClick={closeBurgerMenu}>
            People
          </NavLink>
          <NavLink
            to="/search"
            className="navbar-item"
            activeClassName="is-active"
            onClick={closeBurgerMenu}>
            Search
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
