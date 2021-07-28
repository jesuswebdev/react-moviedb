import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./views/home/Home";
import MovieDetails from "./views/movie-details/MovieDetails";
import Search from "./views/search/Search";
import Movies from "./views/movies/Movies";
import Tv from "./views/tv/Tv";
import People from "./views/people/People";
import TvDetails from "./views/tv-details/TvDetails";
import PeopleDetails from "./views/people-details/PeopleDetails";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        {/* <Route path="/movies/:type" component={MovieDetails} /> */}
        <Route path="/movies/:type" exact component={Movies} />
        {/* <Route path="/tv/:id" component={TvDetails} />
        <Route path="/tv" exact component={Tv} />
        <Route path="/people/:id" component={PeopleDetails} />
        <Route path="/people" exact component={People} />
        <Route path="/search" component={Search} /> */}
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    </Layout>
  </BrowserRouter>
);
export default App;
