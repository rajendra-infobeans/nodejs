import express from "express";
import { getUser } from "../controller/user/user.js";
import authMiddleware from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.get('/', authMiddleware, getUser);

export default userRouter;