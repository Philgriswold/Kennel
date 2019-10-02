import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require("./images/nashville.jpeg")} alt="My Location"/>
            <img src={require("./images/murfreesboro.jpeg")} alt="My Location"/>
          </picture>
          <h3>Location: <span className="card-locationName">{this.props.location.name}</span></h3>
          <p>Nashville location</p>
          <p>Address: {this.props.location.location}</p>
          <p>Capacity:{this.props.location.capacity}</p>
          <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>close it</button>
        </div>
      </div>
    );
  }
}

export default LocationCard;