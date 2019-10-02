import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require(`${this.props.owner.url}`)} alt="The Owner"/>
          </picture>
          <h3>Owner Name: <span className="card-ownername">Bill</span></h3>
          <p>Dog Breed Owned: Poodle</p>
          <button type="button" onClick={() => this.props.deleteOwner(this.props.owner.id)}>Resign</button>
         </div>
      </div>
    );
  }
}

export default OwnerCard;