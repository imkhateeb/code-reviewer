const { default: axios } = require("axios");

const getUserData = async (req, res) => {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(400).json({
      success: false,
      message: "Authorization token is required",
      data: null,
      error: null,
    });
  }

  try {
    const { data } = await axios.get("https://api.github.com/user", {
      headers: {
        Authorization: authToken,
      },
    });
    res.status(200).json({
      success: true,
      message: "User data fetched successfully",
      data: data,
      error: null,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to get user data",
      data: null,
      error: error.message,
    });
  }
};

module.exports = getUserData;
