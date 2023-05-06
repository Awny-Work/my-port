import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "@/firebase";

import { collection, addDoc, getDocs } from "firebase/firestore";

// import axios from "axios";

// // getClients
// export const getClients = createAsyncThunk(
//   "Home/getClients",
//   async (_, thunkAPI) => {
//     const { rejectWithValue } = thunkAPI;
//     try {
//       const data = await axios
//         .get(`${Url}/rest/test.product/getClients`)
//         .then((res) => res.data);
//       // console.log(data);
//       return data;
//     } catch (err) {
//       return rejectWithValue(err.message);
//     }
//   }
// );

const ProjectSlice = createSlice({
  name: "Home",
  initialState: {
    isLoading: false,
    error: null,
    Projects: [],
    TeamProjects: [],
  },
  reducers: {
    GetProjects: (state, action) => {
      // console.log(action.payload);
      state.Projects = action.payload;
    },
    GetTeamProjects: (state, action) => {
      // console.log(action.payload);
      state.TeamProjects = action.payload;
    },
  },
  // extraReducers: {
  //   // ClientsArr
  //   [getClients.fulfilled]: (state, action) => {
  //     state.ClientsArr = action.payload.data;
  //     // console.log(action);
  //   },
  // },
});
export const { GetProjects, GetTeamProjects } = ProjectSlice.actions;

export default ProjectSlice.reducer;
