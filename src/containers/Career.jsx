import React, { useState } from "react";
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
  InputGroup,
  Textarea,
  FormErrorMessage,
  useToast,
  Image,
  InputRightAddon,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { sendCareer } from "../redux/reducers/careerSlice";
import { Error } from "../constants";
import { join_us } from "../assets";
import { useNavigate } from "react-router-dom";
import { country_tel_code } from "../data";
import Select from "react-select";

const Career = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.appointment);
  const navigation = useNavigate();
  const [countryCode, setCountryCode] = useState("+91");
  const [countryFlag, setCountryFlag] = useState(
    "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMEUwNDkwQzE3N0QxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowMEUwNDkwRDE3N0QxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAwRTA0OTBBMTc3RDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAwRTA0OTBCMTc3RDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+OIHw6AAAAPlJREFUeNpi/D/T+D/DAAAmhgECoxYPf4sZ/wPBQFn8CUjzEqvh7cffDAtX32Xg4WZhYGJkZHj/8SdDTLAKg6QIGyn2fiY5qGdN38/A8OU5g5k2F4OxBicD59+3DHNm7CXZxyykKL548TGDmCgHg6mpMoObWz/Dr19/GHbvLmS4desZWE5fX5Y2Fv/794+BhYWR4e/ff0BLfwPxX4Y/f0BiTAz///+jbRy3te5gEBTgYrCyVgY65D/DuXOPGJ49/cBQW+9FUhyTbPGnt78Z9qx7wiAozMnAyMTI8OblVwYnfxkGIQk2ki0emOwk3MExWjuNWjy8LAYIMADBumJ9k9IhVwAAAABJRU5ErkJggg=="
  );

  const handleCountryCodeChange = (selectedOption) => {
    setCountryCode(selectedOption.value.dial_code);
    setCountryFlag(selectedOption.value.flag);
  };

  const options = country_tel_code.map((country, index) => ({
    value: country,
    label: country.dial_code,
  }));

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
      .matches(/^[1-9]\d{9}$/, "Invalid phone number")
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
      formData.append("phone", countryCode + values.phone);
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
        navigation("/");
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
                    <InputGroup>
                      <Select
                        value={{ value: countryCode, label: countryCode }}
                        onChange={handleCountryCodeChange}
                        options={options}
                        className="appointment_phone_select w-48"
                        menuPlacement="top"
                      />

                      <Input
                        {...field}
                        type="tel"
                        id="phone"
                        placeholder="Phone number"
                        className="career_phone_input"
                      />
                      <InputRightAddon
                        children={
                          <Image
                            src={`data:image/png;base64,${countryFlag}`}
                            alt="Icon"
                          />
                        }
                      />
                    </InputGroup>
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
