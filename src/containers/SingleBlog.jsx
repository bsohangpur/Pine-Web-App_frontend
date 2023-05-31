import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { SanitizedTextView } from "../utils";

const SingleBlog = ({ blog, similarBlogs }) => {
  const { title, image, post } = blog;

  return (
    <Flex justify="center" align="center" minHeight="100vh" overflow="hidden">
      <Grid
        templateColumns={{ base: "1fr", md: "3fr 1fr" }}
        gap={8}
        maxW="1200px"
        width="100%"
        p={8}
      >
        <VStack spacing={8} align="flex-start">
          <Box>
            <Heading as="h1">{title}</Heading>
            <Image my={4} src={image} alt={title} />
            <SanitizedTextView content={post} />
          </Box>
          <Box w="100%"></Box>
        </VStack>
        <VStack spacing={8} align="flex-start">
          {similarBlogs.map((blog, index) => (
            <Box
              key={index}
              as={Link}
              to="/"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 + 1.5 }}
              borderRadius="lg"
              w="100%"
            >
              <Box className="w-full shadow-md rounded-lg p-4 flex flex-col gap-2 items-center">
                <Image
                  src={blog.image}
                  fallbackSrc="https://via.placeholder.com/300x200"
                  alt="Similar Blog Image"
                  objectFit="cover"
                />
                <Heading as="h3" fontSize="xl" mb={2}>
                  {blog.title}
                </Heading>
                <Text>{blog.summary}</Text>
              </Box>
            </Box>
          ))}
        </VStack>
      </Grid>
    </Flex>
  );
};

export default SingleBlog;
