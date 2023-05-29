// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';
// import {
//     FormControl,
//     FormLabel,
//     Input,
//     FormErrorMessage,
//     Button,
//     Select,
//     Box,
//     Text,
//     Flex,
//     Stack,
// } from '@chakra-ui/react';
// import { useState } from 'react';
// import { FaPlus } from 'react-icons/fa'

// const procedures = {
//     'pharmacy': [
//         'Prescription Refill',
//         'Medication Consultation',
//     ],
//     'doctor-consultancy': [
//         'Dr. John Doe',
//         'Dr. Jane Smith',
//         'Dr. Bob Johnson',
//         'Dr. Sally Thompson'
//     ],
//     'diagnostics-lab': [
//         'Blood Test',
//         'Urine Test',
//         'X-Ray'
//     ],
//     'child-health-clinic': [
//         'Well Child Check',
//         'Immunizations',
//         'Developmental Screening'
//     ],
// };

// const departments = [{ label: 'Pharmacy', value: 'pharmacy' }, { label: 'Doctor Consultancy', value: 'doctor-consultancy' }, { label: 'Diagnostics Laboratory', value: 'diagnostics-lab' }, { label: 'Child Health Clinic', value: 'child-health-clinic' },];

// const MedicalCenterSchema = Yup.object().shape({
//     firstName: Yup.string().required('First name is required'),
//     lastName: Yup.string().required('Last name is required'),
//     dob: Yup.date()
//         .max(new Date(), 'Invalid date of birth')
//         .required('Date of birth is required'),
//     gender: Yup.string().required('Gender is required'),
//     phone: Yup.string()
//         .matches(/^\d{10}$/, 'Invalid phone number')
//         .required('Phone number is required'),
//     address: Yup.object().shape({
//         street: Yup.string().required('Street is required'),
//         line: Yup.string(),
//     }),
//     email: Yup.string()
//         .email('Invalid email'),
//     department: Yup.string().required("Department is required"),
//     procedure: Yup.string().required('Procedure is required'),
//     date: Yup.date()
//         .min(new Date(), 'Invalid date')
//         .required('Date is required'),
//     time: Yup.string().required('Time is required'),
// });

// const DoctorAppointmentForm = () => {
//     const [isSubmitting, setIsSubmitting] = useState(false);

//     const handleSubmit = (values, actions) => {
//         console.log(values);
//         actions.setSubmitting(false);
//         setIsSubmitting(false);
//     };

//     return (
//         <Box maxW={{ base: 'sm', md: 'md', lg: 'lg' }} mx="auto" my="10">
//             <Formik
//                 initialValues={{
//                     firstName: '',
//                     lastName: '',
//                     dob: '',
//                     gender: '',
//                     phone: '',
//                     address: {
//                         street: '',
//                         line: '',
//                         city: '',
//                         state: '',
//                         zipCode: '',
//                     },
//                     email: '',
//                     department: '',
//                     procedure: '',
//                     date: '',
//                     time: '',
//                 }}
//                 validationSchema={MedicalCenterSchema}
//                 onSubmit={handleSubmit}
//             >
//                 {(formik) => (
//                     <Form>
//                         <Stack spacing="4">
//                             <Flex gap={4} flexDirection={{ base: 'column', lg: 'row' }}>
//                                 <Field name="firstName">
//                                     {({ field, form }) => (
//                                         <FormControl
//                                             isInvalid={form.errors.firstName && form.touched.firstName}
//                                         >
//                                             <FormLabel htmlFor="firstName">First name<span className=' text-red-700 text-sm'>*</span></FormLabel>
//                                             <Input {...field} id="firstName" placeholder="First name" />
//                                             <FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
//                                         </FormControl>
//                                     )}
//                                 </Field>
//                                 <Field name="lastName">
//                                     {({ field, form }) => (
//                                         <FormControl
//                                             isInvalid={form.errors.lastName && form.touched.lastName}
//                                         >
//                                             <FormLabel htmlFor="lastName">Last name<span className=' text-red-700 text-sm'>*</span></FormLabel>
//                                             <Input {...field} id="lastName" placeholder="Last name" />
//                                             <FormErrorMessage>{form.errors.lastName}</FormErrorMessage>
//                                         </FormControl>
//                                     )}
//                                 </Field>
//                             </Flex>
//                             <Field name="dob">
//                                 {({ field, form }) => (
//                                     <FormControl isInvalid={form.errors.dob && form.touched.dob}>
//                                         <FormLabel htmlFor="dob">Date of Birth<span className=' text-red-700 text-sm'>*</span></FormLabel>
//                                         <Input {...field} id="dob" type="date" placeholder="Date of Birth" />
//                                         <FormErrorMessage>{form.errors.dob}
//                                         </FormErrorMessage>
//                                     </FormControl>
//                                 )}
//                             </Field>
//                             <Field name="gender">
//                                 {({ field, form }) => (
//                                     <FormControl
//                                         isInvalid={form.errors.gender && form.touched.gender}
//                                     >
//                                         <FormLabel htmlFor="gender">Gender<span className=' text-red-700 text-sm'>*</span></FormLabel>
//                                         <Select {...field} id="gender" placeholder="Select Gender">
//                                             <option value="male">Male</option>
//                                             <option value="female">Female</option>
//                                             <option value="other">Other</option>
//                                         </Select>
//                                         <FormErrorMessage>{form.errors.gender}</FormErrorMessage>
//                                     </FormControl>
//                                 )}
//                             </Field>
//                             <Field name="phone">
//                                 {({ field, form }) => (
//                                     <FormControl
//                                         isInvalid={form.errors.phone && form.touched.phone}
//                                     >
//                                         <FormLabel htmlFor="phone">Phone<span className=' text-red-700 text-sm'>*</span></FormLabel>
//                                         <Input {...field} id="phone" placeholder="Phone number" />
//                                         <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
//                                     </FormControl>
//                                 )}
//                             </Field>
//                             <Field name="address.street">
//                                 {({ field, form }) => (
//                                     <FormControl
//                                         isInvalid={
//                                             form.errors.address &&
//                                             form.errors.address.street &&
//                                             form.touched.address &&
//                                             form.touched.address.street
//                                         }
//                                     >
//                                         <FormLabel htmlFor="address.street">Street<span className=' text-red-700 text-sm'>*</span></FormLabel>
//                                         <Input {...field} id="address.street" placeholder="Street" />
//                                         <FormErrorMessage>
//                                             {form.errors.address && form.errors.address.street}
//                                         </FormErrorMessage>
//                                     </FormControl>
//                                 )}
//                             </Field>
//                             <Field name="address.line">
//                                 {({ field, form }) => (
//                                     <FormControl
//                                         isInvalid={
//                                             form.errors.address &&
//                                             form.errors.address.line &&
//                                             form.touched.address &&
//                                             form.touched.address.line
//                                         }
//                                     >
//                                         <FormLabel htmlFor="address.line">Line</FormLabel>
//                                         <Input {...field} id="address.line" placeholder="Line" />
//                                         <FormErrorMessage>
//                                             {form.errors.address && form.errors.address.line}
//                                         </FormErrorMessage>
//                                     </FormControl>
//                                 )}
//                             </Field>
//                             <Field name="email">
//                                 {({ field, form }) => (
//                                     <FormControl
//                                         isInvalid={form.errors.email && form.touched.email}
//                                     >
//                                         <FormLabel htmlFor="email">Email</FormLabel>
//                                         <Input {...field} id="email" placeholder="email address" />
//                                         <FormErrorMessage>{form.errors.email}</FormErrorMessage>
//                                     </FormControl>
//                                 )}
//                             </Field>
//                             <Field name="department">
//                                 {({ field, form }) => (
//                                     <FormControl
//                                         isInvalid={
//                                             form.errors.department && form.touched.department
//                                         }
//                                     >
//                                         <FormLabel htmlFor="department">Department</FormLabel>
//                                         <Select
//                                             {...field}
//                                             id="department"
//                                             placeholder="Select department"
//                                             onChange={(e) => {
//                                                 handleDepartmentChange(e);
//                                                 form.handleChange(e);
//                                             }}
//                                         >
//                                             {departments.map((department) => (
//                                                 <option key={department.value} value={department.value}>
//                                                     {department.label}
//                                                 </option>
//                                             ))}
//                                         </Select>
//                                         <FormErrorMessage>{form.errors.department}</FormErrorMessage>
//                                     </FormControl>
//                                 )}
//                             </Field>
//                             <Field name="procedure">
//                                 {({ field, form }) => (
//                                     <FormControl
//                                         isInvalid={form.errors.procedure && form.touched.procedure}
//                                     >
//                                         <FormLabel htmlFor="procedure">Procedure</FormLabel>
//                                         <Select
//                                             {...field}
//                                             id="procedure"
//                                             placeholder="Select procedure"
//                                             disabled={!selectedDepartment}
//                                         >
//                                             {selectedDepartment &&
//                                                 procedures[selectedDepartment].map((procedure) => (
//                                                     <option key={procedure} value={procedure}>
//                                                         {procedure}
//                                                     </option>
//                                                 ))}
//                                         </Select>
//                                         <FormErrorMessage>{form.errors.procedure}</FormErrorMessage>
//                                     </FormControl>
//                                 )}
//                             </Field>
//                             <Field name="appointmentDate">
//                                 {({ field, form }) => (
//                                     <FormControl
//                                         isInvalid={
//                                             form.errors.appointmentDate &&
//                                             form.touched.appointmentDate
//                                         }
//                                     >
//                                         <FormLabel htmlFor="appointmentDate">
//                                             Appointment Date<span className=' text-red-700 text-sm'>*</span>
//                                         </FormLabel>
//                                         <Input
//                                             {...field}
//                                             type="date"
//                                             id="appointmentDate"
//                                             placeholder="YYYY-MM-DD"
//                                         />
//                                         <FormErrorMessage>
//                                             {form.errors.appointmentDate}
//                                         </FormErrorMessage>
//                                     </FormControl>
//                                 )}
//                             </Field>
//                             <Field name="appointmentTime">
//                                 {({ field, form }) => (
//                                     <FormControl
//                                         isInvalid={
//                                             form.errors.appointmentTime &&
//                                             form.touched.appointmentTime
//                                         }
//                                     >
//                                         <FormLabel htmlFor="appointmentTime">
//                                             Appointment Time<span className=' text-red-700 text-sm'>*</span>
//                                         </FormLabel>
//                                         <Input
//                                             {...field}
//                                             type="time"
//                                             id="appointmentTime"
//                                             placeholder="HH:MM"
//                                         />
//                                         <FormErrorMessage>
//                                             {form.errors.appointmentTime}
//                                         </FormErrorMessage>
//                                     </FormControl>
//                                 )}
//                             </Field>
//                             <Button
//                                 mt={8}
//                                 w="100%"
//                                 colorScheme="blue"
//                                 isLoading={isSubmitting}
//                                 type="submit"
//                                 leftIcon={<FaPlus />}
//                                 disabled={!formik.isValid || isSubmitting}
//                             >
//                                 Book Appointment
//                             </Button>
//                         </Stack>
//                     </Form>
//                 )}
//             </Formik>
//         </Box >
//     )
// };

// export default DoctorAppointmentForm;