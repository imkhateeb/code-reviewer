import { createSlice } from "@reduxjs/toolkit";
import getUserData from "../reducers/getUserData";

const initialState = {
  user: null,
  userLoading: false,
  userError: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserData.pending, (state) => {
      state.userLoading = true;
      state.userError = null;
    });
    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.user = action.payload;
      state.userLoading = false;
    });
    builder.addCase(getUserData.rejected, (state, action) => {
      state.userLoading = false;
      state.userError = action.error.message;
    });
  },
});

export default userSlice.reducer;
