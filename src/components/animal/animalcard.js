import React, { Component } from 'react';
import './Animal.css'
import { Link } from "react-router-dom";
import { firstLetterCase } from '../../modules/helpers'
import AnimalManager from '../../modules/AnimalManager'

class AnimalCard extends Component {

    handleDelete = (id) => {
      AnimalManager.delete(id)
      .then(() => this.props.getData());
    }
    myScopedFunction = () => {
        console.log("Hello World")
    }

  render() {
    console.log("animal props", this.props);
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require(`./dog.svg`)} alt="My Dog" />
          </picture>
          <h3>Name: <span className="card-petname">{firstLetterCase(this.props.animal.name)}</span></h3>
          <p>Breed: {this.props.animal.breed}</p>
          <img src={require(`${this.props.animal.url}`)} alt="My Dog" />
          {/* another way to write this: */}
          {/* <img src={require(`./Images/${this.props.animal.id}.jpg`)} alt="My Dog" /> */}
          <Link to={`/animals/${this.props.animal.id}`}><button>Details</button></Link>
          <button type="button" onClick={() => {this.props.history.push(`/animals/${this.props.animal.id}/edit`)}}>Edit</button>
          <button type="button" onClick={() => this.props.deleteAnimal(this.props.animal.id)}>Discharge</button>
          <button type="button" onClick={this.myScopedFunction}>ConsoleLogButton</button>
        </div>
      </div>
    );
  }
}


export default AnimalCard;

// import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
// import {firstLetterCase} from "../../modules/helpers"

// class AnimalCard extends Component {
//   render() {
//     return (
//       <div className="card">
//         <div className="card-content">
//           <h3>Name: <span className="card-petname">{this.props.animal.name}</span></h3>
//           <p>Breed: {this.props.animal.breed}</p>
//           <img src={require(`${this.props.animal.url}`)}/>
//           <button type="button" onClick={() => this.props.deleteAnimal(this.props.animal.id)}>Discharge</button>
//           <button type="button" onClick={this.myScopedFunction}>Button</button>
//         </div>
//       </div>
//     );
//   }
// }

// export default AnimalCard;