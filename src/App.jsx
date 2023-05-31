import React, { useEffect } from "react";
import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Home,
  About,
  Service,
  OurTeam,
  Contact,
  Blog,
  BlogDetail,
} from "./pages";
import "./App.css";
import { AppointmentForm, Footer, Navbar } from "./components";
import { Career } from "./containers";
import { useDispatch } from "react-redux";
import { fetchTeam } from "./redux/reducers/teamSlice";
import { fetchTestimonial } from "./redux/reducers/testimonialSlice";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchTeam());
    dispatch(fetchTestimonial());
  }, []);

  return (
    <ChakraProvider>
      <BrowserRouter>
        <div className=" h-16">
          <Navbar />
        </div>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/appointment-form" element={<AppointmentForm />} />
          <Route path="/career" element={<Career />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
