import React, { Component } from 'react'
//import the components we will need
import OwnerCard from './ownercard'
import OwnerManager from '../../modules/OwnerManager'

class OwnerList extends Component {
    //define what this component needs to render
    state = {
        owners: [],
    }

componentDidMount(){
    console.log("Ownerslist: ComponentDidMount");
    //getAll from AnimalManager and hang on to that data; put it in state
    OwnerManager.getAll()
    .then((owners) => {
        this.setState({
            owners: owners
        })
    })
}

render(){
    console.log("Ownerslist: Render");

    return(
        <div className="container-cards">
            {this.state.owners.map(owner =>
            <OwnerCard key={owner.id} owner={owner}/>)}
        </div>
    )
}
}
const deleteOwner = (id) => {
    OwnerManager.delete(id)
    .then(() => {
        OwnerManager.getAll()
      //newEmployees is taco in this situation//
      .then((newOwners) => {
        this.setState({
            owners: newOwners
        })
      })
    })
}


export default OwnerList
