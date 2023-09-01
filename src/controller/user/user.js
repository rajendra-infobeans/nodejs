import User from "../../model/user.js";

export const getUser = async (req, res, next) => {
  const user = await User.findOne({_id: req.tokenDetails._id});
  return res.status(200).json({ data: user });
};
