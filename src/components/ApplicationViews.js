import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/home'
import AnimalList from './animal/Animallist'
import AnimalForm from './animal/AnimalForm'
//only include these once they are built - previous practice exercise
import AnimalDetail from './animal/Animaldetail'
import EmployeesList from './employee/Employeeslist'
import OwnerList from './animal/ownercard'
import LocationList from './location/Locationslist'


class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route exact path="/animals" render={(props) => {
           return <AnimalList />
        }} />
        <Route path="/animals/:animalId(\d+)" render={(props) => {
      // Pass the animalId to the AnimalDetailComponent
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props}/>
         }} />
        <Route path="/location" render={(props) => {
          return <LocationList />
        }} />
        <Route path="/owner" render={(props) => {
          return <OwnerList />
        }} />
        <Route path="/employees" render={(props) => {
          return <EmployeesList />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews