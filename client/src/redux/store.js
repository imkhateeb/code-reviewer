import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import repoSlice from "./slices/repoSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    repos: repoSlice,
  },
});

export default store;
