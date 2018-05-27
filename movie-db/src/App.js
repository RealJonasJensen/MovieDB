import React, { Component } from 'react';
import './App.css';

import { Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";

import Movies from "./containers/Movies/Movies";
import Movie from "./containers/Movie/Movie";

class App extends Component {
  render() {
    return (
      <Layout >
        <Switch>
          <Route path="/movie/:id" exact component={Movie} />
          <Route path="/" exact component={Movies} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
