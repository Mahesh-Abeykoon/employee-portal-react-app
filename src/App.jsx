import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import EmployeeDetails from './components/EmployeeDetails'; 

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/add" element={<AddEmployee />} />
          <Route path="/edit/:empNo" element={<EditEmployee />} />
          <Route path="/employee/:empNo" element={<EmployeeDetails/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
