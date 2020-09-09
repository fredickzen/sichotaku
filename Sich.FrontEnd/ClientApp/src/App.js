import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './layouts/Layout.jsx';

import 'antd/dist/antd.css';
import './assets/css/custom.css'
import Home from './components/pages/Home/Home';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
      </Layout>
    );
  }
}
