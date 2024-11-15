import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

// Import the component files
import ListEmployee from './Components/ListEmployee';
// App.js
import AddEmployee from './Components/AddEmployee';
import EditEmployee from './Components/EditEmployee';

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
