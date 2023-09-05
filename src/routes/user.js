const express = require('express');
const {
  getUser,
  updateUser,
  uploadUserImage
} = require('../controller/user/user.js');
const authMiddleware = require('../middleware/auth.js');
const {
  fileSizeLimiter,
  filesExtensionLimiter,
  filesPayloadExit
} = require('../middleware/file.js');

const userRouter = express.Router();
userRouter.use(authMiddleware);
userRouter.get('/', getUser);
userRouter.post('/', updateUser);
userRouter.post(
  '/ImageUpload',
  filesPayloadExit,
  filesExtensionLimiter(['.png', '.jpg', '.jpeg']),
  fileSizeLimiter,
  uploadUserImage
);

module.exports = userRouter;
