const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const dotenv = require('dotenv');
dotenv.config();


const signup = async(req, res) => {
    const {username, password, userType} = req.body;
    try {
        // checking whether the user is already signup or not
        const existingUser = await User.findOne({username});
        if(existingUser)
            {
                return res.status(400).json({message: 'User Already exists'});
            }

            const hashedpassword = await bcrypt.hash(password, 10);
            const newUser = new User({username, password: hashedpassword, userType});
            await newUser.save();

            res.status(201).json({message:`User Created Successfully`})
    } catch (error) {
        res.status(500).json({message:'Server Error', error});
    }
};

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });  // checking whether the user is already registered or not
        if (!user) {
            return res.status(401).json({ message: 'User not found !' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Either username or password is incorrect !' });
        }

        const accessToken = jwt.sign({ username: user.username, userType: user.userType }, process.env.SECRET_KEY);
        res.json({ accessToken });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

module.exports = { signup, login };

