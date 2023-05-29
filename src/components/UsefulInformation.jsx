import React from "react";
import { Box, Heading, Text, Flex, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { faq } from '../constants/data'




const FAQCard = ({ que, ans }) => {
    const textColor = useColorModeValue("gray.600", "gray.50");

    return (
        < Box  my={8}>
            <Heading as='h6' size='md'>
                {que}
            </Heading>
            <Text fontSize='sm' textColor={textColor}>{ans}</Text>
        </Box >

    );
};

const UsefulInfo = () => {
    const bg = useColorModeValue('gray.100', 'gray.700');

    return (
        <Box maxW='7xl' px={10} mt={10} mb={20}>
            <Heading as="h2" size="lg" textAlign="center" mb={10} fontWeight="bold">
                Useful Information
            </Heading>
            <Flex flexWrap='wrap' gap={12} justify="center" align="center">
                <motion.div className=" w-4/5" whileHover={{ scale: 1.05 }}>
                    <Box
                        bg={bg}
                        p={4}
                        borderRadius="lg"
                        boxShadow="md"
                    >
                        <Heading as="h3" size={{ base: 'md', md: 'lg' }} mt={4} mb={2} fontWeight="bold">
                            Frequently asked questions
                        </Heading>
                        <Text fontSize={{ base: "sm", md: "md" }}>Get answers to some of the most commonly asked questions about our services and policies.</Text>
                        {faq.map((value) => {
                            return (<FAQCard key={value.id} que={value.que} ans={value.ans} />)
                        })}
                    </Box>
                </motion.div>
            </Flex>
        </Box>
    );
};

export default UsefulInfo;
