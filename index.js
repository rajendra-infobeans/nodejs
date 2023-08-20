import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

// Importing routes:
import studentRoutes from './routes/student.js';
import registerRouter from './routes/register.js';

// Creating express application
const app = express();
// Addind middleware for incoming request for json payload
app.use(bodyParser.json({limit:'20mb', extended:true}));

// Adding middleware for incoming request for urlencoded payload
app.use(bodyParser.urlencoded({limit:'20mb', extended:true}));

// Allow incoming request from different origin
app.use(cors());

// For register routes
app.use('/register', registerRouter);

// For student middleware routes.
app.use('/students', studentRoutes);


//app.options('*', cors()); //put this before your route 

// Select server port to run application.
const PORT = process.env.PORT || 5000;

// MongoDB connection url:
const CONNECTION_URL = `mongodb+srv://rajendrarathod:${encodeURIComponent('Ra@#$2023')}@cluster0.ik5piaw.mongodb.net/?retryWrites=true&w=majority`;

// Mongoos connection establish.
mongoose.connect(CONNECTION_URL,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => {
    // console.log('MongoDB connection established and application running on port');
    app.listen(PORT, () => {
        console.log('MongoDB connection established and application running on port: ' + PORT);
    })
}).catch((error) => console.log('MongoDB error', error.message));

// mongoose.set('useFindAndModify', false);

