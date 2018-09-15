import React, { Component } from 'react';

// bootstrap 4 react
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

// style
import './App.css';

// components
import Layout from './hoc/Layout/Layout';
import Content from './containers/Content/Content';

class App extends Component {
  render() {
    return (
      <Layout>
        <Content></Content>
      </Layout>
    );
  }
}

export default App;
