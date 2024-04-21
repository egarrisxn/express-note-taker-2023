// Set up the Express server
const express = require("express"); // import the express package
const app = express(); // create an instance of the express application
const PORT = process.env.PORT || 3001; // set the port number

// Middleware to parse incoming requests
app.use(express.urlencoded({ extended: true })); // parse urlencoded data
app.use(express.json()); // parse json data
app.use(express.static("public")); // serve static files from the public directory

// Set up API routes
require("./routes/apiRoutes")(app); // import the apiRoutes module and pass in the app object
require("./routes/htmlRoutes")(app); // import the htmlRoutes module and pass in the app object

// Start the server and listen for incoming requests
app.listen(PORT, () => {
    console.log(`The server is now available at http://localhost:${PORT} !`);
});