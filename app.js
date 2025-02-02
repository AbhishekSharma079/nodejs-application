

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, Abhishek!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
