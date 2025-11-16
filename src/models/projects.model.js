const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true }, // Dynamic
    description: { type: String, required: true },

    problem: { type: String },
    hld: { type: String },
    lld: { type: String },
    techStack: [{ type: String }],

    whyTechStack: { type: String },

    youtubeUrl: { type: String },
    liveUrl: { type: String },
    githubUrl: { type: String },
    linkedinUrl: { type: String },
    instagramUrl: { type: String },

    image: { type: String } // stored file path or cloud URL
  },
  { timestamps: true }
);

export default mongoose.model('Project', projectSchema);
