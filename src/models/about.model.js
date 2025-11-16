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
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("About", AboutSchema);
