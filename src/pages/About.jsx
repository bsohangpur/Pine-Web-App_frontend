import { Box } from "@chakra-ui/react";
import React from "react";
import { Testimonial, Equipment } from "../components";
import { AboutHero, Team } from "../containers";
import { useSelector } from "react-redux";
import { Loading, Error as Errors } from "../constants";
// import { doctorData } from '../constants/data'

const About = () => {
  const { team, isLoading, error } = useSelector((state) => state.team);
  const {
    testimonial,
    isLoading: isloading,
    error: Error,
  } = useSelector((state) => state.testimonial);

  const doctorData = team.filter((val) => val.position === "doctor");

  if (isLoading && isloading) {
    return <Loading />;
  } else if (error && Error) {
    return <Errors route="Home" path="/" message={error || Error} />;
  }

  return (
    <Box>
      <AboutHero />
      {doctorData.length > 0 && <Team title="Doctor" person={doctorData} />}
      <Equipment />
      <Testimonial data={testimonial} />
    </Box>
  );
};

export default About;
