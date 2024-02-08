import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './styles/EditEmployee.scss';

function EditEmployee() {
  const [employeeData, setEmployeeData] = useState({
    empName: '',
    departmentCode: '',
    empAddressLine1: '',
    empAddressLine2: '',
    empAddressLine3: '',
    dateOfBirth: '',
    dateOfJoin: '',
    basicSalary: 0,
    isActive: false
  });
  const { empNo } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/api/v1.0/Employee/${empNo}`)
      .then(response => {
        setEmployeeData(response.data); 
      })
      .catch(error => {
        console.error('Error fetching employee details:', error.message);
      });
  }, [empNo]);

  const handleChange = e => {
    const { name, value } = e.target;
    setEmployeeData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.put(`http://localhost:3001/api/v1.0/Employee`, employeeData)
      .then(response => {
        console.log('Employee updated successfully:', response.data);
        navigate('/');
      })
      .catch(error => {
        console.error('Error updating employee:', error.message);
      });
  };

  return (
    <div className="edit-employee">
      <h1>Update</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="empName">Employee Name:</label>
          <input
            type="text"
            id="empName"
            name="empName"
            value={employeeData.empName}
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
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={employeeData.dateOfBirth}
            onChange={handleChange}
          />
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
        </div>
        {/* <div className="form-group">
          <label htmlFor="isActive">Active:</label>
          <input
            type="checkbox"
            id="isActive"
            name="isActive"
            checked={employeeData.isActive}
            onChange={handleChange}
          />
        </div> */}
        <div className="form-group">
          <button type="submit">Update Employee</button>
          <Link to="/" className="back-btn">Home</Link>
        </div>
      </form>
    </div>
  );
}

export default EditEmployee;
