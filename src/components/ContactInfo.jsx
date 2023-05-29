import React from "react";
import { Box, Flex, Text, Icon, Link, useColorModeValue } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const ContactInfoItem = ({ icon, text }) => {
    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    const textColor = useColorModeValue("#0a192f", "#f5f5f5");
    const bg = useColorModeValue('gray.100', 'gray.700');

    return (
        <MotionBox
            bg={bg}
            p={4}
            borderRadius="md"
            boxShadow="md"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            variants={variants}
        >
            <Flex align="center">
                <Icon as={icon} mr={2} />
                <Text>{text}</Text>
            </Flex>
        </MotionBox>
    );
};

const ContactInfo = () => {
    return (
        <Box maxW="7xl" mx="auto" py={12} px={4}>
            <Flex justifyContent="center" alignItems='center' flexDirection='column'>
                <Box mb={12} maxW='2xl'>
                    <ContactInfoItem
                        icon={FaMapMarkerAlt}
                        text="Plot No.7, S.M.Residency, Gate No.3 Dollar Hills, Puppalguda Rangareddy, Hyderabad Telangana 500089"
                    />
                </Box>
                <Flex
                    flexDirection={{ base: "column", md: "row" }}
                    gap={4}
                    justifyContent="center"
                >
                    <ContactInfoItem icon={FaPhoneAlt} text="+91 8790969988" />
                    <ContactInfoItem
                        icon={FaEnvelope}
                        text={
                            <Link href="mailto:info@pinemedicalcenter.com">
                                info@pinemedical.in
                            </Link>
                        }
                    />
                </Flex>
            </Flex>
        </Box>
    );
};

export default ContactInfo;

