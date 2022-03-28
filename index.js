// Importing the express module
const express = require('express');
const app = express();
const PORT = 3000;

const tasksRoutes = require('./src/router/tasks');

// Middleware
app.use(express.json());

const routesArr = {
  "tasks": "/api/v1/tasks"
}

app.get('/', (req, res) => {
  res.send(routesArr)
});

app.use('/api/v1/tasks', tasksRoutes);

// Listening to the port
app.listen(PORT, function(err){
  if (err) console.log(err);
  console.log(`Server listening on port ${PORT}...`);
});