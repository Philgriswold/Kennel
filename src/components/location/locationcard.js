import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./dog.svg')} alt="My Location" />
          </picture>
          <h3>Name: <span className="card-location"></span></h3>
          <p>Location</p>
        </div>
      </div>
    );
  }
}

export default LocationCard;