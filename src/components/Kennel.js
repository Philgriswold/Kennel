import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"
import "./Kennel.css"

class Kennel extends Component {
    state = {
      user: false
    }

    // Check if credentials are in local storage
    //returns true/false
    isAuthenticated = () => localStorage.getItem("credentials") !== null



    setUser = (authObj) => {
      /*
        For now, just store the email and password that
        the customer enters into local storage.
      */
      localStorage.setItem(
        "credentials",
        JSON.stringify(authObj)
      )
      this.setState({
        user: this.isAuthenticated()
      });
    }

    clearUser = () => {
      localStorage.clear()

      this.setState({
        user: this.isAuthenticated()
      });
    }
    componentDidMount(){
      this.setState({
        user: this.isAuthenticated()
      })
    }

  render() {
    return (
      <>
        <NavBar user={this.state.user} clearUser={this.clearUser} />
        <ApplicationViews user={this.state.user}
                          setUser={this.setUser} />
      </>
    )
  }
}

export default Kennel



// import React, { Component } from 'react'
// import './Kennel.css'
// import NavBar from "./nav/navBar"
// import './animal.dog.svg'
// import AnimalCard from './animal/animalcard';
// import OwnerCard from './animal/ownercard';
// import EmployeeCard from './animal/employeecard';
// import LocationCard from "./animal/locationcard";
// import Applicationviews from './ApplicationViews';

// class Kennel extends Component {
//     render() {
//         return (
//         <section>
//             <div>
//             <AnimalCard />
//             <AnimalCard />
//             <AnimalCard />
//             </div>
//             <div>
//             <EmployeeCard />
//            </div>
//             <div>
//             <OwnerCard />
//             </div>
//             <div>
//             <LocationCard />
//             </div>
//         </section>
//         );
//     }
// }

// export default Kennel