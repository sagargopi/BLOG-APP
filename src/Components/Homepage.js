import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container text-center">
      <h1 className="mt-4">Employee Management System</h1>
      <div className="mt-4">
        <Link to="/addEmployee" className="btn btn-primary m-2">Add Employee</Link>
        <Link to="/editEmployee" className="btn btn-warning m-2">Edit Employee</Link>
        <Link to="/employeeList" className="btn btn-success m-2">List Employees</Link>
        <Link to="/deleteEmployee" className="btn btn-danger m-2">Delete Employee</Link>
      </div>
      <div className="mt-5">
        <h2>Manage Employees</h2>
        <p>Use the buttons above to add, edit, delete, or view employee details.</p>
      </div>
    </div>
  );
};

export default HomePage;
