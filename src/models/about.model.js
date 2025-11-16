const mongoose = require("mongoose");

const AboutSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      required: true,
      trim: true,
    },
    shortBio: {
      type: String,
      required: true,
    },
    longBio: {
      type: String,
    },
    skills: {
      type: [String],
      default: [],
    },
    profileImage: {
      type: String,
    },
    resumeUrl: {
      type: String,
    },

    github: {
      type: String,
      trim: true,
    },
    linkedin: {
      type: String,
      trim: true,
    },
    instagram: {
      type: String,
      trim: true,
    },
    medium: {
      type: String,
      trim: true,
    },
    youtube: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("About", AboutSchema);
