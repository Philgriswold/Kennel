import React, { Component } from "react";
import AnimalManager from "../../modules/AnimalManager";
import "./AnimalDetail.css";
import { Route, withRouter, Redirect } from "react-router-dom";

class AnimalDetail extends Component {
  state = {
    name: "",
    breed: "",
    url: "",
    loadingStatus: true,
    //sets this variable to false on first load, this will help us check if it's a valid animal
    isAnimalValid: false
  };

  componentDidMount() {
    console.log("AnimalDetail: ComponentDidMount");
    //get(id) from AnimalManager and hang on to the data; put it into state
    AnimalManager.get(this.props.animalId).then(animal => {
      //if the name of the animal exist, set isAnimalValid to true//
      if (animal.name) {
        var isAnimalValid = true;
      }
      this.setState({
        name: animal.name,
        breed: animal.breed,
        url: animal.url,
        loadingStatus: false,
        isAnimalValid: isAnimalValid
      });
    });
  }

  handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    this.setState({ loadingStatus: true });
    AnimalManager.delete(this.props.animalId).then(() =>
      this.props.history.push("/animals")
    );
  };

  render() {
    /*this statement is added to the render to prevent
    the method from exploding when it doesn't have the animal url yet, the state starts with "" */
    if (this.state.loadingStatus) {
      return <p>Loading...</p>;
      //line below checks if loadingStatus is finished and if the isAnimalValid has been set to true//
    }
    if (!this.state.loadingStatus && this.state.isAnimalValid) {
      return (
        <div className="card">
          <div className="card-content">
            <picture>
              <img src={require("./dog.svg")} alt="My Dog" />
              <img src={require(`${this.state.url}`)} alt="My Dog" />
            </picture>
            <h3>
              Name:{" "}
              <span style={{ color: "darkslategrey" }}>{this.state.name}</span>
            </h3>
            <p>Breed: {this.state.breed}</p>
            <button
              type="button"
              disabled={this.state.loadingStatus}
              onClick={this.handleDelete}
            >
              Discharge
            </button>
          </div>
        </div>
      );
    } else {
      //redirects back to the animals page if no Id//
      return <Redirect to="/animals" />;
    }
  }
}

export default AnimalDetail;

// import React, { Component } from 'react';
// import AnimalManager from '../../modules/AnimalManager';
// import './AnimalDetail.css'

// class AnimalDetail extends Component {

//   state = {
//       name: "",
//       breed: "",
//   }

//   handleDelete = () => {
//     //invoke the delete function in AnimalManger and re-direct to the animal list.
//     this.setState({loadingStatus: true})
//     AnimalManager.delete(this.props.animalId)
//     .then(() => this.props.history.push("/animals"))
// }

//    componentDidMount(){
//     console.log("AnimalDetail: ComponentDidMount");
//     //get(id) from AnimalManager and hang on to the data; put it into state
//     AnimalManager.get(this.props.animalId)
//     .then((animal) => {
//       this.setState({
//         name: animal.name,
//         breed: animal.breed,
//         imageUrl: animal.url,
//         loadingStatus: false
//     });
//   });
// }
//   render() {
//     if(this.state.loadingStatus) {
//       return <p>Loading...</p>
//     } else {
//     }

//     return (
//       <div className="card">
//         <div className="card-content">
//           <picture>
//             <img src={require('./dog.svg')} alt="My Dog" />
//           </picture>
//             <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
//             <p>Breed: {this.state.breed}</p>
//         </div>
//       </div>
//     );
//   }
// }

// export default AnimalDetail;
