const mongoose = require("mongoose");

const volunteerFormSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    parentName: {
      type: String,
      trim: true,
    },

    dateOfBirth: {
      type: String,
    },

    gender: {
      type: String,
      required: true,
    },

    nationality: {
      type: String,
      trim: true,
    },

    mobile: {
      type: String,
      required: true,
      trim: true,
    },

    alternateMobile: {
      type: String,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
    },

    address: {
      type: String,
      required: true,
      trim: true,
    },

    city: {
      type: String,
      trim: true,
    },

    state: {
      type: String,
      trim: true,
    },

    pinCode: {
      type: String,
      trim: true,
    },

    aadhaarNumber: {
      type: String,
      trim: true,
    },

    qualification: {
      type: String,
      trim: true,
    },

    occupation: {
      type: String,
      trim: true,
    },

    organization: {
      type: String,
      trim: true,
    },

    skills: {
      type: String,
    },

    reasonToJoin: {
      type: String,
    },

    availableDays: {
      type: String,
    },

    availableTime: {
      type: String,
    },

    emergencyName: {
      type: String,
      trim: true,
    },

    emergencyRelation: {
      type: String,
      trim: true,
    },

    emergencyMobile: {
      type: String,
      trim: true,
    },

    // ================= STATUS =================

    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },

    // ================= DECLARATION =================

    declaration: {
      type: Boolean,
      required: true,
    },

    // ================= DATE =================

    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "VolunteerForm",
  volunteerFormSchema
);