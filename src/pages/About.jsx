import { Box } from '@chakra-ui/react';
import React from 'react'
import { Testimonial, Equipment } from '../components'
import { AboutHero, Team } from '../containers'
import { doctorData } from '../constants/data'

const About = () => {
  return (
    <Box>
      <AboutHero />
      <Team title="Doctor" person={doctorData} />
      <Equipment />
      <Testimonial />
    </Box>
  )
}

export default About
