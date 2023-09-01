import express from "express";
import login from "../controller/login/login.js";

const loginRouter = express.Router();

loginRouter.post("/", login);

export default loginRouter;