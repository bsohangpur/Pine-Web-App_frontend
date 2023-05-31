import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import link from "./base_link";
import axios from "axios";

// const url = `${link}/form/careers/`;
const url = "http://127.0.0.1:8000/api/data/careers/";

export const sendCareer = createAsyncThunk(
  "career/post",
  async (data, thunkAPI) => {
    const response = await axios.post(url, data);
    return response.status;
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
    builder.addCase(sendCareer.fulfilled, (state, actions) => {
      state.status = actions.payload;
    });
    builder.addCase(sendCareer.rejected, (state, actions) => {
      state.error = actions.error.message;
    });
  },
});

export default careerSlice.reducer;