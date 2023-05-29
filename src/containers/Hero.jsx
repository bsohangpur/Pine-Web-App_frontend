import { Box, Heading, Button, Flex, useColorModeValue, useBreakpointValue, Link } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import hero_img from '../assets/hero_img.webp'
import { FaCalendarAlt, FaUserMd, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Hero = () => {
  const motionProps = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const fontSize = useBreakpointValue({ base: '2xl', md: '4xl', lg: '5xl' });
  const mb = useBreakpointValue({ base: 2, md: 4, lg: 6 });
  const gap = useBreakpointValue({ base: 2, md: 4, lg: 6 });
  const textColor = useColorModeValue("#0a192f", "#f5f5f5");
  const bg = useColorModeValue('gray.100', 'gray.700');

  return (
    <Box bgImage={hero_img} bgSize='cover' bgRepeat='no-repeat' pt="4" pb="12" px={{ base: "12", md: "20" }}>
      <Box bg={bg} className=" backdrop-blur-sm p-4 rounded-md" maxW="7xl" mx="auto" textAlign={{ base: "center", md: "left" }}>
        <motion.div {...motionProps}>
          <Flex h='80vh' alignItems="center" justifyContent="center">
            <Box textAlign="center">
              <Heading
                as="h1"
                fontSize={fontSize}
                fontWeight="bold"
                color={textColor}
                mb={mb}
                gap={gap}
                lineHeight="1.2"
              >
                <span className=" text-green-600">Pine Medical</span> <span className=" text-blue-900">Center LLP</span>
              </Heading>
              <Heading size="2xl" fontWeight="bold" mb={6}>
                Your Health is Our Priority
              </Heading>
              <Heading size="md" mb={8}>
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
                >
                  <NavLink to='/appointment-form'>
                    Book Appointment
                  </NavLink>
                </Button>
                <Button
                  leftIcon={<FaUserMd />}
                  colorScheme="green"
                  variant="solid"
                  size="lg"
                  mr={4}
                  mb={4}
                >
                  <NavLink to='/team'>
                    <Link href="#doctor">
                      Our Doctors
                    </Link>
                  </NavLink>
                </Button>
                <Button
                  leftIcon={<FaPhoneAlt />}
                  colorScheme="purple"
                  variant="solid"
                  size="lg"
                  mr={4}
                  mb={4}
                  onClick={() => window.location.href = 'tel:+918790969988'}
                >
                  Call Us
                </Button>
                <Button
                  leftIcon={<FaMapMarkerAlt />}
                  colorScheme="teal"
                  variant="solid"
                  size="lg"
                  mb={4}
                >
                  <Link target="_black" href="https://www.google.co.in/maps/place/S.M.+Residency/@17.3944867,78.3828347,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb97c503d14e5b:0x99448ff8a395219d!8m2!3d17.3944816!4d78.3854096!16s%2Fg%2F11ry1jw4hf">
                    Find Us
                  </Link>
                </Button>
              </Flex>
            </Box>
          </Flex>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Hero;
