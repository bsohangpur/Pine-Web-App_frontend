import React from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Center,
  Button,
  useBreakpointValue,
  useColorModeValue
} from "@chakra-ui/react";
import {Image} from '@chakra-ui/image'
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const BlogCard = () => {
  const breakpoint = useBreakpointValue({ base: "base", md: "md", lg:"lg"});
  const textColor = useColorModeValue("#0a192f", "#f5f5f5");
  const bg = useColorModeValue('gray.100', 'gray.700');

  const blogs = [
    {
      image: "https://source.unsplash.com/500x500/?medical",
      title: "Tips for Staying Healthy in the Winter",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel ultrices sapien. Praesent consequat enim vel leo tincidunt vestibulum. Maecenas imperdiet purus non lectus efficitur interdum.",
    },
    {
      image: "https://source.unsplash.com/500x500/?medicine",
      title: "The Benefits of Regular Exercise",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel ultrices sapien. Praesent consequat enim vel leo tincidunt vestibulum. Maecenas imperdiet purus non lectus efficitur interdum.",
    },
    {
      image: "https://source.unsplash.com/500x500/?healthcare",
      title: "How to Manage Stress and Anxiety",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel ultrices sapien. Praesent consequat enim vel leo tincidunt vestibulum. Maecenas imperdiet purus non lectus efficitur interdum.",
    },
  ];

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
        <Heading mb={8} textAlign="center" size='lg' fontWeight="bold">
         Read Our Blogs
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {blogs.map((blog) => (
            <Box key={blog.title} bg={bg} borderRadius="lg" overflow="hidden">
              <Image src={blog.image} alt={blog.title} objectFit="cover" h={{ base: 40, md: 52 }} w="100%" />
              <Box p={6}>
                <Heading as="h3" size="md" mb={2}>
                  {blog.title}
                </Heading>
                <Text fontSize={{ base: "sm", md: "md" }} mb={4}>
                  {blog.summary}
                </Text>
                <Center>
                  <Button colorScheme="blue" size={breakpoint === "base" ? "md" : "lg"}>
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
