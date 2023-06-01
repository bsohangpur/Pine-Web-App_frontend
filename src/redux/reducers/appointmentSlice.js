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

export const fetchAppointment = createAsyncThunk(
  "appointment/get",
  async (thunkAPI) => {
    const response = await axios.get(
      "http://127.0.0.1:8000/api/form/appointments/",
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg2ODk3ODQxLCJpYXQiOjE2ODU2MDE4NDEsImp0aSI6Ijg0YWUxYWZiZTMzZTQ3MjU5OTJkZGVjYWM5MmJjNmY0IiwidXNlcl9pZCI6Mn0.jzgCQXw-21SmkxzTsnBo4ep_zfXLCbyLVp9izMWQGoA`,
        },
      }
    );
    const data = response.data;
    return data;
  }
);

const appointmentSlice = createSlice({
  name: "appointment",
  initialState: {
    status: "",
    isLoading: false,
    appointments: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendAppointment.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(sendAppointment.fulfilled, (state, actions) => {
      state.status = actions.payload;
      state.isLoading = false;
    });
    builder.addCase(sendAppointment.rejected, (state, actions) => {
      state.error = actions.error.message;
      state.isLoading = false;
    });

    builder.addCase(fetchAppointment.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAppointment.fulfilled, (state, actions) => {
      state.appointments = actions.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchAppointment.rejected, (state, actions) => {
      state.error = actions.error.message;
      state.isLoading = false;
    });
  },
});

export default appointmentSlice.reducer;
