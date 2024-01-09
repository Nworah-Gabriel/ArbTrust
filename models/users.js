const mongoose = require('mongoose')
const { isEmail} = require('validator')
const bcrypt = require('bcrypt')

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
    },
    password: {
        type: String
    }
}, {
    timestamps: true
});

UsersSchema.pre('save', async function (next) {
    console.log("Creating User in progress...");
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
    next();
});
UsersSchema.post('save', function (doc, next) {
    console.log("User Created successfully");
    next();
});

const Users = mongoose.model('Users', UsersSchema);

module.exports = Users