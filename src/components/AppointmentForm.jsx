import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    Button,
    Select,
    Box,
    Text,
    Flex,
    Stack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa'

const procedures = {
    'pharmacy': [
        'Prescription Refill',
        'Medication Consultation',
    ],
    'doctor-consultancy': [
        'Dr. John Doe',
        'Dr. Jane Smith',
        'Dr. Bob Johnson',
        'Dr. Sally Thompson'
    ],
    'diagnostics-lab': [
        'Blood Test',
        'Urine Test',
        'X-Ray'
    ],
    'child-health-clinic': [
        'Well Child Check',
        'Immunizations',
        'Developmental Screening'
    ],
};

const departments = [{ label: 'Pharmacy', value: 'pharmacy' }, { label: 'Doctor Consultancy', value: 'doctor-consultancy' }, { label: 'Diagnostics Laboratory', value: 'diagnostics-lab' }, { label: 'Child Health Clinic', value: 'child-health-clinic' },];

const MedicalCenterSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    dob: Yup.date()
        .max(new Date(), 'Invalid date of birth')
        .required('Date of birth is required'),
    gender: Yup.string().required('Gender is required'),
    phone: Yup.string()
        .matches(/^\d{10}$/, 'Invalid phone number')
        .required('Phone number is required'),
    address: Yup.object().shape({
        street: Yup.string().required('Street is required'),
        line: Yup.string(),
    }),
    email: Yup.string()
        .email('Invalid email'),
    department: Yup.string().required("Department is required"),
    procedure: Yup.string().required('Procedure is required'),
    date: Yup.date()
        .min(new Date(), 'Invalid date')
        .required('Date is required'),
    time: Yup.string().required('Time is required'),
});

const DoctorAppointmentForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectedDepartment, setSelectedDepartment] = useState('');

    const handleSubmit = (values, actions) => {
        console.log(values);
        actions.setSubmitting(false);
        setIsSubmitting(false);
    };

    const handleDepartmentChange = (event) => {
        setSelectedDepartment(event.target.value);
    };

    return (
        <Box maxW={{ base: 'sm', md: 'md', lg: 'lg' }} mx="auto" my="10">
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    dob: '',
                    gender: '',
                    phone: '',
                    address: {
                        street: '',
                        line: '',
                        city: '',
                        state: '',
                        zipCode: '',
                    },
                    email: '',
                    department: '',
                    procedure: '',
                    date: '',
                    time: '',
                }}
                validationSchema={MedicalCenterSchema}
                onSubmit={handleSubmit}
            >
                {(formik) => (
                    <Form>
                        <Stack spacing="4">
                            <Flex gap={4} flexDirection={{ base: 'column', lg: 'row' }}>
                                <Field name="firstName">
                                    {({ field, form }) => (
                                        <FormControl
                                            isInvalid={form.errors.firstName && form.touched.firstName}
                                        >
                                            <FormLabel htmlFor="firstName">First name<span className=' text-red-700 text-sm'>*</span></FormLabel>
                                            <Input {...field} id="firstName" placeholder="First name" />
                                            <FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                                <Field name="lastName">
                                    {({ field, form }) => (
                                        <FormControl
                                            isInvalid={form.errors.lastName && form.touched.lastName}
                                        >
                                            <FormLabel htmlFor="lastName">Last name<span className=' text-red-700 text-sm'>*</span></FormLabel>
                                            <Input {...field} id="lastName" placeholder="Last name" />
                                            <FormErrorMessage>{form.errors.lastName}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                            </Flex>
                            <Field name="dob">
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.dob && form.touched.dob}>
                                        <FormLabel htmlFor="dob">Date of Birth<span className=' text-red-700 text-sm'>*</span></FormLabel>
                                        <Input {...field} id="dob" type="date" placeholder="Date of Birth" />
                                        <FormErrorMessage>{form.errors.dob}
                                        </FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Field name="gender">
                                {({ field, form }) => (
                                    <FormControl
                                        isInvalid={form.errors.gender && form.touched.gender}
                                    >
                                        <FormLabel htmlFor="gender">Gender<span className=' text-red-700 text-sm'>*</span></FormLabel>
                                        <Select {...field} id="gender" placeholder="Select Gender">
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </Select>
                                        <FormErrorMessage>{form.errors.gender}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Field name="phone">
                                {({ field, form }) => (
                                    <FormControl
                                        isInvalid={form.errors.phone && form.touched.phone}
                                    >
                                        <FormLabel htmlFor="phone">Phone<span className=' text-red-700 text-sm'>*</span></FormLabel>
                                        <Input {...field} id="phone" placeholder="Phone number" />
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
                                        <FormLabel htmlFor="address.street">Street<span className=' text-red-700 text-sm'>*</span></FormLabel>
                                        <Input {...field} id="address.street" placeholder="Street" />
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
                                        <Select
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
                                        </Select>
                                        <FormErrorMessage>{form.errors.department}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Field name="procedure">
                                {({ field, form }) => (
                                    <FormControl
                                        isInvalid={form.errors.procedure && form.touched.procedure}
                                    >
                                        <FormLabel htmlFor="procedure">Procedure</FormLabel>
                                        <Select
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
                                        </Select>
                                        <FormErrorMessage>{form.errors.procedure}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Field name="appointmentDate">
                                {({ field, form }) => (
                                    <FormControl
                                        isInvalid={
                                            form.errors.appointmentDate &&
                                            form.touched.appointmentDate
                                        }
                                    >
                                        <FormLabel htmlFor="appointmentDate">
                                            Appointment Date<span className=' text-red-700 text-sm'>*</span>
                                        </FormLabel>
                                        <Input
                                            {...field}
                                            type="date"
                                            id="appointmentDate"
                                            placeholder="YYYY-MM-DD"
                                        />
                                        <FormErrorMessage>
                                            {form.errors.appointmentDate}
                                        </FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Field name="appointmentTime">
                                {({ field, form }) => (
                                    <FormControl
                                        isInvalid={
                                            form.errors.appointmentTime &&
                                            form.touched.appointmentTime
                                        }
                                    >
                                        <FormLabel htmlFor="appointmentTime">
                                            Appointment Time<span className=' text-red-700 text-sm'>*</span>
                                        </FormLabel>
                                        <Input
                                            {...field}
                                            type="time"
                                            id="appointmentTime"
                                            placeholder="HH:MM"
                                        />
                                        <FormErrorMessage>
                                            {form.errors.appointmentTime}
                                        </FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Button
                                mt={8}
                                w="100%"
                                colorScheme="blue"
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
        </Box >
    )
};

export default DoctorAppointmentForm;










// import { useState } from 'react';
// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';
// import {
//     Box,
//     Button,
//     FormControl,
//     FormErrorMessage,
//     FormLabel,
//     Heading,
//     Input,
//     Stack,
//     Text,
//     Textarea,
//     useColorModeValue,
//     useBreakpointValue,
//     useToast,
//     Select,
//     InputGroup,
//     InputLeftElement
// } from '@chakra-ui/react';

// import { AiOutlineMail, AiFillPhone } from 'react-icons/ai'

// const AppointmentForm = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         message: '',
//         doctor: '',
//         date: new Date(),
//         time: new Date().toLocaleTimeString()
//     });

//     const [formErrors, setFormErrors] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         message: '',
//         doctor: '',
//         date: '',
//         time: ''
//     });

//     const toast = useToast();

//     const handleSubmit = (values, actions) => {
//         // Make API call to book appointment here
//         setFormData({
//             name: '',
//             email: '',
//             phone: '',
//             message: '',
//             doctor: '',
//             date: new Date(),
//             time: new Date().toLocaleTimeString()
//         });
//         actions.setSubmitting(false);
//         toast({
//             title: 'Appointment booked',
//             description: 'Your appointment has been successfully booked.',
//             status: 'success',
//             duration: 3000,
//             isClosable: true
//         });
//     };

//     const validationSchema = Yup.object().shape({
//         name: Yup.string().required('Name is required'),
//         email: Yup.string()
//             .email('Email is invalid')
//             .required('Email is required'),
//         phone: Yup.string()
//             .matches(/^[0-9]+$/, 'Phone number is invalid')
//             .required('Phone number is required'),
//         message: Yup.string().required('Message is required'),
//         doctor: Yup.string().required('Doctor is required'),
//         date: Yup.date().required('Date is required'),
//         time: Yup.string().required('Time is required')
//     });

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleDateChange = (date) => {
//         setFormData({
//             ...formData,
//             date: date
//         });
//     };

//     const handleTimeChange = (time) => {
//         setFormData({
//             ...formData,
//             time: time.toLocaleTimeString()
//         });
//     };

//     const formBgColor = useColorModeValue('white', 'gray.800');
//     const formBorderColor = useColorModeValue('gray.200', 'gray.600');
//     const textSize = useBreakpointValue({ base: 'lg', md: 'xl' });

//     const doctors = [
//         'Dr. John Doe',
//         'Dr. Jane Smith',
//         'Dr. Bob Johnson',
//         'Dr. Sally Thompson'
//     ];

//     return (
//         <Box w="100%"  borderColor={formBorderColor}>
//             <Heading mb={2} fontSize={textSize}>Book Appointment</Heading>
//             <Formik
//                 initialValues={formData}
//                 validationSchema={validationSchema}
//                 onSubmit={handleSubmit}
//             >

//                 {({ isSubmitting }) => (
//                     <Form className=' w-full'>
//                         <Stack spacing="4">
//                             <Field name="name">
//                                 {({ field, form }) => (
//                                     <FormControl isInvalid={form.errors.name && form.touched.name}>
//                                         <FormLabel htmlFor="name">Name</FormLabel>
//                                         <Input {...field} id="name" placeholder="Enter your name" />
//                                         <FormErrorMessage>{form.errors.name}</FormErrorMessage>
//                                     </FormControl>
//                                 )}
//                             </Field>
//                             <Field name="email">
//                                 {({ field, form }) => (
//                                     <FormControl isInvalid={form.errors.email && form.touched.email}>
//                                         <FormLabel htmlFor="email">Email</FormLabel>
//                                         <InputGroup>
//                                             <InputLeftElement
//                                                 pointerEvents='none'
//                                                 children={<AiOutlineMail color='gray.300' />}
//                                             />
//                                             <Input {...field} id="email" type='email' placeholder="Enter your email" />
//                                         </InputGroup>
//                                         <FormErrorMessage>{form.errors.email}</FormErrorMessage>
//                                     </FormControl>
//                                 )}
//                             </Field>

//                             <Field name="phone">
//                                 {({ field, form }) => (
//                                     <FormControl isInvalid={form.errors.phone && form.touched.phone}>
//                                         <FormLabel htmlFor="phone">Phone</FormLabel>
//                                         <InputGroup>
//                                             <InputLeftElement
//                                                 pointerEvents='none'
//                                                 children={<AiFillPhone color='gray.300' />}
//                                             />
//                                             <Input {...field} id="phone" type='tel' placeholder="Enter your phone number" />
//                                         </InputGroup>
//                                         <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
//                                     </FormControl>
//                                 )}
//                             </Field>

//                             <Field name="message">
//                                 {({ field, form }) => (
//                                     <FormControl isInvalid={form.errors.message && form.touched.message}>
//                                         <FormLabel htmlFor="message">Message</FormLabel>
//                                         <Textarea {...field} id="message" placeholder="Enter your message" />
//                                         <FormErrorMessage>{form.errors.message}</FormErrorMessage>
//                                     </FormControl>
//                                 )}
//                             </Field>

//                             <Field name="department">
//                                 {({ field, form }) => (
//                                     <FormControl isInvalid={form.errors.department && form.touched.department}>
//                                         <FormLabel htmlFor="department">Department</FormLabel>
//                                         <Select {...field} id="department" placeholder="Select department">
//                                             {doctors.map((doctor) => (
//                                                 <option key={doctor} value={doctor}>
//                                                     {doctor}
//                                                 </option>
//                                             ))}
//                                         </Select>
//                                         <FormErrorMessage>{form.errors.doctor}</FormErrorMessage>
//                                     </FormControl>
//                                 )}
//                             </Field>

//                             <Field name="doctor">
//                                 {({ field, form }) => (
//                                     <FormControl isInvalid={form.errors.doctor && form.touched.doctor}>
//                                         <FormLabel htmlFor="doctor">Doctor</FormLabel>
//                                         <Select {...field} id="doctor" placeholder="Select doctor">
//                                             {doctors.map((doctor) => (
//                                                 <option key={doctor} value={doctor}>
//                                                     {doctor}
//                                                 </option>
//                                             ))}
//                                         </Select>
//                                         <FormErrorMessage>{form.errors.doctor}</FormErrorMessage>
//                                     </FormControl>
//                                 )}
//                             </Field>

//                             <Field name="date">
//                                 {({ field, form }) => (
//                                     <FormControl isInvalid={form.errors.date && form.touched.date}>
//                                         <FormLabel htmlFor="date">Date</FormLabel>
//                                         <Input
//                                             placeholder="Select Date and Time"
//                                             size="md"
//                                             type="datetime-local"
//                                         />
//                                         <FormErrorMessage>{form.errors.date}</FormErrorMessage>
//                                     </FormControl>
//                                 )}
//                             </Field>
//                             <Button
//                                 type="submit"
//                                 isLoading={isSubmitting}
//                                 loadingText="Booking appointment..."
//                                 colorScheme="blue"
//                             >
//                                 Submit
//                             </Button>
//                         </Stack>
//                     </Form>
//                 )}
//             </Formik>
//         </Box>
//     );
// };

// export default AppointmentForm;
