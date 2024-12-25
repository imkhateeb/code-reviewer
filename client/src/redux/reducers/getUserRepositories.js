import { createAsyncThunk } from "@reduxjs/toolkit";
import { BACKEND_URL } from "../../config/config";
import axios from "axios";
import errorToast from "../../components/shared/toasters/error-toast";
import successToast from "../../components/shared/toasters/success-toast";

const getUserRepositories = createAsyncThunk(
  "repos/getUserRepositories",
  async () => {
    const userGithubData = JSON.parse(localStorage.getItem("github_user_data"));
    const url = `${BACKEND_URL}/users/repository?userId=${userGithubData?.login}`;
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("github_user_token")}`,
      },
    };

    try {
      const { data } = await axios.get(url, config);
      if (data?.success) {
        successToast(`${data?.data?.length} repositories fetched successfully`);
        return data?.data;
      }
    } catch (error) {
      console.log(error);
      errorToast(error?.response?.data?.message || "Something went wrong");
    }
  }
);

export default getUserRepositories;
