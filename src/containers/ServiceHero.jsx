import React from "react";
import { Box, Heading, Text, Flex, useBreakpointValue, useColorModeValue, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {Image} from '@chakra-ui/image';
import { service_hero_img } from '../assets'
import { NavLink } from "react-router-dom";
const MotionImage = motion(Image);

const ServiceHero = () => {
    const breakpoint = useBreakpointValue({ base: "base", md: "md", lg:"lg"});

    const textColor = useColorModeValue("#0a192f", "#f5f5f5");
    const bg = useColorModeValue('gray.100', 'gray.700');

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <Box bg={bg} px={8} pb={12}>
            <Flex direction={{base:'column', lg:'row'}} gap={6} maxW="7xl" mx="auto" alignItems="center">
                <Box w={{base:'100%', lg:'50%'}} mb={[10, 0]}>
                    <Heading as="h1" size="2xl" mb={8} fontWeight="bold">
                        Exceptional Care for<br />You and Your Family
                    </Heading>
                    <Text fontSize="xl" mb={10}>
                        At Pine Medical Center, we believe in providing the highest quality medical care in a comfortable and welcoming environment.
                    </Text>
                    <Button size="lg" colorScheme="blue">
                       <NavLink to='/appointment-form'>Book an Appointment</NavLink> 
                    </Button>
                </Box>
                <Box w={{base:'100%', lg:'50%'}} position="relative">
                    <MotionImage
                        src={service_hero_img}
                        alt="Doctor and patient"
                        w="full"
                        h={"500px"}
                        objectFit="cover"
                        borderRadius="md"
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    />
                    <Box mr={4} bg={bg} w={['90%', '60%']} h={'50%'} position={"absolute"} right={{base:'-10px',md:"0"}} top="50%" transform="translateY(-50%)" boxShadow="lg" borderRadius="lg" p={8}>
                        <Text fontSize="xl" fontWeight="bold" mb={4}>We Care About Your Health</Text>
                        <Text mb={4}>We are dedicated to providing you and your family with the highest quality medical care, in a warm and welcoming environment.</Text>
                        <Button size="md" colorScheme="blue">
                           <NavLink to='/aboutus'>Learn More</NavLink> 
                        </Button>
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
};

export default ServiceHero;
