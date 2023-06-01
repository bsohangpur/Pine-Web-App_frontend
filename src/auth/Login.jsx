import React from "react";
import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const loginVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Username is required").min(8, "Must be 8 characters or more"),
      password: Yup.string()
        .min(8, "Must be 8 characters or more")
        .matches(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,
          "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
        )
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      //   dispatch(setAuth(true));
      //   navigate("/auth/user");
    },
  });

  return (
    <Box
      as="section"
      py="10"
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Box
        maxW={{ base: "xl", md: "7xl" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
      >
        <Text
          textAlign="center"
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="bold"
          color={useColorModeValue("gray.900", "gray.50")}
          mb="12"
        >
          Login for Department Only
        </Text>
        <motion.div
          variants={loginVariants}
          initial="hidden"
          animate="visible"
        >
          <Box maxW="md" mx="auto">
            <form onSubmit={formik.handleSubmit}>
              <FormControl id="username" mb="4">
                <FormLabel>Username</FormLabel>
                <Input
                  type="text"
                  name="username"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                />
                {formik.touched.username && formik.errors.username ? (
                  <Text color="red">{formik.errors.username}</Text>
                ) : null}
              </FormControl>
              <FormControl id="password" mb="4">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <Text color="red">{formik.errors.password}</Text>
                ) : null}
              </FormControl>
              <Button
                type="submit"
                colorScheme="blue"
                size="lg"
                w="full"
                mb="4"
                isLoading={formik.isSubmitting}
              >
                Login
              </Button>
            </form>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Login;
