import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const customStyle = {
  width: '300px',
  margin: '0 auto'
};

const EditEmployee = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getEmployeeById();
  }, []);

  // To get employee based on ID
  const getEmployeeById = () => {
    axios.get(`http://localhost:4000/employees/editEmployee/${id}`)
      .then((response) => {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmail(response.data.email);
        setPhone(response.data.phone);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

  // To update the record on submit
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`http://localhost:4000/employees/updateEmployee/${id}`, {
      firstName,
      lastName,
      email,
      phone,
    })
      .then((response) => {
        console.log(response);
        navigate('/'); // Navigate back to the employee list after update
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <form style={customStyle} onSubmit={handleSubmit}>
        <label>
          First Name
          <input
            name="firstName"
            type="text"
            value={firstName}
            onChange={handleChange}
            className="form-control"
          />
        </label>
        <br />
        <label>
          Last Name
          <input
            name="lastName"
            type="text"
            value={lastName}
            onChange={handleChange}
            className="form-control"
          />
        </label>
        <br />
        <label>
          Email
          <input
            name="email"
            type="text"
            value={email}
            onChange={handleChange}
            className="form-control"
          />
        </label>
        <br />
        <label>
          Phone No
          <input
            name="phone"
            type="text"
            value={phone}
            onChange={handleChange}
            className="form-control"
          />
        </label>
        <br />
        <input
          type="submit"
          value="submit"
          className="btn btn-primary"
        />
      </form>
    </div>
  );
};

export default EditEmployee;
