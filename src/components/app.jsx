import React, { Component } from 'react';
import FlatList from './flatlist.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  // this.state = {
  //   flats: []
  // };

  render() {
    return (
      <div>
        <div className="flat-list">
          <FlatList />
        </div>
        <div className="map-container"></div>
      </div>
    );
  }
}

export default App;
