
import express from 'express';
import { register } from '../controller/register/register.js';
import {registerValidation} from '../middleware/JoiValidation.js';

const registerRouter = express.Router();

registerRouter.post('/', registerValidation, register);

export default registerRouter;

