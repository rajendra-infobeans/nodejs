const User = require('../../model/user.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const query = { email: email };
  const userDoc = await User.findOne(query);
  const payload = {
    _id: userDoc._id,
    email: userDoc.email,
    firstname: userDoc.firstname,
    lastname: userDoc.lastname,
    // Any other relevant claims you want to include
  };
  const isAuthenticated = await bcrypt.compare(password, userDoc.password);
  if (isAuthenticated) {
    const secretKey = 'rajaryan';
    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
    res.status(200).json({ token: token, message: 'User authenticated successfully!' });
  } else {
    res.status(400).json({ message: 'username or password is incorrect' });
  }
};

module.exports = login;
