const mongoose = require("mongoose");

const ResumeSchema = new mongoose.Schema(
  {
    url: {
      type: String, // S3 URL or cloud storage URL
      required: true,
    },
    fileName: {
      type: String,
      required: true,
    },
    fileSize: {
      type: Number, 
      required: true,
    },
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false, 
    },
    isActive: {
      type: Boolean,
      default: true, 
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Resume", ResumeSchema);
