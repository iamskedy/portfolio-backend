const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    message: { type: String },
    purpose: { type: String, default: "resume-download" }
  },
  { timestamps: true }
);

export default mongoose.model('Contact', contactSchema);
