import express, { request } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload';

// Importing routes:
import studentRoutes from './src/routes/student.js';
import registerRouter from './src/routes/register.js';
import loginRouter from './src/routes/login.js';
import userRouter from './src/routes/user.js';

// Creating express application
const app = express();
// Addind middleware for incoming request for json payload
app.use(bodyParser.json({limit:'20mb', extended:true}));

// Adding middleware for incoming request for urlencoded payload
app.use(bodyParser.urlencoded({limit:'20mb', extended:true}));

// Allow incoming request from different origin
app.use(cors());
app.options('*', cors());

// Files payload middleware.
app.use(fileUpload({createParentPath: true}));

// Index routues
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

