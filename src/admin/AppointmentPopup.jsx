// import React from "react";
// import {
//   Box,
//   Button,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalCloseButton,
//   ModalBody,
//   Text,
//   Heading,
//   Divider,
// } from "@chakra-ui/react";

// const AppointmentPopup = ({ appointment, onClose, isOpen }) => {
//   return (
//     <Modal isOpen={isOpen} onClose={onClose} size="sm">
//       <ModalOverlay />
//       <ModalContent>
//         <ModalHeader>{`${appointment.first_name} ${appointment.last_name}`}</ModalHeader>
//         <ModalCloseButton />
//         <ModalBody>
//           <Box className=" mb-2">
//             <Heading as="h5" size="md">
//               Date & Time of Appointment
//             </Heading>
//             <Text className=" capitalize">Date: {appointment.date}</Text>
//             <Text className=" capitalize">Time: {appointment.time}</Text>
//             <Divider />
//           </Box>
//           <Box className=" mb-2">
//             <Heading as="h5" size="md">
//               Patient Contact Detail
//             </Heading>
//             <Text className=" capitalize">Mail: {appointment.email}</Text>
//             <Text className=" capitalize">Phone: {appointment.phone}</Text>
//             <Divider />
//           </Box>
//           <Box className=" mb-2">
//             <Heading as="h5" size="md">
//               Patient Detail
//             </Heading>
//             <Text className=" capitalize">
//               Date Of Birth: {appointment.date_of_birth}
//             </Text>
//             <Text className=" capitalize">Gender: {appointment.gender}</Text>
//             <Text className=" capitalize">Street: {appointment.street}</Text>
//             <Text className=" capitalize">Line: {appointment.line}</Text>
//             <Divider />
//           </Box>
//           <Box className=" mb-2">
//             <Heading as="h5" size="md">
//               Department & Procedure
//             </Heading>
//             <Text className=" capitalize">
//               Department: {appointment.department}
//             </Text>
//             <Text className=" capitalize">
//               Procedure: {appointment.procedure}
//             </Text>
//             <Divider />
//           </Box>
//         </ModalBody>
//         <Button mt={4} onClick={onClose}>
//           Close
//         </Button>
//       </ModalContent>
//     </Modal>
//   );
// };

// export default AppointmentPopup;
