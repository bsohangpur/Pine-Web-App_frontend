import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import link from "./base_link";
import axios from "axios";

const url = `${link}/data/careers/`;


export const sendCareer = createAsyncThunk(
  "career/post",
  async (data, thunkAPI) => {
    const response = await axios.post(url, data);
    return response;
  }
);

const careerSlice = createSlice({
  name: "career",
  initialState: {
    status: "",
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendCareer.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(sendCareer.fulfilled, (state, action) => {
      state.status = action.payload;
      state.isLoading = false;
    });
    builder.addCase(sendCareer.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
  },
});

export default careerSlice.reducer;
