const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI) // no options needed for latest Mongoose
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Routes
const volunteerFormRoute = require("./Routes/volunteerForm");
app.use("/api/volunteer", volunteerFormRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));