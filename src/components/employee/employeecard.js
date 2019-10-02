import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require(`${this.props.employees.url}`)} alt="an employee"></img>
          </picture>
          <h3>Name: <span className="card-employee">Mr. Sad Face</span></h3>
          <p>Title: Mr. Employee</p>
          <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Fire</button>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;