import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import {Customers} from './components/customer/Customers';
import {Products} from './components/customer/Products'
import { Stores } from './components/customer/Stores';
import { Sales } from './components/customer/Sales';
import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        
        <Route path='/customers' component={Customers} />
        <Route path='/products' component={Products} />
        <Route path='/stores' component={Stores} />
        <Route path='/sales' component={Sales} />
        

      </Layout>
    );
  }
}
