const { default: axios } = require("axios");
const { GITHUB_CLIENT_ID, GITHUB_SECRET_KEY } = require("../config/config");

const getUserToken = async (req, res) => {
  const url = `https://github.com/login/oauth/access_token?client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_SECRET_KEY}&code=${req.query.code}`;

  if (!req.query.code) {
    return res.status(400).json({
      success: false,
      message: "Authorization code is required",
      data: null,
      error: null,
    });
  }

  try {
    const { data } = await axios.post(url, null, {
      headers: {
        accept: "application/json",
      },
    });
    if (data?.error) {
      return res.status(400).json({
        success: false,
        message: "The code passed is incorrect or expired.",
        data: null,
        error: {
          error: "bad_verification_code",
          error_description: "The code passed is incorrect or expired.",
          error_uri:
            "https://docs.github.com/apps/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors/#bad-verification-code",
        },
      });
    }
    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      data: data,
      error: null,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to get user token",
      data: null,
      error: error.message,
    });
  }
};

module.exports = getUserToken;
