const mongoose = require('mongoose')
const { isEmail} = require('validator')

const UsersSchema = new mongoose.Schema({
    profile: {
        type: String,
        required: false
    },
    firstname: {
        type: String,
        required: [true, 'First name is required.']
    },
    lastname: {
        type: String,
        required: [true, 'Last name is required.']
    },
    username: {
        type: String,
        unique: true,
        required: [true, 'Username is required!']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Please input a valid email address!'],
        validate: [isEmail, 'Please be sure that the email is valid.']
    }
}, {
    timestamps: true
});

const Users = mongoose.model('Users', UsersSchema);

module.exports = Users