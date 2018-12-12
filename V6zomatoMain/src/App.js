import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, NavLink, Redirect,  } from 'react-router-dom'

import Home from './components/layout/Home';
import UserJoin from './components/layout/UserJoin'
import UserLogin from './components/layout/UserLogin'
import store from './store'
import './App.css'


class App extends Component {
  render() {
    return (
      <Provider store = {store} >
        <Router>
          <div className='app'>
              <Route path='/' exact component={UserJoin}/>
              <Route path='/login' exact component={UserLogin}/>
              <Route path='/home' exact component={Home}/>
          </div>
        </Router>
     </Provider>
    );
  }
}

export default App;