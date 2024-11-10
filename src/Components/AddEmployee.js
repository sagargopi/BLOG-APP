import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const customStyle = {
  width: '300px',
  margin: '0 auto',
  textAlign: 'left'
};

const AddEmployee = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:4000/employees/addEmployee', {
        firstName,
        lastName,
        email,
        phone,
      });
      navigate('/'); // Navigate to the index page
    } catch (error) {
      console.error(error);
      setError('An error occurred while adding the employee. Please try again.');
    }
  };

  return (
    <div className="container">
      <form style={customStyle} onSubmit={handleSubmit}>
        <h2>Add Employee</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <label style={{ display: 'block' }}>
          First Name
          <input
            name="firstName"
            type="text"
            value={firstName}
            onChange={handleChange}
            className="form-control"
            required
          />
        </label>
        <br />
        <label style={{ display: 'block' }}>
          Last Name
          <input
            name="lastName"
            type="text"
            value={lastName}
            onChange={handleChange}
            className="form-control"
            required
          />
        </label>
        <br />
        <label style={{ display: 'block' }}>
          Email
          <input
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </label>
        <br />
        <label style={{ display: 'block' }}>
          Phone No
          <input
            name="phone"
            type="text"
            value={phone}
            onChange={handleChange}
            className="form-control"
            required
          />
        </label>
        <br />
        <input
          type="submit"
          value="Add Employee"
          className="btn btn-primary"
        />
      </form>
    </div>
  );
};

export default AddEmployee;
