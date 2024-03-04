import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import '../styles/EmployeeDetails.scss';

function EmployeeDetails() {
  const [employee, setEmployee] = useState(null);
  const { empNo } = useParams();

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`${SERVER_URL}/api/v1.0/Employee/${empNo}`);
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
      <p><span>Employee Number:</span> {employee.empNo}</p>
      <p><span>Employee Name:</span> {employee.empName}</p>
      <p><span>Address:</span> {employee.empAddressLine1}, {employee.empAddressLine2}, {employee.empAddressLine3}</p>
      <p><span>Department:</span> {employee.departmentCode}</p>
      <p><span>Date of Join:</span> {employee.dateOfJoin}</p>
      <p><span>Date of Birth:</span> {employee.dateOfBirth}</p>
      <p><span>Salary:</span> {employee.basicSalary}</p>
      <p><span>Active:</span> {employee.isActive ? 'Yes' : 'No'}</p>
      <Link to="/" className="button">Back to Home</Link>

    </div>
  );
}

export default EmployeeDetails;
