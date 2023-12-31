import React from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Center,
  Button,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionBox = motion(Box);

const BlogCard = ({ data }) => {
  const breakpoint = useBreakpointValue({ base: "base", md: "md", lg: "lg" });
  const textColor = useColorModeValue("#0a192f", "#f5f5f5");
  const bg = useColorModeValue("gray.100", "gray.700");

  const blogs = data;

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box as="section" py={16}>
      <MotionBox
        maxW="7xl"
        mx="auto"
        px={4}
        initial="hidden"
        animate="visible"
        variants={variants}
      >
        <Heading mb={8} textAlign="center" size="lg" fontWeight="bold">
          Read Our Blogs
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {blogs.map((blog) => (
            <Box key={blog.title} bg={bg} borderRadius="lg" overflow="hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                objectFit="cover"
                h={{ base: 40, md: 52 }}
                w="100%"
              />
              <Box p={6}>
                <Heading as="h3" size="md" mb={2}>
                  {blog.title}
                </Heading>
                <Text fontSize={{ base: "sm", md: "md" }} mb={4}>
                  {blog.summary}
                </Text>
                <Center>
                  <Button
                    as={Link}
                    to={blog.slug}
                    colorScheme="blue"
                    size={breakpoint === "base" ? "md" : "lg"}
                  >
                    Read More
                  </Button>
                </Center>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </MotionBox>
    </Box>
  );
};

export default BlogCard;
