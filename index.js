// Importing the express module
const express = require('express');
const app = express();
const PORT = 3000;

const tasksRoutes = require('./src/router/tasks');
const connectDB = require('./db/connect')
require('dotenv').config()

// Middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.send({"tasks": "/api/v1/tasks"})
});

app.use('/api/v1/tasks', tasksRoutes);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    // Listening to the port
    app.listen(PORT, console.log(`Server listening on port ${PORT}...`));
  } catch (error) {
    console.log(error)
  }
}

start()