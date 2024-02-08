import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/v1.0/Employees');
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error.message);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div>
      <h1>Employee Portal</h1>
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>
            <strong>Name:</strong> {employee.empName}<br />
            <strong>Employee Number:</strong> {employee.empNo}<br />
            <strong>Department:</strong> {employee.departmentCode}<br />
            <strong>Date of Birth:</strong> {employee.dateOfBirth}<br />
            <strong>Date of Join:</strong> {employee.dateOfJoin}<br />
            <strong>Basic Salary:</strong> {employee.basicSalary}<br />
            <strong>Active:</strong> {employee.isActive ? 'Yes' : 'No'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
