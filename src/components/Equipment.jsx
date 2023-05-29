import React from "react";
import { Box, Heading, Text, Flex, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {Image} from '@chakra-ui/image'

const equipmentData = [
    {
        id: 1,
        name: "X-ray machine",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8eCUyMHJheSUyMG1hY2hpbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "A device that uses X-rays to produce images of the internal structures of the body.",
    },
    {
        id: 2,
        name: "Ultrasound machine",
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dWx0cmFzb3VuZCUyMG1hY2hpbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "A device that uses high-frequency sound waves to create images of the internal organs and tissues of the body.",
    },
    {
        id: 3,
        name: "MRI scanner",
        image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXJpJTIwc2Nhbm5lcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "A device that uses a strong magnetic field and radio waves to produce detailed images of the internal structures of the body.",
    },
];

const EquipmentCard = ({ name, image, description }) => {
    const breakpoint = useBreakpointValue({ base: "base", md: "md", lg: "lg" });

    const textColor = useColorModeValue("#0a192f", "#f5f5f5");
    const bg = useColorModeValue('gray.100', 'gray.700');

    return (
        <motion.div className=" w-4/5" whileHover={{ scale: 1.05 }}>
            <Box
                bg={bg}
                p={4}
                borderRadius="lg"
                boxShadow="md"
            >
                <Image src={image} alt={name} w="full" h={breakpoint === "base" ? "200px" : "300px"} objectFit="cover" borderRadius="md" />
                <Heading as="h3" size="md" mt={4}>
                    {name}
                </Heading>
                <Text mt={2}>{description}</Text>
            </Box>
        </motion.div>
    );
};

const EquipmentSection = () => {
    const headingVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
    };

    const flexVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <Box maxW="7xl" mx="auto" py={12} px={4}>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={headingVariants}
                transition={{ duration: 0.5 }}
            >
                <Heading as="h2" size="lg" textAlign="center" mb={8}>
                    Our Equipment
                </Heading>
            </motion.div>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={flexVariants}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <Flex flexWrap="wrap" gap={12} justifyContent="center" alignItems="center">
                    {equipmentData.map((equipment) => (
                        <EquipmentCard key={equipment.id} name={equipment.name} image={equipment.image} description={equipment.description} />
                    ))}
                </Flex>
            </motion.div>
        </Box>
    );
};


export default EquipmentSection;