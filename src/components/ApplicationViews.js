// import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import OwnerList from './owner/OwnerList'
import AnimalList from './animal/AnimalList'
import AnimalForm from './animal/AnimalForm'
import AnimalEditForm from './animal/AnimalEditForm'
import EmployeeList from './employee/EmployeeList'
import EmployeeDetail from './employee/EmployeeDetail'
import EmployeeForm from './employee/EmployeeForm'
import EmployeeEditForm from './employee/EmployeeEditForm'
import AnimalDetail from './animal/AnimalDetail'
import LocationList from './location/LocationList'
import Login from './auth/Login'
import { Route, withRouter, Redirect } from "react-router-dom"
import EmployeeWithAnimals from './employee/EmployeeWithAnimals'

//ApplicationViews merely listens for the route, the buttons are what tell the browser where the user wants to go//
class ApplicationViews extends Component {

  isAuthenticated = () => localStorage.getItem("credentials") !== null

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        {/* added "exact" to the path because we now have Animal Details */}
        <Route exact path="/animals" render={props => {
          if (this.isAuthenticated()) {
            return <AnimalList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/animals/:animalId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            // Pass the animalId to the AnimalDetailComponent//
            return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/animals/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <AnimalForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/animals/:animalId(\d+)/edit" render={props => {
          if (this.isAuthenticated()) {
            return <AnimalEditForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/employees" render={(props) => {
          if (this.isAuthenticated()) {
            return <EmployeeList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
         <Route path="/employees/:employeeId(\d+)" render={(props) => {
                    // Pass the animalId to the AnimalDetailComponent
                    return <EmployeeDetail employeeId={parseInt(props.match.params.ownerId)}{...props} />
                }} />
         <Route exact path="/employee/:employeeId(\d+)/details" render={(props) => {
          if (this.isAuthenticated()) {
            // Pass the animalId to the EmployeeDetailComponent//
            return <EmployeeWithAnimals employeeId={parseInt(props.match.params.employeeId)} {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
         <Route path="/employee/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <EmployeeForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/employee/:employeeId(\d+)/edit" render={props => {
          if (this.isAuthenticated()) {
            return <EmployeeEditForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/Owner" render={(props) => {
          if (this.isAuthenticated()) {
            return <OwnerList />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/locations" render={(props) => {
          return <LocationList />
        }} />

        <Route exact path="/animals" render={props => {
          if (this.props.user) {
          return <AnimalList {...props} />
        } else {
          return <Redirect to="/login" />
    }
}} />
        <Route path="/login" render={props => {
         return <Login setUser={this.props.setUser} {...props} />
}} />
        {/* <Route path="/login" component={Login} /> */}
      </React.Fragment>
    )
  }
}

export default ApplicationViews

// import { Route, Redirect } from 'react-router-dom'
// import React, { Component } from 'react'
// import Home from './home/home'
// import AnimalList from './animal/Animallist'
// import AnimalForm from './animal/AnimalForm'
// //only include these once they are built - previous practice exercise
// import AnimalDetail from './animal/Animaldetail'
// import AnimalEditForm from './animal/AnimalEditForm'
// import EmployeesList from './employee/Employeeslist'
// import OwnerList from './owner/ownercard'
// import LocationList from './location/Locationslist'
// import Login from './auth/login'
// import EmployeeWithAnimals from './employee/EmployeeWithAnimals'


// class ApplicationViews extends Component {

//   isAuthenticated = () => localStorage.getItem("credentials") !== null

//   render() {
//     return (
//       <React.Fragment>
//         <Route exact path="/" render={(props) => {
//           return <Home />
//         }} />
//         {/* exact was put in because we can :call: Animal Details*/}
//         <Route exact path="/animals" render={props => {
//           if (this.isAuthenticated()) {
//             return <AnimalList {...props} />
//           } else {
//             return <Redirect to="/login" />
//           }
//         }} />
//         <Route exact path="/animals/:animalId(\d+)" render={(props) => {
//           if (this.isAuthenticated()) {
//             // this puts the animalId in the animal component - passes//
//             return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
//           } else {
//             return <Redirect to="/login" />
//           }
//         }} />
//         <Route path="/animals/new" render={(props) => {
//           if (this.isAuthenticated()) {
//             return <AnimalForm {...props} />
//           } else {
//             return <Redirect to="/login" />
//           }
//         }} />
//         <Route path="/animals/:animalId(\d+)/edit" render={props => {
//           if (this.isAuthenticated()) {
//             return <AnimalEditForm {...props} />
//           } else {
//             return <Redirect to="/login" />
//           }
//         }} />
//         <Route path="/Employees" render={(props) => {
//           if (this.isAuthenticated()) {
//             return <EmployeesList />
//           } else {
//             return <Redirect to="/login" />
//           }
//         }} />
//         <Route path="/employees/:employeeId(\d+)/details" render={(props) => {
//             return <EmployeeWithAnimals {...props} />
//         }} />
//          <Route path="/Owners" render={(props) => {
//           if (this.isAuthenticated()) {
//             return <OwnerList />
//           } else {
//             return <Redirect to="/login" />
//           }
//         }} />
//         <Route exact path="/Locations" render={(props) => {
//           return <LocationList />
//         }} />
//         <Route path="/login" component={Login} />
//       </React.Fragment>
//     )
//   }
// }

// export default ApplicationViews



// class ApplicationViews extends Component {

//         // Check if credentials are in local storage
//     //returns true/false
//     isAuthenticated = () => localStorage.getItem("credentials") !== null

//     render() {
//     return (
//       <React.Fragment>
//         <Route exact path="/" render={(props) => {
//           return <Home />
//         }} />
//        <Route exact path="/animals" render={props => {
//           if (this.isAuthenticated()) {
//              return <AnimalList {...props} />
//         } else {
//              return <Redirect to="/login" />
//         }
//         }} />
//         <Route exact path="/animals/:animalId(\d+)" render={(props) => {
//       // Pass the animalId to the AnimalDetailComponent
//           return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props}/>
//          }} />
//          <Route path="/animals/new" render={(props) => {
//           return <AnimalForm {...props} />
//         }} />
//         <Route path="/locations" render={(props) => {
//           return <LocationList />
//         }} />
//         <Route path="/Owners" render={(props) => {
//           return <OwnerList />
//         }} />
//         <Route path="/login" component={Login} />
//         <Route path="/employees" render={(props) => {
//           return <EmployeesList />
//         }
//        <Route exact path="/animals/:animalId(\d+)/edit" render={props => {
//           return <AnimalEditForm {...props} />
//         <Route path="/login" component={login} />
//      </React.Fragment>
//     )
//   }
// }

// export default ApplicationViews