const BlogService = require("../services/blogs.service");

exports.getAll = async (req, res) => {
  try {
    const data = await BlogService.getAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getOne = async (req, res) => {
  try {
    const data = await BlogService.getOne(req.params.id);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.create = async (req, res) => {
  try {
    console.log("BODY RECEIVED:", req.body);  

    const about = await BlogService.create(req.body);
    return res.status(201).json(about);
  } catch (err) {
    console.error("ABOUT CREATE ERROR:", err); 
    return res.status(500).json({ message: "Server error" });
  }
};


exports.update = async (req, res) => {
  try {
    const data = await BlogService.update(req.params.id, req.body);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.remove = async (req, res) => {
  try {
    const data = await BlogService.remove(req.params.id);
    res.json({ message: "Deleted", data });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
