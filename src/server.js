const express = require("express");
const app = express();
app.use(express.json());

require("dotenv").config();
const connectDB = require("./config/db");
connectDB();

// Routes
app.use("/api/about", require("./routes/about.routes"));
app.use("/api/experience", require("./routes/experience.routes"));
app.use("/api/projects", require("./routes/projects.routes"));
app.use("/api/blogs", require("./routes/blogs.routes"));
app.use("/api/contact", require("./routes/contact.routes"));
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/resume", require("./routes/resume.routes"));


app.get("/", (req, res) => {
  res.send("Backend is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
