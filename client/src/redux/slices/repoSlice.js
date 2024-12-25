import { createSlice } from "@reduxjs/toolkit";
import getUserRepositories from "../reducers/getUserRepositories";
const initialState = {
  repositories: [],
  repoLoading: false,
  repoError: null,
};

const repoSlice = createSlice({
  name: "repo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserRepositories.pending, (state) => {
      state.repoLoading = true;
      state.repoError = null;
    });
    builder.addCase(getUserRepositories.fulfilled, (state, action) => {
      state.repositories = action.payload;
      state.repoLoading = false;
    });
    builder.addCase(getUserRepositories.rejected, (state, action) => {
      state.repoLoading = false;
      state.repoError = action.error.message;
    });
  },
});

export default repoSlice.reducer;
