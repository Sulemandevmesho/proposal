const User = require('../models/user');

const createUser = async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({
      message: 'User created successfully',
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  
  try {
	      const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        error: 'Email not found',
      });
    }
    if (user.password !== password) {
      return res.status(400).json({
        error: 'Incorrect password',
      });
    }
    res.json({
      message: 'Login successful',
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};
module.exports = {createUser, loginUser}
