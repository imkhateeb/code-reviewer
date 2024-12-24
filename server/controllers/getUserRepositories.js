const { default: axios } = require("axios");

const getUserRepositories = async (req, res) => {
  const authToken = req.headers.authorization;
  const { userId } = req.query;

  if (!authToken) {
    return res.status(400).json({
      success: false,
      message: "Authorization token is required",
      data: null,
      error: null,
    });
  }
  if (!userId) {
    return res.status(400).json({
      success: false,
      message: "User's Github username is required",
      data: null,
      error: null,
    });
  }

  try {
    const { data } = await axios.get(
      `https://api.github.com/users/${userId}/repos`,
      {
        headers: {
          Authorization: authToken,
        },
      }
    );
    res.status(200).json({
      success: true,
      message: "User repositories fetched successfully",
      data: data,
      error: null,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to get user repositories",
      data: null,
      error: error.message,
    });
  }
};

module.exports = getUserRepositories;
