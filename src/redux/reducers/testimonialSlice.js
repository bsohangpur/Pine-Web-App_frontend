import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import link from "./base_link";
import axios from "axios";

const url = `${link}/data/testimonials`;
// const url = "http://127.0.0.1:8000/api/data/testimonials/";


export const fetchTestimonial = createAsyncThunk(
  "testimonial/get",
  async (thunkAPI) => {
    const res = await axios.get(url);
    return res.data;
  }
);

const testimonialSlice = createSlice({
  name: "testimonial",
  initialState: {
    status: "",
    isLoading: false,
    testimonial: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTestimonial.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTestimonial.fulfilled, (state, action) => {
      state.testimonial = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchTestimonial.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
  },
});

export default testimonialSlice.reducer;
