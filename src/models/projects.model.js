const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    
    category: {
      type: String,
      enum: ["Major", "Mini", "AI Project", "AWS Project", "Certification"],
      required: true
    },

    description: { type: String, required: true },
    problemStatement: { type: String },
    hld: { type: String },
    lld: { type: String },
    techStack: { type: [String], default: [] },
    whyTechStack: { type: String },

    status: { type: String, enum: ["Ongoing", "Completed"], default: "Completed" },

    links: {
      live: { type: String },
      github: { type: String },
      youtube: { type: String },
      linkedin: { type: String },
      instagram: { type: String },
      medium: { type: String }
    },

    images: { type: [String], default: [] }, 
    challenges: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Project', projectSchema);
