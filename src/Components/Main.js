import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

// Import the component files
import ListEmployee from './Components/ListEmployee';
import AddEmployee from './Components/AddEmployee';
import EditEmployee from './Components/EditEmployee';
import employeeService from './Services'; // Ensure the path and case are correct


class Main extends Component {
  render() {
    return (
      <main>
        <Routes>
          <Route exact path='/' element={<ListEmployee />} />
          <Route path='/list' element={<ListEmployee />} /> 
          <Route path='/addemployee' element={<AddEmployee />} />
          <Route path='/editemployee/:id' element={<EditEmployee />} />
        </Routes>
      </main>
    );
  }
}

export default Main;
