import React, { Component } from 'react';
import Flat from './flat.jsx';

class FaltList extends Component {
  constructor(props) {
    super(props);
  }

  renderList = () => {
  return this.props.flats.map(flat => {
      return  <Flat flat={flat} key={flat.name} />
        })
  }

  render() {
    return (
      <div className="flat-list">
         {this.renderList()}
      </div>
    )
  }
}

export default FaltList;
