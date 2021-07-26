// Dependencies
const express = require('express');

// Point Server to the route files
const apiRoutes = require('./route/api');
const htmlRoutes = require('./route/html');

// Create an express server
const app = express();

// Set PORT
const PORT = process.env.PORT || 3001;

// Parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

// Parse incoming JSON data
app.use(express.json());


app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Listener
app.listen(PORT, () => {
    console.log(`API server is ready on port ${PORT}!`);
});

app.get("/", function(req, res) {
    res.json(path.join(__dirname, "public/index.html"));
});