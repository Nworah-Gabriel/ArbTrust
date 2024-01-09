const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Users = require('./models/users');

const app = express();
app.use(cors());

app.use(express.json());

mongoose.set("strictQuery", false)

const errorHandler = (err) => {
    console.log(err.message, err.code)

    let errors = {email: '', username: ''};

    if(err.code === 11000){
        console.log(err.code)
        errors.email = 'Email is already registered';
        return errors;
    }

    if (err.message.includes('Users validation failed')){
        Object.values(err.errors).forEach(({properties}) =>{
            errors [properties.path] = properties.message
        })
    }
    return errors;
}

app.post('/users', async (req, res) => {
    try {
        const users = await Users.create(req.body);
        res.status(200).json(users);
    } catch (error) {
        const errors = errorHandler(error)
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
