const express = require("express");
const app = express();
app.use(express.json());

require("dotenv").config();
const connectDB = require("./config/db");
connectDB();

// Routes
app.use("/api/about", require("./routes/about.routes"));

app.get("/", (req, res) => {
  res.send("Backend is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
