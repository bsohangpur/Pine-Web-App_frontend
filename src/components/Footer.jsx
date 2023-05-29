import { Flex, Box, Stack, Text, Link, Input, Button, IconButton, Icon, Heading, useColorModeValue } from "@chakra-ui/react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import {Image} from '@chakra-ui/image'
import { motion } from "framer-motion";
import logo from '../assets/pine_logo-transformed.png'
import { NavLink } from "react-router-dom";
import { links, socialLinks } from '../constants/data'

const Footer = () => {
  const footerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } }
  };

  const textColor = useColorModeValue("#0a192f", "#f5f5f5");
  const bg = useColorModeValue('gray.50', 'gray.800');

  return (
    <motion.div initial="initial" animate="animate" variants={footerVariants}>
      <Box as="footer" py={10} bg={bg}>
        <Flex flexDirection={{ base: "column", md: "row" }} gap={{ md: 12, lg: 24 }} alignItems="center" justify="center">
          <Box mb={4} flexBasis={{ base: "100%", md: "auto" }}>
            <Stack color={textColor} fontSize={"xl"} justify={"center"} spacing={{ base: "2", md: "4" }} direction={{ base: "column", md: "row" }} mb={6} alignItems={"center"}>
              <NavLink to="/"><Image src={logo} className=' w-12'></Image></NavLink>
              {
                links.slice(1).map((value) => {
                  return (
                    <NavLink key={value.title} to={value.link}>
                      <Button colorScheme="blue" variant="ghost" mr="2">{value.title}</Button>
                    </NavLink>
                  )
                })
              }
            </Stack>
            <Stack ml={{ base: '0', md: '8' }} spacing={4} direction={{ base: "column", md: "row" }} alignItems={{ base: "center", md: "flex-start" }}>
              <Input placeholder="Enter your email address" variant="filled" bg="white" size="md" borderRadius="sm" />
              <Button colorScheme="blue" px={8} py={2} borderRadius="sm">Subscribe</Button>
            </Stack>
          </Box>
          <Stack mr={{ base: 2, md: 4 }} color={textColor} _hover={{ color: 'gray.600' }} spacing={4} direction="row" alignItems="center">
            {
              socialLinks.map((value) => {
                return (
                  <Link key={value.id} href={value.link} target="_blank">
                    <IconButton fontSize={{ base: "xl", md: "2xl" }} aria-label={value.id} icon={<value.icon />} variant="ghost" />
                  </Link>
                )
              })
            }
          </Stack>
        </Flex>
        <Stack color={textColor} className=" mx-12" spacing={{ base: 2, md: 4 }} alignItems={{ base: 'flex-start', md: 'center' }} mt={{ base: 4, md: 8 }}>
          <Heading fontSize={{ base: 'xl', md: '2xl' }}>Contact Details</Heading>
          <Text mr={{ base: 0, md: '1rem' }} mb={{ base: 2, md: 0 }}><Icon as={FaMapMarkerAlt} mr={{ base: 0, md: '0.5rem' }} mb={{ base: 2, md: 0 }} />Plot No.7, S.M.Residency, Gate No.3 Dollar Hills, Puppalguda Rangareddy, Hyderabad Telangana 500089</Text>
          <Flex direction={{ base: 'column', md: 'row' }} align={{ base: 'flex-start', md: 'center' }}>
            <Flex justifyContent="center" gap={{ base: '4', md: '0' }} alignItems="center">
              <Icon as={FaPhone} mr={{ base: 0, md: '0.5rem' }} mb={{ base: 2, md: 0 }} />
              <Text mr={{ base: 0, md: '1rem' }} mb={{ base: 2, md: 0 }}>+91 8790969988</Text>
            </Flex>
            <Flex justifyContent="center" gap={{ base: '4', md: '0' }} alignItems="center">
              <Icon as={FaEnvelope} mr={{ base: 0, md: '0.5rem' }} mb={{ base: 2, md: 0 }} />
              <Text>info@pinemedical.in</Text>
            </Flex>
          </Flex>
        </Stack>
        <Text fontSize="sm" textAlign="center" mt={8}>&copy; {new Date().getFullYear()} All rights reserved to Pine Medical Center LLP.</Text>
      </Box>
    </motion.div>
  );
};

export default Footer;
