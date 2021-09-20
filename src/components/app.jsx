import React, { Component } from 'react';
import FlatList from './flatlist.jsx';
import flats from '../../data/flats';
// import SimpleMap from './googlemap'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats: flats
    };

    console.log(this.state.flats)
  }


  render() {
    return (
      <div>
        <FlatList flats={this.state.flats} />
        <div className="map-container">
         {/* {SimpleMap()} */}
        </div>
      </div>
    );
  }
}

export default App;
