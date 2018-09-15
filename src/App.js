import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './views/home/Home';
import MovieDetails from './views/movie-details/MovieDetails';
import SearchResults from './views/search-results/SearchResults';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/movie/:id" component={MovieDetails} />
            <Route path="/search?q=:q" component={SearchResults} />
            <Route path="/" exact component={Home} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
