import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import link from "./base_link";
import axios from "axios";

const url = `${link}/data/blogs`;

export const fetchBlogs = createAsyncThunk("blog/get", async (thunkAPI) => {
  const res = await axios.get(url);
  return res.data;
});

export const singleBlog = createAsyncThunk(
  "blog/get_by_slug",
  async (slug, thunkAPI) => {
    console.log(slug)
    const res = await axios.get(`${url}/${slug}`);
    return res.data;
  }
);

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    status: "",
    isLoading: false,
    blogs: [],
    blog: {},
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBlogs.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      state.blogs = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchBlogs.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });

    builder.addCase(singleBlog.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(singleBlog.fulfilled, (state, action) => {
      state.blog = action.payload;
      state.isLoading = false;
    });
    builder.addCase(singleBlog.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
  },
});

export default blogSlice.reducer;
