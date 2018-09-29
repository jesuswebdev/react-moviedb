import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Breadcrumbs = ({links}) => {

    const crumbs = links.map((link, index) => {

        let crumbLink = null;
        let isActive = index + 1 === links.length ? 'is-active' : null;

        if (link.name === 'movie' || link.name === 'tv' || link.name === 'people' || link.name === 'search') {
            if (link.name === 'movie') {
                crumbLink = <Link to={link.to}>
                    <span className="icon is-small">
                        <FontAwesomeIcon icon="film" />
                    </span>
                    <span>Movies</span>
                </Link>
            }
            if (link.name === 'people') {
                crumbLink = <Link to={link.to}>
                    <span className="icon is-small">
                        <FontAwesomeIcon icon="user" />
                    </span>
                    <span>People</span>
                </Link>
            }
            if (link.name === 'tv') {
                crumbLink = <Link to={link.to}>
                    <span className="icon is-small">
                        <FontAwesomeIcon icon="tv" />
                    </span>
                    <span>TV Series</span>
                </Link>
            }
            if (link.name === 'search') {
                crumbLink = <Link to={link.to}>
                    <span className="icon is-small">
                        <FontAwesomeIcon icon="search" />
                    </span>
                    <span>Search</span>
                </Link>
            }

        }
        else {
            crumbLink = <Link to={link.to}>
                <span>{link.name}</span>
            </Link>
        }

        return (
            <li className={isActive} key={index}>
                {crumbLink}
            </li>
        )
    })

    return (
        <nav className="breadcrumb is-centered" aria-label="breadcrumbs" style={{marginTop: '10px'}}>
            <ul>
                <li>
                    <Link to='/'>
                        <span className="icon is-small">
                            <FontAwesomeIcon icon="home" />
                        </span>
                        <span>Home</span>
                    </Link>
                </li>
                {crumbs}
            </ul>
        </nav>
    );
}

export default Breadcrumbs;
