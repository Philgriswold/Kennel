import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/home'
import AnimalList from './animal/Animallist'
import AnimalForm from './animal/AnimalForm'
//only include these once they are built - previous practice exercise
import AnimalDetail from './animal/Animaldetail'
import AnimalEditForm from './animal/AnimalEditForm'
import EmployeesList from './employee/Employeeslist'
import OwnerList from './owner/ownercard'
import LocationList from './location/Locationslist'
import Login from './auth/login'


class ApplicationViews extends Component {

  isAuthenticated = () => localStorage.getItem("credentials") !== null

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        {/* exact was put in because we can :call: Animal Details*/}
        <Route exact path="/animals" render={props => {
          if (this.isAuthenticated()) {
            return <AnimalList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/animals/:animalId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            // this puts the animalId in the animal component - passes//
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
        <Route path="/Employees" render={(props) => {
          if (this.isAuthenticated()) {
            return <EmployeesList />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/Owners" render={(props) => {
          if (this.isAuthenticated()) {
            return <OwnerList />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/Locations" render={(props) => {
          return <LocationList />
        }} />
        <Route path="/login" component={Login} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews



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