import Map from "../components/Map";
import { motion } from "framer-motion";
import {
  Box,
  Flex,
  Heading,
  useColorModeValue,
  useBreakpointValue,
  Container,
} from "@chakra-ui/react";
import { ContactInfo } from "../components";

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
      ease: "easeInOut",
    },
  },
};

const ContactSection = () => {
  const bg = useColorModeValue("white", "gray.700");

  const mx = useBreakpointValue({
    base: 2,
    md: 4,
    lg: 6,
  });

  const gap = useBreakpointValue({
    base: 8,
    md: 10,
    lg: 16,
  });

  return (
    <motion.div
      id="contactform"
      initial="initial"
      animate="animate"
      variants={variants}
    >
      <Container maxW="container.lg" p={4}>
        <Box p={4} bg={bg} mx="auto">
          <Heading as="h2" size="xl" mb="6" textAlign="center">
            Contact Us
          </Heading>
          <Heading as="h3" size="md" ml={12} textAlign="left">
            Reach Us
          </Heading>
          <Flex
            mx={mx}
            gap={gap}
            flexDirection={{ base: "column", lg: "row" }}
            justify="center"
          >
            <ContactInfo />
            <Map />
          </Flex>
        </Box>
      </Container>
    </motion.div>
  );
};

export default ContactSection;
