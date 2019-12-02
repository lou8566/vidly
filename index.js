const Joi = require("joi");
Joi.objectId = require("joi-objectid")(joi);
const movies = require("./routes/movies");
const genres = require("./routes/genres");
const customers = require("./routes/customers");
const rentals = require("./routes/rentals");
const express = require("express");
const app = express();
const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost/vidly")
.then(() => console.log("Connected to MongoDb Vidly..."))
.catch(err => console.error("Could not connect to mongoDb:", err));


app.use(express.json());
app.use("/api/movies", movies);
app.use("/api/genres", genres);
app.use("/api/customers", customers);
app.use("/api/rentals", rentals);

const port = process.env.PORT || 3000;
app.listen(port,() => console.log(`Listing on port ${port}....`));