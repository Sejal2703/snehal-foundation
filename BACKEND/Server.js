const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// =====================================================
// MIDDLEWARE
// =====================================================

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// =====================================================
// ROUTES
// =====================================================

const volunteerFormRoute = require("./Routes/volunteerForm");
const adminRoute = require("./Routes/admin");
const contactRoute = require("./Routes/contact");

app.use("/api/volunteer", volunteerFormRoute);
app.use("/api/admin", adminRoute);
app.use("/api/contact", contactRoute);

// =====================================================
// HEALTH CHECK
// =====================================================

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Snehal Foundation API is running.",
  });
});

// =====================================================
// 404 ROUTE
// =====================================================

app.use((req, res) => {
  res.status(404).json({
    message: "API route not found.",
  });
});

// =====================================================
// GLOBAL ERROR HANDLER
// =====================================================

app.use((err, req, res, next) => {
  console.error("========== SERVER ERROR ==========");
  console.error(err);

  res.status(500).json({
    message: "Internal server error.",
  });
});

// =====================================================
// START SERVER
// =====================================================

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    // Check MongoDB URI
    if (!process.env.MONGO_URI) {
      throw new Error(
        "MONGO_URI is missing from .env file."
      );
    }

    // Check JWT secret
    if (!process.env.JWT_SECRET) {
      throw new Error(
        "JWT_SECRET is missing from .env file."
      );
    }

    // Connect MongoDB
    await mongoose.connect(
      process.env.MONGO_URI
    );

    console.log("MongoDB Connected");

    // Start server only after MongoDB connects
    app.listen(PORT, () => {
      console.log(
        `Server running on port ${PORT}`
      );
    });

  } catch (error) {
    console.error(
      "========== SERVER STARTUP ERROR =========="
    );

    console.error(error.message);

    process.exit(1);
  }
};

startServer();