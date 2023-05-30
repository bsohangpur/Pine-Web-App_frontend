import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { privacy_policy_data } from "../data";
import { PrivcyPolicyCard } from "../components";

const MotionBox = motion(Box);

const PrivacyPolicy = () => {
  return (
    <Box
      className="flex justify-center items-center w-full px-2 md:px-0 py-4"
    >
      <MotionBox
        w={{ base: "100%", md: "90%" }}
        p={10}
        borderRadius="xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        shadow="xl"
        border="1px"
        borderColor="gray.300"
      >
        <Flex justify="center">
          <Text fontSize="2xl" fontWeight="bold">
            Privacy Policy
          </Text>
        </Flex>
        <Flex direction="column" mt={10}>
          {privacy_policy_data.map((section, index) => (
            <PrivcyPolicyCard
              index={index}
              key={section.title + index}
              title={section.title}
              content={section.content}
              icon={section.icon}
            />
          ))}
        </Flex>
      </MotionBox>
    </Box>
  );
};

export default PrivacyPolicy;
