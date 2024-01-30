require('dotenv').config();
const express = require('express');
const path = require('path');
const { sequelize } = require('./models');

const app = express();

app.use(express.json());


// static folder
app.use(express.static(path.join(__dirname, 'public')));

// routes 
const route = require('./routes');
route(app);

const port = process.env.PORT || 5000;

app.listen(port, async () => {
    console.log(`Serving on port .....${port}`);
    try {
        await sequelize.authenticate();
        console.log('connection has been established successfully');
    } catch (error) {
        console.error('Unable to connet to the database', error);
    }
});
