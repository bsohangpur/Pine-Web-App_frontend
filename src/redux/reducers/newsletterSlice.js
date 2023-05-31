import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import link from "./base_link";
import axios from "axios";

const url = `${link}/data/newsletters/`;
// const url = "http://127.0.0.1:8000/api/data/newsletters/";

export const sendNewsletter = createAsyncThunk(
  "newsletter/post",
  async (data, thunkAPI) => {
    const response = await axios.post(url, data);
    return response.status;
  }
);

const newsletterSlice = createSlice({
  name: "newsletter",
  initialState: {
    status: "",
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendNewsletter.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(sendNewsletter.fulfilled, (state, actions) => {
      state.status = actions.payload;
    });
    builder.addCase(sendNewsletter.rejected, (state, actions) => {
      state.error = actions.error.message;
    });
  },
});

export default newsletterSlice.reducer;
