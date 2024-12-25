import { createAsyncThunk } from "@reduxjs/toolkit";
import { BACKEND_URL } from "../../config/config";
import axios from "axios";
import errorToast from "../../components/shared/toasters/error-toast";

const getUserData = createAsyncThunk("user/getUserData", async () => {
  const url = `${BACKEND_URL}/users`;
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("github_user_token")}`,
    },
  };

  try {
    const { data } = await axios.get(url, config);
    if (data?.success) {
      localStorage.setItem("github_user_data", JSON.stringify(data?.data));
      return data?.data;
    }
  } catch (error) {
    console.log(error);
    errorToast(error?.response?.data?.message || "Something went wrong");
  }
});

export default getUserData;
