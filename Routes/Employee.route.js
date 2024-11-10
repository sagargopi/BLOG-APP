// Importing important packages
const express = require('express');

// Using express and routes
const app = express();
const employeeRoute = express.Router();

// Employee module which is required and imported
let employeeModel = require('../Models/Employee');

// Middleware to parse JSON request bodies
app.use(express.json()); // Ensure you have this to parse incoming JSON

// To Get List Of Employees
employeeRoute.route('/').get(async (req, res) => {
    try {
        const employees = await employeeModel.find(); // Use async/await
        res.json(employees);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error fetching employees' });
    }
});

// To Add New Employee
employeeRoute.route('/addEmployee').post(async (req, res) => {
    const employee = new employeeModel(req.body);
    try {
        await employee.save(); // Use async/await
        res.status(200).json({ employee: 'Employee Added Successfully' });
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: 'Something Went Wrong' });
    }
});

// To Get Employee Details By Employee ID
employeeRoute.route('/editEmployee/:id').get(async (req, res) => {
    const id = req.params.id;
    try {
        const employee = await employeeModel.findById(id); // Use async/await
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.json(employee);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error fetching employee' });
    }
});

// To Update The Employee Details
employeeRoute.route('/updateEmployee/:id').post(async (req, res) => {
    const id = req.params.id;
    try {
        const employee = await employeeModel.findById(id); // Use async/await
        if (!employee) {
            return res.status(404).json({ message: 'Unable to find employee with this ID' });
        }

        // Update employee details
        employee.firstName = req.body.firstName;
        employee.lastName = req.body.lastName;
        employee.email = req.body.email;
        employee.phone = req.body.phone;

        await employee.save(); // Use async/await
        res.json({ message: 'Employee Updated Successfully' });
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: 'Unable to update employee' });
    }
});

// To Delete The Employee
employeeRoute.route('/deleteEmployee/:id').delete(async (req, res) => {
    const id = req.params.id;
    try {
        // Use findByIdAndDelete instead of findByIdAndRemove
        const employee = await employeeModel.findByIdAndDelete(id);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.json({ message: 'Employee Deleted Successfully' });
    } catch (err) {
        console.error('Error deleting employee:', err);
        res.status(500).json({ message: 'Error deleting employee', error: err.message });
    }
});


module.exports = employeeRoute;
