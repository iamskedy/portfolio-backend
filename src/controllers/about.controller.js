const AboutService = require("../services/about.service");

exports.getAbout = async (req, res) => {
  try {
    const data = await AboutService.getAbout();
    res.status(200).json({
      success: true,
      data,
    });
  } catch (err) {
    console.error("About Controller Error:", err);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
