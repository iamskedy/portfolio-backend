const About = require("../models/experience.model");

exports.getAll = async () => {
  return await About.find();
};

exports.getOne = async (id) => {
  return await About.findById(id);
};

exports.create = async (data) => {
  return await About.create(data);
};

exports.update = async (id, data) => {
  return await About.findByIdAndUpdate(id, data, { new: true });
};

exports.remove = async (id) => {
  return await About.findByIdAndDelete(id);
};
