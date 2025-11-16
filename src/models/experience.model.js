const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema(
  {
    company: { type: String, required: true },
    role: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date }, // null = present job
    description: { type: String, required: true },
    skills: [{ type: String }]
  },
  { timestamps: true }
);

export default mongoose.model('Experience', experienceSchema);
