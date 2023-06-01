import { configureStore } from "@reduxjs/toolkit";
import {
  blogSlice,
  appointmentSlice,
  careerSlice,
  teamSlice,
  testimonialSlice,
  newsletterSlice,
  authSlice,
} from "./reducers";

const store = configureStore({
  reducer: {
    blog: blogSlice,
    appointment: appointmentSlice,
    career: careerSlice,
    team: teamSlice,
    testimonial: testimonialSlice,
    newsletter: newsletterSlice,
    auth: authSlice,
  },
});

export default store;
