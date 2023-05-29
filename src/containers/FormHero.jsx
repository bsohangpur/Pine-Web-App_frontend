import { Flex, Box, Heading, Button } from "@chakra-ui/react";
import { FaCalendarAlt, FaUserMd, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const HeroSection = () => {
  return (
    <Flex alignItems="center" justifyContent="center" h="80vh">
      <Box maxW="xl" textAlign="center">
        <Heading size="2xl" fontWeight="bold" mb={4}>
          Your Health is Our Priority
        </Heading>
        <Heading size="md" mb={4}>
          Book Your Appointment Now
        </Heading>
        <Flex justifyContent="center" flexWrap="wrap">
          <Button
            leftIcon={<FaCalendarAlt />}
            colorScheme="blue"
            variant="solid"
            size="lg"
            mr={4}
            mb={4}
            onClick={() => window.location.href = 'https://medicalcenter.com/appointment'}
          >
            Book Appointment
          </Button>
          <Button
            leftIcon={<FaUserMd />}
            colorScheme="green"
            variant="solid"
            size="lg"
            mr={4}
            mb={4}
            onClick={() => window.location.href = 'https://medicalcenter.com/doctors'}
          >
            Our Doctors
          </Button>
          <Button
            leftIcon={<FaPhoneAlt />}
            colorScheme="purple"
            variant="solid"
            size="lg"
            mr={4}
            mb={4}
            onClick={() => window.location.href = 'tel:+123456789'}
          >
            Call Us
          </Button>
          <Button
            leftIcon={<FaMapMarkerAlt />}
            colorScheme="teal"
            variant="solid"
            size="lg"
            mb={4}
            onClick={() => window.location.href = 'https://medicalcenter.com/location'}
          >
            Find Us
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default HeroSection;
