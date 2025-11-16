const About = require("../models/about.model");

exports.getAbout = async () => {
  return await About.findOne(); // or whatever logic you want
};
