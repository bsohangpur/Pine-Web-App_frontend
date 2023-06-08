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
import { Error } from "./constants";

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
          <Route exect path="/" element={<Home />} />
          <Route exect path="/aboutus" element={<About />} />
          <Route exect path="/service" element={<Service />} />
          <Route exect path="/contact" element={<Contact />} />
          <Route exect path="/team" element={<OurTeam />} />
          <Route exect path="/blog" element={<Blog />} />
          <Route exect path="/blog/:slug" element={<BlogDetail />} />
          <Route exect path="/appointment-form" element={<AppointmentForm />} />
          <Route exect path="/career" element={<Career />} />
          <Route
            exect
            path="*"
            element={
              <Error
                path="/"
                route="Home"
                message="page not found with status code 404"
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
