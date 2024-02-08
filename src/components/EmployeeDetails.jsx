import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './styles/EmployeeDetails.scss';

function EmployeeDetails() {
  const [employee, setEmployee] = useState(null);
  const { empNo } = useParams();

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/v1.0/Employee/${empNo}`);
        setEmployee(response.data);
      } catch (error) {
        console.error('Error fetching employee details:', error.message);
      }
    };

    fetchEmployee();
  }, [empNo]);

  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <div className="employee-details">
      <h1>Employee Details</h1>
      <p>Employee Number: {employee.empNo}</p>
      <p>Employee Name: {employee.empName}</p>
      <p>Address: {employee.empAddressLine1}, {employee.empAddressLine2}, {employee.empAddressLine3}</p>
      <p>Department: {employee.departmentCode}</p>
      <p>Date of Join: {employee.dateOfJoin}</p>
    </div>
  );
}

export default EmployeeDetails;
