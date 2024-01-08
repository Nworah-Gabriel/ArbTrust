const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Users = require('./models/users');

const app = express();
app.use(cors());

app.use(express.json());

mongoose.set("strictQuery", false)

app.post('/users', async (req, res) => {
    try {
        const users = await Users.create(req.body);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
app.put('/user/:id', async (req, res) => {
    try {
        const users = await Users.findbyId(id);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
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
