import { Box } from "@chakra-ui/react";
import React from "react";
import { Testimonial, Equipment } from "../components";
import { AboutHero, Team } from "../containers";
import { useSelector } from "react-redux";
import Loading from "../constants/Loading";
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
    return <div>error ...</div>;
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
