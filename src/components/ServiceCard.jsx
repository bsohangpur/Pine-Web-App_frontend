import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import CropText from "../constants/CropText";
import { services } from "../data";

const Card = ({ title, description, imageUrl }) => {
  const bg = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("gray.800", "white");
  const bodytextColor = useColorModeValue("gray.600", "gray.200");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Box
        p={6}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        bg={bg}
        _hover={{ boxShadow: "lg", transform: "translateY(-5px)" }}
        transition="all 0.3s ease"
      >
        <Box
          height="200px"
          width="100%"
          bg={`url(${imageUrl}) center center / cover no-repeat`}
        />
        <Box mt="4">
          <Heading textTransform="capitalize" size="md" color={textColor}>
            {title}
          </Heading>
          <Box mt="2" color={bodytextColor}>
            <CropText text={description} />
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

const ServiceCard = () => {
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <Box bg={useColorModeValue("gray.100", "gray.800")} py={10}>
      <Heading as="h3" size="xl" mb="6" textAlign="center" color={textColor}>
        Our Services
      </Heading>
      <SimpleGrid
        columns={[1, 2, 3, 4]}
        gap={10}
        mx={[4, 6, 10]}
        justifyContent="center"
      >
        {services.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ServiceCard;
