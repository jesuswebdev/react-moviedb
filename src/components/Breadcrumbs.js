import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const linkProps = {
  movie: { text: "Movies", icon: "film" },
  tv: { text: "TV Shows", icon: "tv" },
  people: { text: "People", icon: "user" },
  search: { text: "Search", icon: "search" }
};

const getCrumbLink = link => {
  return (
    <Link to={link.to}>
      <span className="icon is-small">
        <FontAwesomeIcon icon={linkProps[link.name].icon} />
      </span>
      <span>{linkProps[link.name].text}</span>
    </Link>
  );
};

const Breadcrumbs = ({ links }) => {
  const crumbs = links.map((link, index) => {
    let crumbLink = null;
    let isActive = index + 1 === links.length ? "is-active" : null;

    if (["movie", "tv", "people", "search"].includes(link.name)) {
      crumbLink = getCrumbLink(link);
    } else {
      crumbLink = (
        <Link to={link.to}>
          <span>{link.name}</span>
        </Link>
      );
    }

    return (
      <li className={isActive} key={`crumblink-${index}`}>
        {crumbLink}
      </li>
    );
  });

  return (
    <nav
      className="breadcrumb is-centered"
      aria-label="breadcrumbs"
      style={{ marginTop: "75px" }}>
      <ul>
        <li>
          <Link to="/">
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
};

export default Breadcrumbs;
