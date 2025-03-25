const userService = require('./userService');

exports.registerUser = async (req, res) => {
    try {
        const response = await userService.registerUser(req.body);
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.loginUser = async (req, res) => {
    try {
        const response = await userService.loginUser(req.body);
        res.json(response);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getUserProfile = async (req, res) => {
    try {
        const user = await userService.getUserProfile(req.user.userId);
        res.json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
