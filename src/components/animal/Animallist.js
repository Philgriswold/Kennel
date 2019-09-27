import React, { Component } from 'react'
//import the components we will need
import AnimalCard from './animalcard'
import AnimalManager from '../../modules/Animalmanager'

class AnimalList extends Component {
    //define what this component needs to render
    state = {
        animals: [],
    }

componentDidMount(){
    console.log("Animallist: ComponentDidMount");
    //getAll from AnimalManager and hang on to that data; put it in state
    AnimalManager.getAll()
    .then((animals) => {
        this.setState({
            animals: animals
        })
    })
}

render(){
    console.log("Animallist: Render");

    return(
        <div className="container-cards">
            {this.state.animals.map(animal =>
            <AnimalCard key={animal.id} animal={animal}/>)}
        </div>
    )
}
}

export default AnimalList
