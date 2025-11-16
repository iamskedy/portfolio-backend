const User = require("../models/User");

exports.register = async (data) => {
  return await User.create(data);
};

exports.login = async (email) => {
  return await User.findOne({ email });
};
