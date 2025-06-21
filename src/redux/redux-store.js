import { configureStore } from "@reduxjs/toolkit";
import reducerMessagePage from "./reducerMessagePage";
import reducerProfilePage from "./reducerProfilePage";
import reducerSidebar from "./reducerSidebar";

export default configureStore({
  reducer: {
    MessagePage: reducerMessagePage,
    ProfilePage: reducerProfilePage,
    sidebar: reducerSidebar,
  },
});
