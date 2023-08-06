import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

// const Url = "https://news.etihaad-eg.com/api";
// https://news.etihaad-eg.com/api

export const getSearch = createAsyncThunk(
  "Category/getSearch",
  async (resD, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .get(`${process.env.customKey}/filter`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "X-localization": Cookies.get("MIgLanSymbol")
              ? Cookies.get("MIgLanSymbol")
              : "Ar",
          },
          params: {
            search: resD,
          },
        })
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const CategorySlice = createSlice({
  name: "Category",
  initialState: {
    isLoading: false,
    error: null,
    SearchArr: null,
  },
  // reducers: {
  //   GetProjects: (state, action) => {
  //     // console.log(action.payload);
  //     state.Projects = action.payload;
  //   },
  // },
  extraReducers: {
    //   // ClientsArr
    [getSearch.fulfilled]: (state, action) => {
      state.SearchArr = action.payload.data;
      // console.log(action);
    },
    // getMenu
  },
});
// export const { GetProjects } = CategorySlice.actions;

export default CategorySlice.reducer;
