import { configureStore } from "@reduxjs/toolkit";
import HomeSlice from "./HomeSlice";
import SubscribSlice from "./SubscribeSlice";
import CategorySlice from "./CategorySlice";

export default configureStore({
  reducer: {
    HomeSlice,
    SubscribSlice,
    CategorySlice,
  },
});
