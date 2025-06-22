const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();

// Load environment variables
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Schemas and Models
const { Schema, model } = mongoose;

// 1. Admin Schema
const adminSchema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);
const Admin = model("Admin", adminSchema);

// 2. About Schema
const aboutSchema = new Schema(
  {
    description: { type: String, required: true },
  },
  { timestamps: true }
);
const About = model("About", aboutSchema);

// Routes
app.get("/", (req, res) => {
  res.send("Portfolio API is running");
});

// Admin Routes
app.post("/api/admin", async (req, res) => {
  try {
    const admin = new Admin(req.body);
    const savedAdmin = await admin.save();
    res.status(201).json(savedAdmin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// About Routes
app.post("/api/about", async (req, res) => {
  try {
    const about = new About(req.body);
    const savedAbout = await about.save();
    res.status(201).json(savedAbout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/api/about", async (req, res) => {
  try {
    const about = await About.findOne();
    res.status(200).json(about);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
