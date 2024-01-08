const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({
    profile: {
        type: String,
        required: false
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Users = mongoose.model('Users', UsersSchema);

module.exports = Users