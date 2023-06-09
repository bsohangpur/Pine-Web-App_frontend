import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Image,
  Select as Selects,
  Box,
  Flex,
  useToast,
  InputGroup,
  Stack,
  InputRightAddon,
} from "@chakra-ui/react";
import Select from "react-select";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { sendAppointment } from "../redux/reducers/appointmentSlice";
import { Error } from "../constants";
import { useNavigate } from "react-router-dom";
import { country_tel_code } from "../data";

const procedures = {
  pharmacy: ["Prescription Refill", "Medication Consultation"],
  "doctor-consultancy": [
    "Dr. John Doe",
    "Dr. Jane Smith",
    "Dr. Bob Johnson",
    "Dr. Sally Thompson",
  ],
  "diagnostics-lab": ["Blood Test", "Urine Test", "X-Ray"],
  "child-health-clinic": [
    "Well Child Check",
    "Immunizations",
    "Developmental Screening",
  ],
};

const departments = [
  { label: "Pharmacy", value: "pharmacy" },
  { label: "Doctor Consultancy", value: "doctor-consultancy" },
  { label: "Diagnostics Laboratory", value: "diagnostics-lab" },
  { label: "Child Health Clinic", value: "child-health-clinic" },
];

const currentDate = new Date();
currentDate.setDate(currentDate.getDate() - 1);
const maxDate = new Date();
maxDate.setMonth(maxDate.getMonth() + 1);

const MedicalCenterSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  dob: Yup.date()
    .max(new Date(), "Invalid date of birth")
    .required("Date of birth is required"),
  gender: Yup.string().required("Gender is required"),
  phone: Yup.string()
    .matches(/^[1-9]\d{9}$/, "Invalid phone number")
    .required("Phone number is required"),
  address: Yup.object().shape({
    street: Yup.string().required("Street is required"),
    line: Yup.string(),
  }),
  email: Yup.string().email("Invalid email"),
  department: Yup.string(),
  procedure: Yup.string(),
  date: Yup.date()
    .min(currentDate, "Invalid date, date cannot be in the past")
    .max(maxDate, "Date cannot be more than one month in the future")
    .required("Date is required"),
  time: Yup.string().required("Time is required"),
});

const DoctorAppointmentForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const { error } = useSelector((state) => state.appointment);
  const dispatch = useDispatch();
  const toast = useToast();
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

  const handleErrorMessage = (errors) => {
    Object.keys(errors).map((key) =>
      toast({
        title: `Fix error on field: ${
          key === "address" ? "STREET" : key.toUpperCase()
        }`,
        description: key === "address" ? errors[key].street : errors[key],
        position: "top-right",
        status: "warning",
        duration: 3000,
        isClosable: true,
      })
    );
  };

  const handleSubmit = (values, actions) => {
    try {
      const data = {
        first_name: values.firstName,
        last_name: values.lastName,
        date_of_birth: values.dob,
        gender: values.gender,
        phone: `${countryCode}${values.phone}`,
        street: values.address.street,
        line: values.address.line,
        email: values.email,
        department: values.department,
        procedure: values.procedure,
        date: values.date,
        time: values.time,
      };

      dispatch(sendAppointment(data));

      toast({
        title: "Your Appointment Request has been sent.",
        description: "Our team will contact you soon.",
        status: "success",
        duration: 7000,
        position: "top",
        isClosable: true,
      });

      actions.setSubmitting(false);
      setIsSubmitting(false);
      actions.resetForm();
      navigation("/");
    } catch (error) {
      toast({
        title: "Failed to send hiring request.",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  if (error) {
    return <Error route="Refresh" path="/appointment-form" message={error} />;
  }

  return (
    <Box maxW={{ base: "sm", md: "md", lg: "lg" }} mx="auto" my="10">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          dob: "",
          gender: "",
          phone: "",
          address: {
            street: "",
            line: "",
            city: "",
            state: "",
            zipCode: "",
          },
          email: "",
          department: "",
          procedure: "",
          date: "",
          time: "",
        }}
        validationSchema={MedicalCenterSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form>
            <Stack spacing="4">
              <Flex gap={4} flexDirection={{ base: "column", lg: "row" }}>
                <Field name="firstName">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={
                        form.errors.firstName && form.touched.firstName
                      }
                    >
                      <FormLabel htmlFor="firstName">
                        First name
                        <span className=" text-red-700 text-sm">*</span>
                      </FormLabel>
                      <Input
                        {...field}
                        id="firstName"
                        placeholder="First name"
                      />
                      <FormErrorMessage>
                        {form.errors.firstName}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="lastName">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.lastName && form.touched.lastName}
                    >
                      <FormLabel htmlFor="lastName">
                        Last name
                        <span className=" text-red-700 text-sm">*</span>
                      </FormLabel>
                      <Input {...field} id="lastName" placeholder="Last name" />
                      <FormErrorMessage>
                        {form.errors.lastName}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              </Flex>
              <Field name="dob">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.dob && form.touched.dob}>
                    <FormLabel htmlFor="dob">
                      Date of Birth
                      <span className=" text-red-700 text-sm">*</span>
                    </FormLabel>
                    <Input
                      {...field}
                      id="dob"
                      type="date"
                      placeholder="Date of Birth"
                    />
                    <FormErrorMessage>{form.errors.dob}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="gender">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.gender && form.touched.gender}
                  >
                    <FormLabel htmlFor="gender">
                      Gender<span className=" text-red-700 text-sm">*</span>
                    </FormLabel>
                    <Selects {...field} id="gender" placeholder="Select Gender">
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </Selects>
                    <FormErrorMessage>{form.errors.gender}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="phone">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.phone && form.touched.phone}
                  >
                    <FormLabel htmlFor="phone">
                      Phone<span className=" text-red-700 text-sm">*</span>
                    </FormLabel>
                    <InputGroup>
                      {/* <Select
                        value={countryCode}
                        onChange={handleCountryCodeChange}
                        maxWidth="90px"
                        list="country_list"
                        className="appointment_phone_select"
                      >
                        <datalist id="country_list">
                        {country_tel_code.map((country, index) => (
                          <option
                            key={country.name + index}
                            value={
                              country.flag + "////+////" + country.dial_code
                            }
                          >
                            {country.dial_code}
                          </option>
                        ))}
                        </datalist>
                      </Select> */}

                      <Select
                        value={{ value: countryCode, label: countryCode }}
                        onChange={handleCountryCodeChange}
                        options={options}
                        className="appointment_phone_select w-48"
                        menuPlacement="top"
                      />

                      {/* <Input list="country_list" id="phone" />
                      
                        {country_tel_code.map((country, index) => (
                          <option
                            key={country.name + index}
                            value={`${country.name} ${country.code}`}
                          >
                            {country.dial_code}
                          </option>
                        ))}
                      </datalist> */}

                      <Input
                        {...field}
                        type="tel"
                        id="phone"
                        placeholder="Phone number"
                        className="appointment_phone_input"
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
              <Field name="address.street">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.address &&
                      form.errors.address.street &&
                      form.touched.address &&
                      form.touched.address.street
                    }
                  >
                    <FormLabel htmlFor="address.street">
                      Street<span className=" text-red-700 text-sm">*</span>
                    </FormLabel>
                    <Input
                      {...field}
                      id="address.street"
                      placeholder="Street"
                    />
                    <FormErrorMessage>
                      {form.errors.address && form.errors.address.street}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="address.line">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.address &&
                      form.errors.address.line &&
                      form.touched.address &&
                      form.touched.address.line
                    }
                  >
                    <FormLabel htmlFor="address.line">Line</FormLabel>
                    <Input {...field} id="address.line" placeholder="Line" />
                    <FormErrorMessage>
                      {form.errors.address && form.errors.address.line}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="email">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.email && form.touched.email}
                  >
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input {...field} id="email" placeholder="email address" />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="department">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.department && form.touched.department
                    }
                  >
                    <FormLabel htmlFor="department">Department</FormLabel>
                    <Selects
                      {...field}
                      id="department"
                      placeholder="Select department"
                      onChange={(e) => {
                        handleDepartmentChange(e);
                        form.handleChange(e);
                      }}
                    >
                      {departments.map((department) => (
                        <option key={department.value} value={department.value}>
                          {department.label}
                        </option>
                      ))}
                    </Selects>
                    <FormErrorMessage>
                      {form.errors.department}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="procedure">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.procedure && form.touched.procedure}
                  >
                    <FormLabel htmlFor="procedure">Procedure</FormLabel>
                    <Selects
                      {...field}
                      id="procedure"
                      placeholder="Select procedure"
                      disabled={!selectedDepartment}
                    >
                      {selectedDepartment &&
                        procedures[selectedDepartment].map((procedure) => (
                          <option key={procedure} value={procedure}>
                            {procedure}
                          </option>
                        ))}
                    </Selects>
                    <FormErrorMessage>{form.errors.procedure}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="date">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.date && form.touched.date}
                  >
                    <FormLabel htmlFor="date">
                      Appointment Date
                      <span className=" text-red-700 text-sm">*</span>
                    </FormLabel>
                    <Input
                      {...field}
                      type="date"
                      id="date"
                      placeholder="YYYY-MM-DD"
                    />
                    <FormErrorMessage>{form.errors.date}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="time">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.time && form.touched.time}
                  >
                    <FormLabel htmlFor="time">
                      Appointment Time
                      <span className=" text-red-700 text-sm">*</span>
                    </FormLabel>
                    <Input
                      {...field}
                      type="time"
                      id="time"
                      placeholder="HH:MM"
                    />
                    <FormErrorMessage>{form.errors.time}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Button
                mt={8}
                w="100%"
                colorScheme="blue"
                onClick={() => handleErrorMessage(formik.errors)}
                isLoading={isSubmitting}
                type="submit"
                leftIcon={<FaPlus />}
                disabled={!formik.isValid || isSubmitting}
              >
                Book Appointment
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default DoctorAppointmentForm;
