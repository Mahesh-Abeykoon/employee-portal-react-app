import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/api/v1.0/Employees')
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.error('Error fetching employees:', error.message);
      });
  }, []);

  const navigateToDetailsPage = empNo => {
    navigate(`/employee/${empNo}`);
  };

  const navigateToEditPage = empNo => {
    navigate(`/edit/${empNo}`);
  };

  const deleteEmployee = empNo => {
    axios.delete(`http://localhost:3001/api/v1.0/Employee/${empNo}`)
      .then(response => {
        console.log('Employee deleted successfully');
        setEmployees(prevEmployees => prevEmployees.filter(employee => employee.empNo !== empNo));
      })
      .catch(error => {
        console.error('Error deleting employee:', error.message);
      });
  };

  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  const filteredEmployees = employees.filter(employee =>
    employee.empName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Employee List</h1>
      <div>
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <ul>
        {filteredEmployees.map(employee => (
          <li key={employee.empNo}>
            <div>
              <strong>Name:</strong> {employee.empName}
            </div>
            <div>
              <strong>Employee Number:</strong> {employee.empNo}
            </div>
            <div>
              <strong>Address:</strong> {employee.empAddressLine1}, {employee.empAddressLine2}, {employee.empAddressLine3}
            </div>
            <div>
              <strong>Department:</strong> {employee.departmentCode}
            </div>
            <div>
              <strong>Date of Join:</strong> {employee.dateOfJoin}
            </div>
            <button onClick={() => navigateToDetailsPage(employee.empNo)}>View</button>
            <button onClick={() => navigateToEditPage(employee.empNo)}>Edit</button>
            <button onClick={() => deleteEmployee(employee.empNo)}>Delete</button>
          </li>
        ))}
      </ul>
      <Link to="/add">Add New Employee</Link>
    </div>
  );
}

export default EmployeeList;
