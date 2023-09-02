import path from "path";
import User from "../../model/user.js";
import "../../../rootPath.js";

export const getUser = async (req, res, next) => {
  const user = await User.findOne({ _id: req.tokenDetails._id });
  return res.status(200).json({ data: user });
};

export const updateUser = async (req, res, next) => {
  // const user = await User.findOne({_id: req.tokenDetails._id});
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

export const uploadUserImage = (req, res, next) => {
  const __dirname = global.rootDir;

  const files = req.files;
  Object.keys(files).forEach((key) => {
    const filePath = path.join(__dirname, "public/files", files[key].name);
    files[key].mv(filePath, (err) => {
      if (err)
        return res.status(500).json({ status: "error", message: err.message });
    });
  });
  return res.status(200).json({ status: "logged", message: "logged" });
};
