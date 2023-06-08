import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  Spacer,
  Icon,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  FormErrorMessage,
  useToast,
  Image,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { sendCareer } from "../redux/reducers/careerSlice";
import { Error } from "../constants";
import { join_us } from "../assets";
import { useNavigate } from "react-router-dom";

const Career = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const { error, status } = useSelector((state) => state.appointment);
  const navigation = useNavigate();

  const initialValues = {
    name: "",
    phone: "",
    email: "",
    message: "",
    resume: null,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    phone: Yup.string()
      .matches(/^\d{10}$/, "Invalid phone number")
      .required("Phone number is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
    resume: Yup.mixed()
      .required("Resume is required")
      .test(
        "fileSize",
        "File size too large (maximum 1MB)",
        (value) => value && value.size <= 1048576
      ),
  });

  const handleFileUpload = (setFieldValue) => (event) => {
    const file = event.currentTarget.files[0];
    if (!file) {
      return;
    }
    if (file.size > 1048576) {
      toast({
        title: "File too large",
        description: "The file size exceeds the limit of 1MB.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    setFieldValue("resume", file);
  };

  const handleSubmit = async (values, actions) => {
    try {
      // Send hiring request here
      actions.setSubmitting(false);
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("phone", values.phone);
      formData.append("email", values.email);
      formData.append("message", values.message);
      formData.append("resume", values.resume);

      dispatch(sendCareer(formData));

      toast({
        title: "Form submitted",
        description: "Your application has been submitted successfully.",
        status: "success",
        duration: 7000,
        isClosable: true,
      });

      setTimeout(() => {
        navigation('/');
      }, 2000);
    } catch (error) {
      console.error(error);
      toast({
        title: "Failed to send hiring request.",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  if (error) {
    return <Error route="Refresh" path="/appointment-form" message={error} />;
  }

  return (
    <Box className="flex gap-4 justify-center items-center">
      <Box px={[4, 8, 12]} py={16}>
        <Heading as="h1" size="2xl" mb={8}>
          Join Our Team
        </Heading>
        <Box mb={8}>
          <Text fontSize="xl">
            We are always looking for talented and passionate individuals to
            join our team. If you are interested in working with us, please fill
            out the form below and we will get back to you as soon as possible.
          </Text>
        </Box>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form>
              <Field name="name">
                {({ field, form }) => (
                  <FormControl
                    id="name"
                    isInvalid={form.errors.name && form.touched.name}
                  >
                    <FormLabel>Name</FormLabel>
                    <Input {...field} placeholder="Your name" />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="phone">
                {({ field, form }) => (
                  <FormControl
                    id="phone"
                    mt={4}
                    isInvalid={form.errors.phone && form.touched.phone}
                  >
                    <FormLabel>Phone Number</FormLabel>
                    <Input
                      {...field}
                      type="phone"
                      placeholder="Your phone number"
                    />
                    <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="email">
                {({ field, form }) => (
                  <FormControl
                    id="email"
                    mt={4}
                    isInvalid={form.errors.email && form.touched.email}
                  >
                    <FormLabel>Email address</FormLabel>
                    <Input
                      {...field}
                      type="email"
                      placeholder="Your email address"
                    />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="message">
                {({ field, form }) => (
                  <FormControl
                    id="message"
                    mt={4}
                    isInvalid={form.errors.message && form.touched.message}
                  >
                    <FormLabel>Message</FormLabel>
                    <Textarea {...field} placeholder="Enter your message" />
                    <FormErrorMessage>{form.errors.message}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="resume">
                {({ form }) => (
                  <FormControl
                    id="resume"
                    mt={4}
                    isInvalid={form.errors.resume && form.touched.resume}
                  >
                    <FormLabel>Resume</FormLabel>
                    <Box
                      as="label"
                      htmlFor="resume-upload"
                      className="flex justify-center items-center"
                      py={2}
                      cursor="pointer"
                    >
                      <Flex
                        rounded="md"
                        border="2px"
                        borderColor="gray.300"
                        alignItems="center"
                        justifyContent="center"
                        h={14}
                        w="100%"
                        className="hover:bg-slate-300"
                      >
                        <Text
                          fontSize="md"
                          fontWeight="medium"
                          color="gray.600"
                        >
                          {form.values.resume
                            ? form.values.resume.name
                            : "Add Your Resume Here"}
                        </Text>
                        <Icon as={FaArrowRight} ml={2} />
                        <input
                          id="resume-upload"
                          name="resume"
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileUpload(setFieldValue)}
                          style={{ display: "none" }}
                        />
                      </Flex>

                      {form.values.resume && <Spacer />}
                    </Box>
                    <FormErrorMessage>{form.errors.resume}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Box className="flex justify-center mt-4">
                <Button
                  type="submit"
                  colorScheme="blue"
                  size="lg"
                  className="w-4/5 "
                  isLoading={isSubmitting}
                >
                  Submit
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
      <Box className="hidden lg:block">
        <Image src={join_us} alt="career" />
      </Box>
    </Box>
  );
};
export default Career;
