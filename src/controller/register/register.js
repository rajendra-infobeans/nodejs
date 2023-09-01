import User from "../../model/user.js";
import bcrypt from "bcrypt";
export const register = async (req, res, next) => {
  try {
    const { email, password, firstname, lastname } = req.body;
    const userExit = await User.findOne({email: email});
    if (userExit) {
      return res.status(400).json({'message': 'User already exist with us, please try sign in!'});
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const newUser = new User({ email, password:hashPassword,firstname,  lastname });
    // Save user to databases.
    await newUser.save();
    res.status(201).json({ message: `User registered successfully!` });
  } catch (error) {
    res.status(400).json({'message': error.message})
  }
};
