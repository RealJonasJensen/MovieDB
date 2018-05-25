import React, { Component } from 'react';
import './App.css';

import Layout from "./hoc/Layout/Layout";

import Movies from "./containers/Movies/Movies";

class App extends Component {
  render() {
    return (
      <Layout >
        <Movies />
      </Layout>
    );
  }
}

export default App;
