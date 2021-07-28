import { memo } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Tabs = memo(
  ({ active }) => {
    const tabs = [
      {
        text: "Trending Movies",
        path: "/trending",
        icon: "fire",
        iconColor: "danger",
        active: active === "trending"
      },
      {
        text: "In Theatres",
        path: "/in-theatres",
        icon: "ticket-alt",
        iconColor: "black",
        active: active === "in-theatres"
      },
      {
        text: "Top Rated Movies",
        path: "/top-rated",
        icon: "star",
        iconColor: "warning",
        active: active === "top-rated"
      }
    ];
    return (
      <div className="tabs is-centered is-boxed">
        <ul>
          {tabs.map(tab => (
            <li className={tab.active ? "is-active" : ""} key={tab.path}>
              <Link to={`/movies${tab.path}`}>
                <span className="icon is-small">
                  <FontAwesomeIcon
                    icon={tab.icon}
                    className={`has-text-${tab.iconColor}`}
                  />
                </span>
                <span>{tab.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  },
  (prev, next) => prev.active === next.active
);

export default Tabs;
