import { configureStore } from "@reduxjs/toolkit";
// import AuthSlice from "./AuthSlice";
// import ControlPanal from "./ControlPanal";
// import HomeSlice from "./HomeSlice";
// import ShopSlice from "./ShopSlice";
import ProjectSlice from "./ProjectSlice";
export default configureStore({
  reducer: {
    ProjectSlice,
  },
});
