import express from "express";
import { getUser, updateUser, uploadUserImage } from "../controller/user/user.js";
import authMiddleware from "../middleware/auth.js";
import {
  fileSizeLimiter,
  filesExtensionLimiter,
  filesPayloadExit,
} from "../middleware/file.js";

const userRouter = express.Router();
userRouter.use(authMiddleware);
userRouter.get("/", getUser);
userRouter.post("/", updateUser);
userRouter.post(
  "/ImageUpload",
  filesPayloadExit,
  filesExtensionLimiter(['.png', '.jpg', '.jpeg']),
  fileSizeLimiter,
  uploadUserImage
);

export default userRouter;
