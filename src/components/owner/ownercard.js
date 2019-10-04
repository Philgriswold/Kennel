import React, { Component } from 'react';
// import OwnerList from "./OwnerList"

class OwnerCard extends Component {
  render() {
      console.log(this.props)
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require(`${this.props.owner.url}`)} alt="bestBoi" />
          </picture>
          <h3>Name: <span className="card-Owner">{this.props.owner.name}</span></h3>
          <p>Breed: Owner</p>
          <p>Motto: "{this.props.owner.motto}"</p>
          <button type="button" onClick={() => this.props.deleteOwner(this.props.owner.id)}>Resign</button>
        </div>
      </div>
    );
  }
}

export default OwnerCard;

// import React, { Component } from 'react';

// class OwnerCard extends Component {
//   render() {
//     return (
//       <div className="card">
//         <div className="card-content">
//           <picture>
//              <img src={require("./images/owner.png")} alt="the owner" />
//           </picture>
//           <h3>Owner Name: <span className="card-ownername">Bill</span></h3>
//           <p>Dog Breed Owned: Poodle</p>
//           <button type="button" onClick={() => this.props.deleteOwner(this.props.owner.id)}>Resign</button>
//          </div>
//       </div>
//     );
//   }
// }

// export default OwnerCard;
