import React, { Component } from "react"
import NavBar from "./nav/navBar"
import ApplicationViews from "./ApplicationViews"

import "./Kennel.css"

class Kennel extends Component {
  render() {
    return (
      <>
        <NavBar />
        <ApplicationViews />
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