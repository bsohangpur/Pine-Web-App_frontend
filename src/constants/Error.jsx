import { Box, Text, Button, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Error = ({ route, message, path }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      h="auto"
      minH="90vh"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className=" mb-8 grid place-items-center"
      >
        <Text fontSize="6xl" fontWeight="bold" color="red.500">
          {message.slice(32)}
        </Text>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Oops! {message}
        </Text>
        <Button colorScheme="red" size="lg" as={Link} href={path}>
          Go back to {route}
        </Button>
      </motion.div>
    </Box>
  );
};

export default Error;
