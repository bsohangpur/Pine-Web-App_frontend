import { configureStore } from "@reduxjs/toolkit";
import {
  blogSlice,
  appointmentSlice,
  careerSlice,
  teamSlice,
  testimonialSlice,
} from "./reducers";

const store = configureStore({
  reducer: {
    blog: blogSlice,
    appointment: appointmentSlice,
    career: careerSlice,
    team: teamSlice,
    testimonial: testimonialSlice,
  },
});

export default store;
