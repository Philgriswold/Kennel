import React, { Component } from 'react'
//import the components we will need
import EmployeeCard from './employeecard'
import EmployeeManager from './EmployeeManager'

class EmployeesList extends Component {
    //define what this component needs to render
    state = {
        employees: [],
    }

componentDidMount(){
    console.log("Employeeslist: ComponentDidMount");
    //getAll from AnimalManager and hang on to that data; put it in state
    EmployeeManager.getAll()
    .then((employees) => {
        this.setState({
            employees: employees
        })
    })
}

render(){
    console.log("Employeeslist: Render");

    return(
        <div className="container-cards">
            {this.state.employees.map(employee =>
            <EmployeeCard key={employee.id} employee={employee}/>)}
        </div>
    )
}
}
const deleteEmployee = (id) => {
    EmployeeManager.delete(id)
    .then(() => {
      EmployeeManager.getAll()
      .then((newEmployees) => {
        this.setState({
            employees: newEmployees
        })
      })
    })
  }


export default EmployeesList
