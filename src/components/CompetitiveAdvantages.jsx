import React from "react";
import { Box, Flex, Heading, Text, Stack, Icon, useColorModeValue } from "@chakra-ui/react";
import { FaUserMd, FaAmbulance, FaNotesMedical } from "react-icons/fa";
import { motion } from "framer-motion";

const MotionFlex = motion(Flex);

const advantagesData = [
  {
    id: 1,
    title: "Experienced medical staff",
    description:
      "Our medical staff is highly trained and experienced to provide top-quality medical care.",
    icon: FaUserMd,
  },
  {
    id: 2,
    title: "Emergency medical services",
    description:
      "We have a fully equipped ambulance service that is available 24/7 to handle medical emergencies.",
    icon: FaAmbulance,
  },
  {
    id: 3,
    title: "Comprehensive medical services",
    description:
      "We offer a wide range of medical services, including diagnostic testing and specialized treatments.",
    icon: FaNotesMedical,
  },
];

const AdvantagesCard = ({ title, description, icon }) => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const textColor = useColorModeValue("#0a192f", "#f5f5f5");
  const bg = useColorModeValue('gray.100', 'gray.700');

  return (
    <MotionFlex
      bg={bg}
      p={6}
      borderRadius="lg"
      boxShadow="md"
      direction="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <Icon as={icon} boxSize={10} mb={4} />
      <Heading as="h4" size="md" fontWeight="bold" mb={2}>
        {title}
      </Heading>
      <Text fontSize="sm">{description}</Text>
    </MotionFlex>
  );
};

const CompetitiveAdvantages = () => {
  return (
    <Box maxW="7xl" mx="auto" py={12} px={4}>
      <Heading as="h2" size="lg" textAlign="center" mb={8}>
        Our Competitive Advantages
      </Heading>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={6}
        justifyContent="center"
      >
        {advantagesData.map((advantage) => (
          <AdvantagesCard
            key={advantage.id}
            title={advantage.title}
            description={advantage.description}
            icon={advantage.icon}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default CompetitiveAdvantages;
