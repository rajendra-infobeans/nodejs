const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');

// Importing routes:
const studentRoutes = require('./src/routes/student.js');
const registerRouter = require('./src/routes/register.js');
const loginRouter = require('./src/routes/login.js');
const userRouter = require('./src/routes/user.js');

// Creating express application
const app = express();
// Loading Environment variables
require('dotenv').config();
console.log('process.env.AWS_ACCESS_KEYTT', process.env.AWS_ACCESS_KEY);
// Add middleware for incoming request for json payload
app.use(bodyParser.json({ limit: '20mb', extended: true }));

// Add middleware for incoming request for urlencoded payload
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }));

// Allow incoming requests from different origins
app.use(cors());
app.options('*', cors());

// Files payload middleware.
app.use(fileUpload({ createParentPath: true }));

// Index routes
app.get('/', (req, res) => {
  res.send('Invalid endpoint');
});

// For register routes
app.use('/register', registerRouter);

// For login routes:
app.use('/login', loginRouter);

// For user routes:
app.use('/user', userRouter);

// For student middleware routes.
app.use('/students', studentRoutes);

// Select server port to run application.
const PORT = process.env.PORT || 5000;

// MongoDB connection URL:
const CONNECTION_URL =
  'mongodb+srv://rajendrarathod:' +
  encodeURIComponent('Ra@#$2023') +
  '@cluster0.ik5piaw.mongodb.net/?retryWrites=true&w=majority';

// Mongoose connection establish.
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log('MongoDB connection established and application running on port: ' + PORT);
    });
  })
  .catch((error) => console.log('MongoDB error', error.message));
