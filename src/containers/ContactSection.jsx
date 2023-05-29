import AppointmentForm from '../components/AppointmentForm';
import Map from '../components/Map';
import { motion } from 'framer-motion';
import { Box, Flex, Heading, useColorModeValue, useBreakpointValue } from '@chakra-ui/react';


const variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

const ContactSection = () => {
  const bg = useColorModeValue('white', 'gray.700');

  const mx = useBreakpointValue({
    base: 4,
    md: 7,
    lg: 10,
  });

  const gap = useBreakpointValue({
    base: 8,
    md: 10,
    lg: 16,
  });

  return (
    <motion.div id='contactform' initial="initial" animate="animate" variants={variants}>
      <Box bg={bg} py={10} maxW="7xl" mx="auto">
        <Heading as="h2" size="xl" mb="6" textAlign="center">
          Contact Us
        </Heading>
        <Flex my={5} mx={mx} gap={gap} flexDirection={{ base: 'column', lg: 'row' }} justify="center">
          {/* <AppointmentForm /> */}
          <Map />
        </Flex>
      </Box>
    </motion.div>
  );
}

export default ContactSection
