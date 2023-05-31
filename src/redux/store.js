import { configureStore } from "@reduxjs/toolkit";
import {
  blogSlice,
  appointmentSlice,
  careerSlice,
  teamSlice,
  testimonialSlice,
  newsletterSlice,
} from "./reducers";

const store = configureStore({
  reducer: {
    blog: blogSlice,
    appointment: appointmentSlice,
    career: careerSlice,
    team: teamSlice,
    testimonial: testimonialSlice,
    newsletter: newsletterSlice,
  },
});

export default store;
