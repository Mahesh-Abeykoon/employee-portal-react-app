import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/AddEmployee.scss';

function AddEmployee() {
  const [employeeData, setEmployeeData] = useState({
    empNo: '',
    empName: '',
    empAddressLine1: '',
    empAddressLine2: '',
    empAddressLine3: '',
    departmentCode: '',
    dateOfJoin: '',
    dateOfBirth: '',
    basicSalary: 0,
    isActive: true
  });
  const history = useNavigate();

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setEmployeeData(prevData => ({
      ...prevData,
      [name]: newValue
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:3001/api/v1.0/Employee', employeeData)
      .then(response => {
        console.log('Employee added successfully:', response.data);
        history('/'); 
      })
      .catch(error => {
        console.error('Error adding employee:', error.message);
      });
  };

  return (
    <div className="add-employee">
      <h1>Add New Employee</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Employee Number:</label>
          <input type="text" name="empNo" value={employeeData.empNo} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="empName" value={employeeData.empName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Address Line 1:</label>
          <input type="text" name="empAddressLine1" value={employeeData.empAddressLine1} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Address Line 2:</label>
          <input type="text" name="empAddressLine2" value={employeeData.empAddressLine2} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Address Line 3:</label>
          <input type="text" name="empAddressLine3" value={employeeData.empAddressLine3} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Department Code:</label>
          <input type="text" name="departmentCode" value={employeeData.departmentCode} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Date of Join:</label>
          <input type="date" name="dateOfJoin" value={employeeData.dateOfJoin} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Date of Birth:</label>
          <input type="date" name="dateOfBirth" value={employeeData.dateOfBirth} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Basic Salary:</label>
          <input type="number" name="basicSalary" value={employeeData.basicSalary} onChange={handleChange} />
        </div>        
        <div className="form-group">
          <label htmlFor="isActive">Active:</label>
          <div className="checkbox-wrapper">
          <input
            type="checkbox"
            id="isActive"
            name="isActive"
            checked={employeeData.isActive}
            onChange={handleChange}
          />
           <label className="toggle" htmlFor="isActive"></label>
          </div>
        </div>
        <div className="form-group">
          <button type="submit">Add Employee</button>
          <Link to="/" className="back-btn">Home</Link>
        </div>
      </form>
    </div>
  );
}

export default AddEmployee;
