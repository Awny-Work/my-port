import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
const Url = "https://news.etihaad-eg.com/api";

export const getMostVisited = createAsyncThunk(
  "Tool/getMostVisited",
  async (resD, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .get(`${process.env.customKey}/articles/top`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "X-localization": resD ? resD : Cookies.get("MIgLanSymbol"),
          },
        })
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
export const PostSubscribe = createAsyncThunk(
  "Tool/PostSubscribe",
  async (resD, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .post(
          `${process.env.customKey}/subscribe`,
          {
            ...resD,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "X-localization": Cookies.get("MIgLanSymbol")
                ? Cookies.get("MIgLanSymbol")
                : "Ar",
            },
          }
        )
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
export const PostContact = createAsyncThunk(
  "Tool/PostContact",
  async (resD, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .post(
          `${process.env.customKey}/contact`,
          {
            ...resD,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "X-localization": Cookies.get("MIgLanSymbol")
                ? Cookies.get("MIgLanSymbol")
                : "Ar",
            },
          }
        )
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const SubscribSlice = createSlice({
  name: "Tool",
  initialState: {
    isLoading: false,
    error: null,
    MostTop: null,
  },
  // reducers: {
  //   GetProjects: (state, action) => {
  //     // console.log(action.payload);
  //     state.Projects = action.payload;
  //   },
  // },
  extraReducers: {
    //   // ClientsArr
    [getMostVisited.fulfilled]: (state, action) => {
      state.MostTop = action.payload;
      // console.log(action);
    },
    // getMenu
  },
});
// export const { GetProjects } = SubscribSlice.actions;

export default SubscribSlice.reducer;
