const express = require("express");
const router = express.Router();

const VolunteerForm = require("../Models/VolunteerForm");
const adminAuth = require("../middleware/adminAuth");

// =====================================================
// POST - SUBMIT VOLUNTEER APPLICATION
// PUBLIC
// =====================================================

router.post("/", async (req, res) => {
  try {
    console.log(
      "========== VOLUNTEER DATA RECEIVED =========="
    );

    const {
      fullName,
      parentName,
      dateOfBirth,
      gender,
      nationality,
      mobile,
      alternateMobile,
      email,
      address,
      city,
      state,
      pinCode,
      aadhaarNumber,
      qualification,
      occupation,
      organization,
      skills,
      reasonToJoin,
      availableDays,
      availableTime,
      emergencyName,
      emergencyRelation,
      emergencyMobile,
      declaration,
    } = req.body;

    console.log(req.body);

    // =================================================
    // REQUIRED FIELD VALIDATION
    // =================================================

    if (
      !fullName ||
      !email ||
      !mobile ||
      !address ||
      !gender
    ) {
      return res.status(400).json({
        message:
          "Please fill all required fields.",
      });
    }

    // =================================================
    // DECLARATION VALIDATION
    // =================================================

    if (declaration !== true) {
      return res.status(400).json({
        message:
          "Please confirm the declaration before submitting.",
      });
    }

    // =================================================
    // EMAIL VALIDATION
    // =================================================

   const emailRegex =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message:
          "Please enter a valid email address.",
      });
    }

    // =================================================
    // MOBILE VALIDATION
    // =================================================

    const mobileRegex = /^[0-9]{10}$/;

    if (!mobileRegex.test(mobile)) {
      return res.status(400).json({
        message:
          "Please enter a valid 10-digit mobile number.",
      });
    }

    // =================================================
    // ALTERNATE MOBILE VALIDATION
    // =================================================

    if (
      alternateMobile &&
      !mobileRegex.test(alternateMobile)
    ) {
      return res.status(400).json({
        message:
          "Please enter a valid alternate mobile number.",
      });
    }

    // =================================================
    // PIN CODE VALIDATION
    // =================================================

    if (
      pinCode &&
      !/^[0-9]{6}$/.test(pinCode)
    ) {
      return res.status(400).json({
        message:
          "Please enter a valid 6-digit PIN code.",
      });
    }

    // =================================================
    // EMERGENCY MOBILE VALIDATION
    // =================================================

    if (
      emergencyMobile &&
      !mobileRegex.test(emergencyMobile)
    ) {
      return res.status(400).json({
        message:
          "Please enter a valid emergency mobile number.",
      });
    }

    // =================================================
    // CREATE VOLUNTEER
    // =================================================

    const newEntry = new VolunteerForm({
      fullName: fullName.trim(),
      parentName,
      dateOfBirth,
      gender,
      nationality,
      mobile: mobile.trim(),
      alternateMobile,
      email: email.trim().toLowerCase(),
      address,
      city,
      state,
      pinCode,
      aadhaarNumber,
      qualification,
      occupation,
      organization,
      skills,
      reasonToJoin,
      availableDays,
      availableTime,
      emergencyName,
      emergencyRelation,
      emergencyMobile,
      declaration,
    });

    // =================================================
    // SAVE TO MONGODB
    // =================================================

    const savedEntry =
      await newEntry.save();

    console.log(
      "========== SAVED TO MONGODB =========="
    );

    console.log(savedEntry);

    // =================================================
    // RESPONSE
    // =================================================

    res.status(201).json({
      message:
        "Volunteer application submitted successfully!",
      data: savedEntry,
    });

  } catch (err) {
    console.error(
      "========== MONGODB SAVE ERROR =========="
    );

    console.error(err);

    // Mongoose validation error
    if (err.name === "ValidationError") {
      return res.status(400).json({
        message:
          "Please check the submitted information.",
        error: err.message,
      });
    }

    res.status(500).json({
      message:
        "Server Error. Please try again later.",
    });
  }
});


// =====================================================
// GET - ALL VOLUNTEER APPLICATIONS
// ADMIN ONLY
// =====================================================

router.get(
  "/",
  adminAuth,
  async (req, res) => {
    try {
      console.log(
        "========== FETCHING VOLUNTEER APPLICATIONS =========="
      );

      const volunteers =
        await VolunteerForm
          .find()
          .sort({ date: -1 });

      console.log(
        "Applications found:",
        volunteers.length
      );

      res.status(200).json(volunteers);

    } catch (err) {
      console.error(
        "========== FETCH VOLUNTEERS ERROR =========="
      );

      console.error(err);

      res.status(500).json({
        message:
          "Unable to fetch volunteer applications",
      });
    }
  }
);


// =====================================================
// UPDATE - VOLUNTEER STATUS
// ADMIN ONLY
// =====================================================

router.put(
  "/:id/status",
  adminAuth,
  async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;

      console.log(
        "========== UPDATE VOLUNTEER STATUS =========="
      );

      console.log(
        "Volunteer ID:",
        id
      );

      console.log(
        "New Status:",
        status
      );

      // =================================================
      // ALLOWED STATUSES
      // =================================================

      const allowedStatuses = [
        "Pending",
        "Approved",
        "Rejected",
      ];

      if (
        !allowedStatuses.includes(status)
      ) {
        return res.status(400).json({
          message:
            "Invalid status. Use Pending, Approved, or Rejected.",
        });
      }

      // =================================================
      // UPDATE VOLUNTEER
      // =================================================

      const volunteer =
        await VolunteerForm.findByIdAndUpdate(
          id,
          { status },
          {
            new: true,
            runValidators: true,
          }
        );

      // =================================================
      // NOT FOUND
      // =================================================

      if (!volunteer) {
        return res.status(404).json({
          message:
            "Volunteer application not found.",
        });
      }

      console.log(
        "Status updated successfully:",
        volunteer.status
      );

      res.status(200).json({
        message:
          `Application ${status.toLowerCase()} successfully.`,
        data: volunteer,
      });

    } catch (err) {
      console.error(
        "========== UPDATE STATUS ERROR =========="
      );

      console.error(err);

      res.status(500).json({
        message:
          "Unable to update application status.",
      });
    }
  }
);


// =====================================================
// DELETE - VOLUNTEER APPLICATION
// ADMIN ONLY
// =====================================================

router.delete(
  "/:id",
  adminAuth,
  async (req, res) => {
    try {
      const { id } = req.params;

      console.log(
        "========== DELETE VOLUNTEER =========="
      );

      console.log(
        "Volunteer ID:",
        id
      );

      // =================================================
      // FIND AND DELETE
      // =================================================

      const volunteer =
        await VolunteerForm.findByIdAndDelete(id);

      // =================================================
      // NOT FOUND
      // =================================================

      if (!volunteer) {
        return res.status(404).json({
          message:
            "Volunteer application not found.",
        });
      }

      console.log(
        "Deleted volunteer:",
        volunteer.fullName
      );

      // =================================================
      // RESPONSE
      // =================================================

      res.status(200).json({
        message:
          "Volunteer application deleted successfully.",
      });

    } catch (err) {
      console.error(
        "========== DELETE VOLUNTEER ERROR =========="
      );

      console.error(err);

      res.status(500).json({
        message:
          "Unable to delete volunteer application.",
      });
    }
  }
);


// =====================================================
// EXPORT ROUTER
// =====================================================

module.exports = router;