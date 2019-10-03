import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Employee.css'

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img className={this.props.employee.id === 4 ? "spinner" : ""} src={require(`${this.props.employee.url}`)} alt="An Employee" />
          </picture>
          <h3>Name: <span className={this.props.employee.employeeOftheMonth === "true" ? "EmployeeOfTheMonth" : "card-Employeename"}>{this.props.employee.name}</span></h3>
          {
            this.props.employee.employeeOftheMonth === "true" ? <p>Employee Of the Month {this.props.employee.name}!</p> : ""
          }
          {/* <Link to={`/employee/${this.props.employee.id}`}><button>Details</button></Link> */}
          <button type="button"
        onClick={() => { this.props.history.push(`/employee/${this.props.employee.id}/details`) }}>Details</button>
          <button type="button" onClick={() => {this.props.history.push(`/employee/${this.props.employee.id}/edit`)}}>Edit</button>
        <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Fire</button>
        </div>
      </div>
    );
  }
}
export default EmployeeCard;



// import React, { Component } from 'react';

// class EmployeeCard extends Component {
//   render() {
//     return (
//       <div className="card">
//         <div className="card-content">
//           <picture>
//             <img src={require(`${this.props.employee.url}`)} alt="an employee"></img>
//           </picture>
//           <h3>Name: <span className="card-employee">Mr. Sad Face</span></h3>
//           <p>Title: Employee</p>
//           <button type="button"
//         onClick={() => { this.props.history.push(`/employees/${this.props.employee.id}/details`) }}>Details</button>
//           <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Fire</button>
//         </div>
//       </div>
//     );
//   }
// }



// export default EmployeeCard;