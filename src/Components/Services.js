// services.js
import axios from 'axios';

class EmployeeService {
  constructor() {
    this.apiBaseUrl = 'http://localhost:4000/employees';
  }

  fetchEmployees() {
    return axios.get(this.apiBaseUrl)
      .then(response => response.data)
      .catch(error => {
        console.error('Error fetching employees:', error);
        throw error; // Propagate the error
      });
  }

  deleteEmployee(id) {
    return axios.delete(`${this.apiBaseUrl}/deleteEmployee/${id}`)
      .then(() => {
        console.log('Employee Deleted !!!');
      })
      .catch(error => {
        console.error('Error deleting employee:', error);
        throw error; // Propagate the error
      });
  }
}

const employeeService = new EmployeeService();
export default employeeService;
