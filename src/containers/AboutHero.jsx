import { Box, Flex, Heading, Text, Button, useColorModeValue, useBreakpointValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {Image} from '@chakra-ui/image'
import about_hero_img from '../assets/about_hero_img.jpg'
import { NavLink } from 'react-router-dom';

const AboutHero = () => {
  const motionProps = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const bg = useColorModeValue('gray.50', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.200');
  const headingSize = useBreakpointValue({ base: 'lg', md: '2xl' });
  const textSize = useBreakpointValue({ base: 'md', md: 'lg' });

  return (
    <Box bg={bg} py={5} px={4}>
      <Box maxW={{ base: '100%', md: '80%', lg: '70%' }} mx="auto">
        <Flex flexWrap="wrap">
          <motion.div {...motionProps}>
            <Box flex="1" textAlign="center" mb={8}>
              <Heading as="h2" size={headingSize}>
                About Us
              </Heading>
              <Text color={textColor} mt={4} fontSize={textSize}>
                We are best in medical field and maintain a “small town” atmosphere. Our physicians and                                                                     their families live nearby, and are proud to do their part making the community thrive.
                Most services our patients need are onsite.
                We provide a select team of board-certified physicians and technicians.
                We are working with NCQA to be a level three certified Patient Centered Medical Home.
                We offer urgent care and same-day appointments with extended hours, where our patients will see a physician on every visit.
                We offer secure electronic access to your medical records. Patient may request medication refills or schedule an appointment through our patient portal.
              </Text>
              <Image className=' rounded-md mt-4' alt='about_hero_img' src={about_hero_img}></Image>
            </Box>
          </motion.div>
          <motion.div {...motionProps}>
            <Box flex="1" textAlign="center" mb={8}>
              <Heading as="h3" size={headingSize}>
                Our Mission
              </Heading>
              <Text color={textColor} mt={4} fontSize={textSize}>
                At Pine Medical Center, LLP, we are committed to providing an exceptional level of care to you and your family that will exceed your expectations. We believe that every person should be treated with dignity and respect. Pine Medical Center, LLP believes it is our duty to provide you with education and resources to enable you to make lifestyle and healthcare decisions that will optimize your well-being. We will work with you to minimize your risk of developing disease and to detect disease at early stages.
              </Text>
            </Box>
          </motion.div>
        </Flex>
        <Box textAlign="center">
          <Button colorScheme="blue" size="lg" mt={2}>
           <NavLink to="/aboutus">Learn More</NavLink> 
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutHero;
