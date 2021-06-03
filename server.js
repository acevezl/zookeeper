const express = require('express');
const app = express();

const fs = require('fs');
const path = require('path');

const {animals} = require('./data/animals');
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set local explicit routes for front-end files
app.use(express.static('public'));

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, ()=> {
    console.log(`API server now on port ${PORT}`);
});

