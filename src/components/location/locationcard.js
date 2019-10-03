import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./images/nashville.jpeg')} alt="location" />
          </picture>
          <h3>Location: <span className="card-locationName">{this.props.location.name}</span></h3>
          <p>Come to our location!</p>
          <p>Address: {this.props.location.location}</p>
          <p>Capacity:{this.props.location.capacity}</p>
          <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>close it</button>
        </div>
      </div>
    );
  }
}

export default LocationCard;

// import React, { Component } from 'react';

// class LocationCard extends Component {
//   render() {
//     return (
//       <div className="card">
//         <div className="card-content">
//           <picture>
//             <img src={require("./images/nashville.jpeg")} alt="My Location"/>
//             <img src={require("./images/murfreesboro.jpeg")} alt="My Location"/>
//           </picture>
//           <h3>Location: <span className="card-locationName">{this.props.location.name}</span></h3>
//           <p>Nashville location</p>
//           <p>Address: {this.props.location.location}</p>
//           <p>Capacity:{this.props.location.capacity}</p>
//           <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>close it</button>
//         </div>
//       </div>
//     );
//   }
// }

// export default LocationCard;


// class LocationCard extends Component {
//   render() {
//     console.log(this.props);
//     return (
//       <div className="card">
//         <div className="card-content">
//           <picture>
//             <img src={require(`../images/${this.props.loca.url}`)} alt="place" />
//           </picture>
//           <h3>Name: <span className="card-locationname">{firstLetterCase(this.props.loca.name)}</span></h3>
//           <p>Place: {this.props.loca.place}</p>
//           <Link to={`/location/${this.props.loca.id}`}><button>Details</button></Link>
//           <button type="button" onClick={() => {this.props.history.push(`/locations/${this.props.loca.id}/edit`)}}>Edit</button>
//           <button type="button" onClick={() => this.props.deleteLocation(this.props.loca.id)}>Close</button>
//         </div>
//       </div>
//     );
//   }
// }

// export default LocationCard;



