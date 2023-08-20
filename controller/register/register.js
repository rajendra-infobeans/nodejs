
import User from '../../model/user.js';
export const register = async (req, res, next) => {
    const { username, password } = req.body;
    const newUser = new User({ firstname, lastname, email, password});
    // Save user to databases.
    await newUser.save();
    res.status(201).json({'message' : 'User registered successfully!'});
}
