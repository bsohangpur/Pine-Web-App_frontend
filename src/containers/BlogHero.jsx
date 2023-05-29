import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {blog_hero_img} from '../assets'

const MotionFlex = motion(Flex);

const BlogHero = () => {
  const breakpoint = useBreakpointValue({ base: "base", md: "md", lg:"lg"});

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box
      as="section"
      bgImage={blog_hero_img}
      bgPosition="center"
      bgSize="cover"
      minH="50vh"
    >
      <Box bg="rgba(0, 0, 0, 0.5)" minH="50vh">
        <Box maxW="7xl" mx="auto" py={24} px={4}>
          <MotionFlex
            flexDirection="column"
            alignItems="center"
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <Heading as="h1" size={breakpoint === "base" ? "xl" : "4xl"} color="white" textAlign="center">
              The Latest from Our Blog
            </Heading>
            <Text mt={8} color="white" fontSize={breakpoint === "base" ? "md" : "2xl"} textAlign="center">
              Stay up to date with our latest news and medical breakthroughs.
            </Text>
            <Button
              mt={12}
              colorScheme="blue"
              size={breakpoint === "base" ? "md" : "lg"}
            >
              Read Our Blog
            </Button>
          </MotionFlex>
        </Box>
      </Box>
    </Box>
  );
};

export default BlogHero;
