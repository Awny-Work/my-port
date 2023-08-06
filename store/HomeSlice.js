import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

const Url = "https://news.etihaad-eg.com/api";

export const getHome = createAsyncThunk("Home/getHome", async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const data = await axios
      .get(`${process.env.customKey}/home`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-localization": "ar",
        },
      })
      .then((res) => res.data);
    return data;
  } catch (err) {
    return rejectWithValue(err.message);
  }
});

export const getMenu = createAsyncThunk(
  "Home/getMenu",
  async (resD, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .get(`${process.env.customKey}/menu`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "X-localization": Cookies.get("MIgLanSymbol")
              ? Cookies.get("MIgLanSymbol")
              : resD,
          },
        })
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const getAbout = createAsyncThunk(
  "Home/getAbout",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .get(`${process.env.customKey}/about`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "X-localization": Cookies.get("MIgLanSymbol")
              ? Cookies.get("MIgLanSymbol")
              : "Ar",
          },
        })
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const HomeSlice = createSlice({
  name: "Home",
  initialState: {
    isHomeLoading: false,
    error: null,
    HomeArr: null,
    MenuArr: null,
    LangaugeArr: null,
    SliderArr: null,
    SocialArr: null,
    FooterAbout: null,
    AboutArr: null,
  },
  reducers: {
    ShowLoading: (state, action) => {
      // console.log(action.payload);
      state.isHomeLoading = true;
    },
  },
  extraReducers: {
    //   // ClientsArr
    [getHome.pending]: (state, action) => {
      state.isHomeLoading = true;
    },
    [getHome.fulfilled]: (state, action) => {
      state.HomeArr = action.payload;
      state.isHomeLoading = false;
    },
    [getHome.rejected]: (state, action) => {
      state.isHomeLoading = false;
    },
    [getAbout.pending]: (state, action) => {
      // state.isHomeLoading = true;
    },
    [getAbout.fulfilled]: (state, action) => {
      state.AboutArr = action.payload[0];
      // state.isHomeLoading = false;
    },
    [getAbout.rejected]: (state, action) => {
      // state.isHomeLoading = false;
    },
    // getMenu
    [getMenu.pending]: (state, action) => {
      // state.isHomeLoading = true;
    },
    [getMenu.fulfilled]: (state, action) => {
      state.MenuArr = action.payload.menu;
      state.LangaugeArr = action.payload.languages;
      state.SocialArr = action.payload.social_media;
      state.FooterAbout = action.payload.footer_about;
      // if (state.HomeArr) {
      //   state.isHomeLoading = false;
      // }
      // state.isHomeLoading = false;
    },
    [getMenu.rejected]: (state, action) => {
      // state.isHomeLoading = false;
    },
    // [getLogin.rejected]: (state, action) => {
    //   // state.LoginArr = action.payload.data;
    // console.log(action);
    // },
    // getAbout
    // [getAbout.pending]: (state, action) => {
    //   // state.HomeArr = action.payload.data;
    // console.log(action);
    // },
  },
});
export const { ShowLoading } = HomeSlice.actions;

export default HomeSlice.reducer;
