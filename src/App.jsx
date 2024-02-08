import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import EmployeeDetails from './components/EmployeeDetails'; 
import Footer from './components/Footer';
import Header from "./components/Header";
function App() {
  return (
      <div>
        <Header/>
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
        <Footer/>
      </div>
  );
}

export default App;
