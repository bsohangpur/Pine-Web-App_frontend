// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';
// import {
//   FormControl,
//   FormLabel,
//   Input,
//   FormErrorMessage,
//   Button,
//   Select,
//   Box,
//   Text,
//   Flex,
//   Stack,
// } from '@chakra-ui/react';
// import { useState } from 'react';
// import { FaPlus } from 'react-icons/fa'

// const departments = [{ label: 'Pharmacy', value: 'pharmacy' }, { label: 'Doctor Consultancy', value: 'doctor-consultancy' }, { label: 'Diagnostics Laboratory', value: 'diagnostics-lab' }, { label: 'Child Health Clinic', value: 'child-health-clinic' },];

// const procedures = {
//   'pharmacy': [
//     'Prescription Refill',
//     'Medication Consultation',
//   ],
//   'doctor-consultancy': [
//     'Dr. John Doe',
//     'Dr. Jane Smith',
//     'Dr. Bob Johnson',
//     'Dr. Sally Thompson'
//   ],
//   'diagnostics-lab': [
//     'Blood Test',
//     'Urine Test',
//     'X-Ray'
//   ],
//   'child-health-clinic': [
//     'Well Child Check',
//     'Immunizations',
//     'Developmental Screening'
//   ],
// };

// const MedicalCenterSchema = Yup.object().shape({
//   department: Yup.string().required("Department is required"),
//   procedure: Yup.string().required('Procedure is required'),
// });

// const DoctorAppointmentForm = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [selectedDepartment, setSelectedDepartment] = useState('');

//   const handleSubmit = (values, actions) => {
//     console.log(values);
//     actions.setSubmitting(false);
//     setIsSubmitting(false);
//   };

//   const handleDepartmentChange = (event) => {
//     setSelectedDepartment(event.target.value);
//   };

//   return (
//     <Box maxW={{ base: 'sm', md: 'md', lg: 'lg' }} mx="auto" my="10">
//       <Formik
//         initialValues={{
//           department: '',
//           procedure: '',

//         }}
//         validationSchema={MedicalCenterSchema}
//         onSubmit={handleSubmit}
//       >
//         {(formik) => (
//           <Form>
//             <Stack spacing="4">
//               <Flex gap={4} flexDirection={{ base: 'column', md: 'row' }}>
//                 <Field name="department">
//                   {({ field, form }) => (
//                     <FormControl
//                       isInvalid={
//                         form.errors.department && form.touched.department
//                       }
//                     >
//                       <FormLabel htmlFor="department">Department</FormLabel>
//                       <Select
//                         {...field}
//                         id="department"
//                         placeholder="Select department"
//                         onChange={(e) => {
//                           handleDepartmentChange(e);
//                           form.handleChange(e);
//                         }}
//                       >
//                         {departments.map((department) => (
//                           <option key={department.value} value={department.value}>
//                             {department.label}
//                           </option>
//                         ))}
//                       </Select>
//                       <FormErrorMessage>{form.errors.department}</FormErrorMessage>
//                     </FormControl>
//                   )}
//                 </Field>
//                 <Field name="procedure">
//                   {({ field, form }) => (
//                     <FormControl
//                       isInvalid={form.errors.procedure && form.touched.procedure}
//                     >
//                       <FormLabel htmlFor="procedure">Procedure</FormLabel>
//                       <Select
//                         {...field}
//                         id="procedure"
//                         placeholder="Select procedure"
//                         disabled={!selectedDepartment}
//                       >
//                         {selectedDepartment &&
//                           procedures[selectedDepartment].map((procedure) => (
//                             <option key={procedure} value={procedure}>
//                               {procedure}
//                             </option>
//                           ))}
//                       </Select>
//                       <FormErrorMessage>{form.errors.procedure}</FormErrorMessage>
//                     </FormControl>
//                   )}
//                 </Field>
//               </Flex>
//               <Button
//                 type="submit"
//                 colorScheme="blue"
//                 isLoading={formik.isSubmitting}
//                 disabled={!formik.isValid || isSubmitting}
//               >
//                 <FaPlus /> Add Appointment
//               </Button>
//             </Stack>
//           </Form>
//         )}
//       </Formik>
//     </Box>
//   );
// };

// export default DoctorAppointmentForm;










// // import { useState } from "react";
// // import {
// //   Box,
// //   Button,
// //   FormControl,
// //   FormErrorMessage,
// //   FormLabel,
// //   Heading,
// //   Input,
// //   Select,
// //   Text,
// //   VStack,
// // } from "@chakra-ui/react";
// // import { FaPlus } from "react-icons/fa";
// // import { Formik, Form, Field } from "formik";
// // import * as Yup from "yup";

// // const initialValues = {
// //   name: "",
// //   email: "",
// //   phone: "",
// //   department: "",
// //   appointmentDate: "",
// //   appointmentTime: "",
// // };

// // const validationSchema = Yup.object().shape({
// //   name: Yup.string().required("Name is required"),
// //   email: Yup.string().email("Invalid email").required("Email is required"),
// //   phone: Yup.string()
// //     .matches(/^\d+$/, "Invalid phone number")
// //     .required("Phone number is required"),
// //   department: Yup.string().required("Department is required"),
// //   appointmentDate: Yup.date().required("Date is required"),
// //   appointmentTime: Yup.string().required("Time is required"),
// // });

// // const SpacificForm = () => {
// //   const [isSubmitting, setIsSubmitting] = useState(false);

// //   const handleSubmit = async (values) => {
// //     setIsSubmitting(true);
// //     // Replace with your own API call or form submission logic
// //     console.log(values);
// //     setIsSubmitting(false);
// //   };

// //   return (
// //     <Box py={8}>
// //       <Box maxW="md" mx="auto">
// //         <Heading textAlign="center" size="xl" fontWeight="bold">
// //           Book an Appointment
// //         </Heading>
// //         <Text mt={4} mb={8} align="center">
// //           Please fill out the form below to book an appointment.
// //         </Text>
// //         <Formik
// //           initialValues={initialValues}
// //           validationSchema={validationSchema}
// //           onSubmit={handleSubmit}
// //         >
// //           {(formik) => (
// //             <Form>
// //               <VStack spacing={4}>
// //                 <Field name="name">
// //                   {({ field, form }) => (
// //                     <FormControl
// //                       isInvalid={form.errors.name && form.touched.name}
// //                     >
// //                       <FormLabel htmlFor="name">Name</FormLabel>
// //                       <Input {...field} id="name" placeholder="John Doe" />
// //                       <FormErrorMessage>{form.errors.name}</FormErrorMessage>
// //                     </FormControl>
// //                   )}
// //                 </Field>
// //                 <Field name="email">
// //                   {({ field, form }) => (
// //                     <FormControl
// //                       isInvalid={form.errors.email && form.touched.email}
// //                     >
// //                       <FormLabel htmlFor="email">Email</FormLabel>
// //                       <Input
// //                         {...field}
// //                         type="email"
// //                         id="email"
// //                         placeholder="johndoe@example.com"
// //                       />
// //                       <FormErrorMessage>{form.errors.email}</FormErrorMessage>
// //                     </FormControl>
// //                   )}
// //                 </Field>
// //                 <Field name="phone">
// //                   {({ field, form }) => (
// //                     <FormControl
// //                       isInvalid={form.errors.phone && form.touched.phone}
// //                     >
// //                       <FormLabel htmlFor="phone">Phone</FormLabel>
// //                       <Input {...field} id="phone" placeholder="555-555-5555" />
// //                       <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
// //                     </FormControl>
// //                   )}
// //                 </Field>
// //                 <Field name="department">
// //                   {({ field, form }) => (
// //                     <FormControl
// //                       isInvalid={
// //                         form.errors.department && form.touched.department
// //                       }
// //                     >
// //                       <FormLabel htmlFor="department">Department</FormLabel>
// //                       <Select
// //                         {...field}
// //                         id="department"
// //                         placeholder="Select department"
// //                       >
// //                         <option value="pharmacy">Pharmacy</option>
// //                         <option value="doctor-consultancy">
// //                           Doctor Consultancy
// //                         </option>
// //                         <option value="diagnostics-lab">
// //                           Diagnostics Laboratory
// //                         </option>
// //                         <option value="child-health-clinic">
// //                           Child Health Clinic
// //                         </option>
// //                       </Select>
// //                       <FormErrorMessage>
// //                         {form.errors.department}
// //                       </FormErrorMessage>
// //                     </FormControl>
// //                   )}
// //                 </Field>
// //                 <Field name="appointmentDate">
// //                   {({ field, form }) => (
// //                     <FormControl
// //                       isInvalid={
// //                         form.errors.appointmentDate &&
// //                         form.touched.appointmentDate
// //                       }
// //                     >
// //                       <FormLabel htmlFor="appointmentDate">
// //                         Appointment Date
// //                       </FormLabel>
// //                       <Input
// //                         {...field}
// //                         type="date"
// //                         id="appointmentDate"
// //                         placeholder="YYYY-MM-DD"
// //                       />
// //                       <FormErrorMessage>
// //                         {form.errors.appointmentDate}
// //                       </FormErrorMessage>
// //                     </FormControl>
// //                   )}
// //                 </Field>
// //                 <Field name="appointmentTime">
// //                   {({ field, form }) => (
// //                     <FormControl
// //                       isInvalid={
// //                         form.errors.appointmentTime &&
// //                         form.touched.appointmentTime
// //                       }
// //                     >
// //                       <FormLabel htmlFor="appointmentTime">
// //                         Appointment Time
// //                       </FormLabel>
// //                       <Input
// //                         {...field}
// //                         type="time"
// //                         id="appointmentTime"
// //                         placeholder="HH:MM"
// //                       />
// //                       <FormErrorMessage>
// //                         {form.errors.appointmentTime}
// //                       </FormErrorMessage>
// //                     </FormControl>
// //                   )}
// //                 </Field>
// //                 <Button
// //                   mt={8}
// //                   w="100%"
// //                   colorScheme="blue"
// //                   isLoading={isSubmitting}
// //                   type="submit"
// //                   leftIcon={<FaPlus />}
// //                   disabled={!formik.isValid || isSubmitting}
// //                 >
// //                   Book Appointment
// //                 </Button>
// //               </VStack>
// //             </Form>
// //           )}
// //         </Formik>
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default SpacificForm;
