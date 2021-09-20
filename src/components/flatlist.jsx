import React, { Component } from 'react';
import Flat from './flat.jsx';
import flats from '../../data/flats';

class FaltList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <Flat />
      </div>
    )
  }
}

export default FaltList;
