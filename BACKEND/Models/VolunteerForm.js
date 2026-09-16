
const mongoose = require("mongoose");

const volunteerFormSchema = new mongoose.Schema(
  {
    // ================= PERSONAL INFORMATION =================

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
      trim: true,
    },

    nationality: {
      type: String,
      trim: true,
    },

    // ================= CONTACT INFORMATION =================

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
      lowercase: true,
    },

    // ================= ADDRESS =================

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

    // ================= EDUCATION & OCCUPATION =================

    qualification: {
      type: String,
      required: true,
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

    // ================= SKILLS & INTERESTS =================

    skills: {
      type: String,
      required: true,
      trim: true,
    },

    reasonToJoin: {
      type: String,
      required: true,
      trim: true,
    },

    // ================= VOLUNTEERING PREFERENCES =================

    availableDays: {
      type: String,
      required: true,
      trim: true,
    },

    availableTime: {
      type: String,
      required: true,
      trim: true,
    },

    // ================= EMERGENCY CONTACT =================

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

    // ================= APPLICATION STATUS =================

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

    // ================= SUBMISSION DATE =================

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

