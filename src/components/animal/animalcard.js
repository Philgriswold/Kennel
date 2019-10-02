import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {firstLetterCase} from "../../modules/helpers"

class AnimalCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <span className="card-petname">{this.props.animal.name}</span></h3>
          <p>Breed: {this.props.animal.breed}</p>
          <img src={require(`${this.props.animal.url}`)}/>
          <button type="button" onClick={() => this.props.deleteAnimal(this.props.animal.id)}>Discharge</button>
          <button type="button" onClick={this.myScopedFunction}>ConsoleLogButton</button>
        </div>
      </div>
    );
  }
}

export default AnimalCard;