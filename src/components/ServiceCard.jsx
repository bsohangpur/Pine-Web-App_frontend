import { Box, Heading, Text, SimpleGrid, useColorModeValue, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import CropText from '../constants/CropText';
import { Doctor_Consultation, Diagnostics_Laboratory, Pharmacy, Child_health_clinic } from '../assets'
import { NavLink } from 'react-router-dom';

const gallery = [
    {
        id: 1,
        title: 'Doctor Consultation',
        description: 'We Provide Specialists trained Doctors for an emergencies, Connect instantly with a 24x7 specialist or choose to video visit a particular doctor., storage and administration of medications, Leading Healthcare Providers exclusion policy, and employee health policy and Many More	.',
        imageUrl: Doctor_Consultation,
        url: "",
    },
    {
        id: 2,
        title: 'Pharmacy',
        description: "We offer a wide range of services in Pharmacy and also, we have Stocking a variety of natural products, we participate in community events. we Provide excellent customer service. This should be our top priority, and it's the key to retaining customers for the long term. Our staff is well trained on the importance of providing excellent customer service at all times.",
        imageUrl: Pharmacy,
        url: "",
    },
    {
        id: 3,
        title: 'Diagnostics Laboratory',
        description: 'We perform wide range of diagnostic testing, reference testing, and disease surveillance. We also provide emergency response support, perform applied research, and provide training for laboratory personnel.',
        imageUrl: Diagnostics_Laboratory,
        url: "",
    },
    {
        id: 4,
        title: 'Child health clinic',
        description: 'A special clinic for the routine care of infants and preschool children. The service provides screening tests for such conditions as congenital dislocation of hips, suppressed squint, and impaired speech and/or hearing, education for mothers (especially those having their first child) in feeding techniques and hygiene, and immunizations against infectious diseases. We best child care provider in our city we provides supervision and care for childrens.',
        imageUrl: Child_health_clinic,
        url: "",
    },
];

const Card = ({ title, description, imageUrl }) => {
    const bg = useColorModeValue('white', 'gray.700');
    const textColor = useColorModeValue('gray.800', 'white');
    const bodytextColor = useColorModeValue('gray.600', 'gray.200');

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
            <Box
                p={6}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                bg={bg}
                _hover={{ boxShadow: 'lg', transform: 'translateY(-5px)' }}
                transition="all 0.3s ease"
            >
                <Box height="200px" width="100%" bg={`url(${imageUrl}) center center / cover no-repeat`} />
                <Box mt="4">
                    <Heading textTransform="capitalize" size="md" color={textColor}>
                        {title}
                    </Heading>
                    <Text mt="2" color={bodytextColor}>
                        <CropText text={description} />
                    </Text>
                </Box>
            </Box>
        </motion.div>
    );
};

const ServiceCard = () => {
    const textColor = useColorModeValue('gray.800', 'white');

    return (
        <Box bg={useColorModeValue('gray.100', 'gray.800')} py={10}>
            <Heading as="h3" size="xl" mb="6" textAlign="center" color={textColor}>
                Our Services
            </Heading>
            <SimpleGrid columns={[1, 2, 3, 4]} gap={10} mx={[4, 6, 10]} justifyContent="center">
                {gallery.map((card) => (
                    <Card key={card.id} title={card.title} description={card.description} imageUrl={card.imageUrl} />
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default ServiceCard;
