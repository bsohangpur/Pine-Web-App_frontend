import React, { useEffect, useState } from "react";
import { Box, Text, useDisclosure } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAppointment } from "../redux/reducers/appointmentSlice";
import AppointmentCard from "./AppointmentCard";
import AppointmentPopup from "./AppointmentPopup";

const Dashboard = () => {
  const { appointments } = useSelector((state) => state.appointment);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAppointment());
  }, []);

  const handleAppointmentClick = (appointment) => {
    setSelectedAppointment(appointment);
    onOpen();
  };

  return (
    <Box className="flex p-4 justify-center items-center w-full">
      <Box className=" w-full mx-2 md:mx-0 md:w-4/5">
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Appointments
        </Text>
        <Box>
          {appointments.map((appointment) => (
            <AppointmentCard
              key={appointment.id}
              appointment={appointment}
              onClick={() => handleAppointmentClick(appointment)}
            />
          ))}
        </Box>
        {selectedAppointment && (
          <AppointmentPopup
            appointment={selectedAppointment}
            onClose={onClose}
            isOpen={isOpen}
          />
        )}
      </Box>
    </Box>
  );
};

export default Dashboard;
