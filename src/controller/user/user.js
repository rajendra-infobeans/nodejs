const path = require('path');
const User = require('../../model/user.js');
const rootDir = require('../../../rootPath.js')

exports.getUser = async (req, res, next) => {
  const user = await User.findOne({ _id: req.tokenDetails._id });
  return res.status(200).json({ data: user });
};

exports.updateUser = async (req, res, next) => {
  const filter = { _id: req.tokenDetails._id };
  const fieldsToUpdate = {
    $set: {
      ...req.body,
    },
  };
  const result = await User.updateOne(filter, fieldsToUpdate);
  if (result) {
    return res
      .status(200)
      .json({ data: result, message: "User updated successfully!" });
  }
  return res.status(401).json({ data: {}, message: "Something went wrong!" });
};

exports.uploadUserImage = (req, res, next) => {
  const files = req.files;
  Object.keys(files).forEach((key) => {
    const filePath = path.join(rootDir, "public/files", files[key].name);
    files[key].mv(filePath, (err) => {
      if (err)
        return res.status(500).json({ status: "error", message: err.message });
    });
  });
  return res.status(200).json({ status: "success", message: "User profile updated successfully!" });
};
