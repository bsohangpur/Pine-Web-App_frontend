import React from "react";
import { Box, Heading, Text, Button, Link, useColorModeValue } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const ContactHero = () => {
    const textColor = useColorModeValue("#0a192f", "#f5f5f5");
    const bg = useColorModeValue('gray.100', 'gray.600');

    return (
        <Box px={{base:12,md:20}} bg={bg} color={textColor} py={12}>
            <Heading as="h1" size="2xl" mb={4}>
                Need medical assistance?
            </Heading>
            <Text fontSize="xl" mb={8}>
                Our team of experienced medical professionals is here to help you.
            </Text>
            <Button colorScheme="blue" size="lg">
                <NavLink to='/appointment-form'>
                    Contact Us
                </NavLink>
            </Button>
        </Box>
    );
};

export default ContactHero;
