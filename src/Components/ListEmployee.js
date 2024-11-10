import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../index.css';
import employeeService from './Services'; // Ensure the path is correct

const divStyle = {
  margin: '8% 8%',
};

class ListEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    this.getEmployeeList();
  }

  // Fetch all employees using the service method
  getEmployeeList() {
    employeeService.fetchEmployees() // Use the imported service instance
      .then((employees) => {
        this.setState({
          employees,
          loading: false,
        });
      })
      .catch((error) => {
        console.error('Error fetching employee data:', error);
        this.setState({ 
          loading: false, 
          error: error.message || 'Failed to fetch employees. Please try again later.' 
        });
      });
  }

  // Delete an employee using the service method
  deleteEmployee(empid) {
    employeeService.deleteEmployee(empid)
      .then(() => {
        this.getEmployeeList(); // Refresh employee list after deletion
      })
      .catch((error) => {
        console.error('Error deleting employee:', error);
        this.setState({ 
          error: 'Failed to delete employee. Please try again later.' 
        });
      });
  }

  render() {
    const { employees, loading, error } = this.state;

    // Loading state
    if (loading) {
      return <div>Loading...</div>;
    }

    // Error state
    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div style={divStyle}>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              employees.length > 0 ? (
                employees.map((employee, index) => (
                  <tr key={employee._id}>
                    <td>{index + 1}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phone}</td>
                    <td>
                      <Link to={`editemployee/${employee._id}`} className="btn btn-primary">Edit</Link>
                      <Button 
                        onClick={() => this.deleteEmployee(employee._id)} 
                        variant="danger" 
                        className="ml-2"
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center">No employees found</td>
                </tr>
              )
            }
          </tbody>
        </Table>
      </div>
    );
  }
}

export default ListEmployee;
