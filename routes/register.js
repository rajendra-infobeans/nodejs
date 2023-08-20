
import express from 'express';
import { register } from '../controller/register/register.js';

const registerRouter = express.Router();

registerRouter.post('/', register);

export default registerRouter;

