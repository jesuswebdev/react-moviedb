import { memo } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Tabs = memo(
  ({ items }) => {
    return (
      <div className="tabs is-centered is-boxed">
        <ul>
          {items.map(tab => (
            <li className={tab.active ? "is-active" : ""} key={tab.path}>
              <Link to={tab.path}>
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
  (prev, next) => JSON.stringify(prev.items) === JSON.stringify(next.items)
);

export default Tabs;
