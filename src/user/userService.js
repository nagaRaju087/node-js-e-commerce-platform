const User = require('../../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerUser = async (userData) => {
    const { name, email, password, isAdmin } = userData;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error('User already exists');
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ name, email, password: hashedPassword, isAdmin });
    await newUser.save();

    return { message: 'User registered successfully' };
};

const loginUser = async ({ email, password }) => {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('Invalid credentials');
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Invalid credentials');
    }

    // Generate JWT Token
    const token = jwt.sign({ userId: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: '1h' });

    return { message: 'Login successful', token };
};

const getUserProfile = async (userId) => {
    const user = await User.findById(userId).select('-password'); // Exclude password
    if (!user) {
        throw new Error('User not found');
    }

    return user;
};

module.exports = {
    registerUser,
    loginUser,
    getUserProfile
};
