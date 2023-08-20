import express from 'express';

const authRouter = express.Router();

authRouter.post('/login', (request, response) =>{
    console.log('Login request called');
});
authRouter.post('/register', (request, response)=> {
    console.log('Register request called');
});
