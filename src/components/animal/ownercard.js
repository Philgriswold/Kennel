import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./owner.svg')} alt="Dog Owner" />
          </picture>
          <h3>Owner Name: <span className="card-ownername">Bill</span></h3>
          <p>Dog Breed Owned: Poodle</p>
        </div>
      </div>
    );
  }
}

export default OwnerCard;