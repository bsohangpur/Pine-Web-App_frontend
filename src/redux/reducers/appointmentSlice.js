import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import link from "./base_link";
import axios from "axios";

const url = `${link}/form/appointments/`;

export const sendAppointment = createAsyncThunk(
  "appointment/post",
  async (data, thunkAPI) => {
    const response = await axios.post(url, data);
    return response.status;
  }
);

const appointmentSlice = createSlice({
  name: "appointment",
  initialState: {
    status: "",
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendAppointment.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(sendAppointment.fulfilled, (state, actions) => {
      state.status = actions.payload;
    });
    builder.addCase(sendAppointment.rejected, (state, actions) => {
      state.error = actions.error.message;
    });
  },
});

export default appointmentSlice.reducer;
