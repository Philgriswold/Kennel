import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./employee.jpg')} alt="Employee" />
          </picture>
          <h3>Name: <span className="card-employee">Mr. Sad Face</span></h3>
          <p>Title: Mr. Employee</p>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;