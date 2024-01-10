const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Users = require('./models/users');
const userCookie = require('cookie-parser')
const jwt = require('jsonwebtoken')

const app = express();

app.use(cors());
app.use(express.json());
app.use(userCookie())

mongoose.set("strictQuery", false)

const errorHandler = (err) => {
    console.log(err.message, err.code)

    let errors = {email: '', username: ''};

    if (err.message.includes('Users validation failed')){
        Object.values(err.errors).forEach(({properties}) =>{
            errors [properties.path] = properties.message
        })
    }
    return errors;
}

const maxAge = 2 * 24 * 60 * 60;

AccessToken = (id) => {
    return jwt.sign({id}, 'decertify user security hashing', {
        expiresIn: maxAge
    }) 
}

app.post('/users', async (req, res) => {
    try {
        const existingUser = await Users.findOne({ email: req.body.email });
        const existingUserName = await Users.findOne({ username: req.body.username });
        
        if (existingUser) {
            const errors = { email: 'Email is already registered' };
            return res.status(400).json({ errors });
        }

        if (existingUserName) {
            const errors = { username: 'Username already exist. Please create a unique username' };
            return res.status(400).json({ errors });
        }

        const newUser = await Users.create(req.body);
        const Token = AccessToken(newUser._id)
        res.cookie('JWTAccessToken', Token, {httpOnly: true, maxAge: 1000 * 60 * 60 * 48})
        res.status(200).json(newUser._id);
    } catch (error) {
        const errors = errorHandler(error);
        res.status(400).json({ errors });
    }
});
app.put('/user/:id', async (req, res) => {
    try {
        const Id = req.params.id;
        const users = await Users.findById(Id);
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});
app.delete('/user/:id', async (req, res) => {
    try {
        const Id = req.params.id;
        const deletedUser = await Users.findByIdAndDelete(Id);
        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

const port = process.env.PORT || 2024

mongoose.connect('mongodb+srv://admin:young365@decertifyapi.t4juk70.mongodb.net/Node-API?retryWrites=true&w=majority', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
}).then(() => {
    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});
