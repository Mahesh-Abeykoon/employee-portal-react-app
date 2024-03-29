import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/AddEmployee.scss';

const SERVER_URL = "https://employee-portal-react-app-backend.onrender.com";

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
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setEmployeeData(prevData => ({
      ...prevData,
      [name]: newValue
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!employeeData.empNo.trim()) {
      errors.empNo = '*Employee number is required';
    }
    if (!employeeData.empName.trim()) {
      errors.empName = '*Name is required';
    } 
    if (!employeeData.empAddressLine1.trim()) {
      errors.empAddressLine1 = '*Address Line 1 is required';
    }
    if (!employeeData.departmentCode.trim()){
      errors.departmentCode = '*Department Code is required'
    }
    if (!employeeData.dateOfJoin.trim()){
      errors.dateOfJoin = '*Date of join is required'
    }
    if (!employeeData.dateOfBirth.trim()){
      errors.dateOfBirth = '*Date of birth Code is required'
    }
    if (!employeeData.dateOfBirth.trim()){
      errors.dateOfBirth = '*Date of birth Code is required'
    }
    if (!employeeData.basicSalary){
      errors.basicSalary = '*Basic salary is required'
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    if(validateForm()){
      axios.post(`${SERVER_URL}/api/v1.0/Employee`, employeeData)
      .then(response => {
        console.log('Employee added successfully:', response.data);
        navigate('/');
      })
      .catch(error => {
        console.error('Error adding employee:', error.message);
      });
    }
  };

  return (
    <div className="add-employee">
      <h1>Add New Employee</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="empNo">Employee Number:</label>
          <input 
            type="text" 
            id="empNo" 
            name="empNo" 
            value={employeeData.empNo} 
            onChange={handleChange} 
          />
          <div>
            {errors.empNo && <span className="error">{errors.empNo}</span>}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="empName">Name:</label>
          <input 
            type="text" 
            id="empName" 
            name="empName" 
            value={employeeData.empName} 
            onChange={handleChange} 
          />
          <div>
            {errors.empName && <span className="error">{errors.empName}</span>}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="empAddressLine1">Address Line 1:</label>
          <input 
            type="text" 
            id="empAddressLine1" 
            name="empAddressLine1" 
            value={employeeData.empAddressLine1} 
            onChange={handleChange} 
          />
          <div>
            {errors.empAddressLine1 && <span className="error">{errors.empAddressLine1}</span>}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="empAddressLine2">Address Line 2:</label>
          <input 
            type="text" 
            id="empAddressLine2" 
            name="empAddressLine2" 
            value={employeeData.empAddressLine2} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="empAddressLine3">Address Line 3:</label>
          <input 
            type="text" 
            id="empAddressLine3" 
            name="empAddressLine3" 
            value={employeeData.empAddressLine3} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="departmentCode">Department Code:</label>
          <input 
            type="text" 
            id="departmentCode" 
            name="departmentCode" 
            value={employeeData.departmentCode} 
            onChange={handleChange} 
          />
          <div>
            {errors.departmentCode && <span className="error">{errors.departmentCode}</span>}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="dateOfJoin">Date of Join:</label>
          <input 
            type="date" 
            id="dateOfJoin" 
            name="dateOfJoin" 
            value={employeeData.dateOfJoin} 
            onChange={handleChange} 
          />
          <div>
            {errors.dateOfJoin && <span className="error">{errors.dateOfJoin}</span>}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input 
            type="date" 
            id="dateOfBirth" 
            name="dateOfBirth" 
            value={employeeData.dateOfBirth} 
            onChange={handleChange} 
          />
          <div>
            {errors.dateOfBirth && <span className="error">{errors.dateOfBirth}</span>}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="basicSalary">Basic Salary:</label>
          <input 
            type="number" 
            id="basicSalary" 
            name="basicSalary" 
            value={employeeData.basicSalary} 
            onChange={handleChange} 
          />
          <div>
            {errors.basicSalary && <span className="error">{errors.basicSalary}</span>}
          </div>
        </div>
        <div className="form-group">
          <label>
            {employeeData.isActive 
              ? <p className="active-status">Active</p> 
              : <p className="inactive-status">Inactive</p>
            }
          </label>
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
