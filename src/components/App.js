import React, { Component } from 'react';

import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <div className="row">
        <h2> React Router App </h2>
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
