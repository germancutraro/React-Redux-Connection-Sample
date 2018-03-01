import React, { Component } from 'react';
import './App.css';

import UserList from './containers/UserList';
import UserDetail from './containers/UserDetail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <UserList />
        </ul>
        <UserDetail />
      </div>
    );
  }
}

export default App;
