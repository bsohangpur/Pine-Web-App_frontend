import { Box, Flex, Heading, Text, useBreakpointValue, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {Image} from '@chakra-ui/image';
import CropText from "../constants/CropText";

const DoctorCard = ({ doctor, toggle }) => {
    const { colorMode } = useColorMode();
    const cardWidth = useBreakpointValue({ base: "100%", sm: "300px" });
    const bg = { light: "white", dark: "gray.800" };
    const color = { light: "gray.700", dark: "gray.400" };
    const borderColor = { light: "gray.200", dark: "gray.600" };

    return (
        <motion.div whileHover={{ scale: 1.05 }}>
            <Box
                w={cardWidth}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                borderColor={borderColor[colorMode]}
                bg={bg[colorMode]}
                color={color[colorMode]}
            >
                <Image h={450} src={doctor.image} alt={doctor.name} />
                <Box p="6">
                    <Heading textTransform="capitalize" as="h3" size="md">
                        {doctor.name}
                    </Heading>
                    <Text mt="4" fontSize="sm">
                        {toggle && 'Specialty:'} {doctor.specialty}
                    </Text>
                    <Box mt="2" fontSize="sm">
                        <CropText text={doctor.bio} />
                    </Box>
                </Box>
            </Box>
        </motion.div>
    );
};

const Team = ({ title, person }) => {
    return (
        <Box>
            <Heading as="h2" mt={10} size="lg" textAlign="center">
                Our {title}s
            </Heading>
            <Flex gap={6} my="8" mx={{base:8,md:0}} justifyContent="center" flexWrap="wrap">
                {person.map((doctor, index) => (
                    <DoctorCard toggle={title === "Doctor" ? true : false} key={index} doctor={doctor} />
                ))}
            </Flex>
        </Box>
    );
};

export default Team;