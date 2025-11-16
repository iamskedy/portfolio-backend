const Blog = require("../models/blogs.model");

exports.getAll = async () => {
  return await Blog.find();
};

exports.getOne = async (id) => {
  return await Blog.findById(id);
};

exports.create = async (data) => {
  return await Blog.create(data);
};

exports.update = async (id, data) => {
  return await Blog.findByIdAndUpdate(id, data, { new: true });
};

exports.remove = async (id) => {
  return await Blog.findByIdAndDelete(id);
};
