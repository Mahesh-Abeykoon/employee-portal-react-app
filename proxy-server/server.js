const express = require('express');
const cors = require('cors');
const axios = require('axios');
const https = require('https');

const app = express();
const PORT = 3001;
app.use(cors());
app.use(express.json()); 

const axiosInstance = axios.create({
  httpsAgent: new https.Agent({ rejectUnauthorized: false }) // Ignore SSL certificate verification
});

const baseURL = 'http://examination.24x7retail.com/api/v1.0';
const apiToken = '?D(G+KbPeSgVkYp3s6v9y$B&E)H@McQf';
const headers = {
  'apiToken': apiToken,
  'Accept': 'application/json',
};

app.get('/api/v1.0/Employees', async (req, res) => {
  try {
    const response = await axiosInstance.get(`${baseURL}/Employees`, { headers });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching employees:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/v1.0/Employee/:empNo', async (req, res) => {
  const { empNo } = req.params;
  try {
    const response = await axiosInstance.get(`${baseURL}/Employee/${empNo}`, { headers });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching employee details:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/v1.0/Employee', async (req, res) => {
  try {
    const response = await axiosInstance.post(`${baseURL}/Employee`, req.body, { headers });
    res.json(response.data);
  } catch (error) {
    console.error('Error adding employee:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.put('/api/v1.0/Employee', async (req, res) => {
  const { empNo } = req.params;
  try {
    const response = await axiosInstance.put(`${baseURL}/Employee`, req.body, { headers });
    res.json(response.data);
  } catch (error) {
    console.error('Error updating employee:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.delete('/api/v1.0/Employee/:empNo', async (req, res) => {
  const { empNo } = req.params;
  try {
    const response = await axiosInstance.delete(`${baseURL}/Employee/${empNo}`, { headers });
    res.json(response.data);
  } catch (error) {
    console.error('Error deleting employee:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
