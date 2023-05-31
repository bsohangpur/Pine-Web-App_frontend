import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import link from "./base_link";
import axios from "axios";

const url = `${link}/data/teams`;

export const fetchTeam = createAsyncThunk("team/get", async (thunkAPI) => {
  const res = await axios.get(url);
  return res.data;
});


const teamSlice = createSlice({
  name: "team",
  initialState: {
    status: "",
    isLoading: false,
    team: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTeam.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTeam.fulfilled, (state, action) => {
      state.team = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchTeam.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
  },
});

export default teamSlice.reducer;
