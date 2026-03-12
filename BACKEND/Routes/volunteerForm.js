const express = require("express");
const router = express.Router();
const VolunteerForm = require("../Models/VolunteerForm");

// POST Volunteer Form
router.post("/", async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ message: "All required fields must be filled" });
  }

  try {
    const newEntry = new VolunteerForm({ name, email, phone, message });
    await newEntry.save();
    res.status(201).json({ message: "Volunteer form submitted successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;