## Employee Management React App
### The application efficiently manages employee details by interacting with provided APIs. It features a responsive design and utilizes modern web development techniques for a seamless user experience. 

### The API endpoints for accessing employee and department data are provided through Swagger, with the base URL set to 

```jsx harmony
http://examination.24x7retail.com.
```

 ```jsx harmony
Application Functionalities
```
![Site preview](./employee-portal.gif)

```jsx harmony
Custom Data Validations
```
![Site preview](/form_validations.gif)

### Features

```console
 Add New Employee: Easily add new employees to the system.
 Edit Existing Employees: Update details of existing employees seamlessly.
 Delete Employees: Remove employees from the database with a simple click.
 Search Functionality: Quickly search for specific employees using search functionality.
 Display Employee List: View a comprehensive list of all existing employees.
```

### The technologies used in the project include:


#### Frontend:
```console
React.js
Sass for styling
React Router for client-side routing
```
#### Backend (Proxy Server):
```console
Express.js
Axios for making HTTP requests
CORS for enabling cross-origin resource sharing
```

### Why Proxy Server?
```console
CORS (Cross-Origin Resource Sharing) Issue
```
### When making requests from a client-side application (like a React app) to a different domain, CORS policies enforced by browsers restrict these requests. This can cause errors like "Access to XMLHttpRequest has been blocked" or "No 'Access-Control-Allow-Origin' header".

```console
 API Security
```
#### Directly exposing sensitive APIs to the client-side poses security risks, such as exposing API keys or endpoints. A proxy server acts as a middleman, shielding the frontend from direct communication with the API and ensuring secure data transmission.

```console
 Handling HTTP Requests
```
#### The proxy server serves as an intermediary for handling HTTP requests. It can preprocess requests, add headers, modify responses, or handle authentication, providing flexibility and control over how data is fetched and transmitted.

### Implementation in Node Server

```jsx harmony
// Define API endpoints
const baseURL = 'DEFINE_BASE_URL';
const apiToken = 'DEFINE_THE_API_KEY';
const headers = {
  'apiToken': apiToken,
  'Accept': 'application/json',
};

// Implement API routes
// Example: GET all employees
app.get('/api/v1.0/Employees', async (req, res) => {
  try {
    const response = await axiosInstance.get(`${baseURL}/Employees`, { headers });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching employees:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});
// Add more API routes...
```
```jsx harmony
Data Creation
```
![Site preview](/add_employee.png)

```jsx harmony
Data Searching
```
![Site preview](/find.png)

```jsx harmony
Data Reading on Home Page
```
![Site preview](/home_bottom.png)
![Site preview](/home.png)

```jsx harmony
Data Reading 
```
![Site preview](/read-one.png)

```jsx harmony
Data Updating
```
![Site preview](/update.png)

![Site preview](/update_2.png)
