import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStar,
  faFire,
  faHome,
  faTv,
  faFilm,
  faUser,
  faSearch,
  faTicketAlt
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faStar,
  faFire,
  faHome,
  faTv,
  faFilm,
  faUser,
  faSearch,
  faTicketAlt
);

ReactDOM.render(<App />, document.getElementById("root"));
