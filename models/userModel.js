const mongoose = require('mongoose');
const { type } = require('os');

const UserSchema = new mongoose.Schema({
    username: {
        type : String,
        required: true,
        unique: true
    },
    password: {
        type: String, 
        required: true
    },
    userType:{
        type: String, 
        default: 'user'
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;