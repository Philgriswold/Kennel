import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/home'
import AnimalList from './animal/Animallist'
//only include these once they are built - previous practice exercise
import LocationCard from './animal/locationcard'
import EmployeeCard from './animal/employeecard'
import OwnerCard from './animal/ownercard'


class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route path="/animals" render={(props) => {
          return <AnimalList />
        }} />
        <Route path="/location" render={(props) => {
          return <LocationCard />
        }} />
        <Route path="/owner" render={(props) => {
          return <OwnerCard />
        }} />
        <Route path="/employees" render={(props) => {
          return <EmployeeCard />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews