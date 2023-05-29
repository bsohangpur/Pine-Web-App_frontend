import { Box, Heading, Text, useColorMode } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import { Autoplay } from "swiper";

import "swiper/swiper.min.css";


SwiperCore.use([Navigation]);

const testimonials = [
    {
        name: "John Doe",
        title: "CEO, Acme Inc.",
        text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget sapien quis neque facilisis posuere. Sed sed semper augue. Duis fringilla sapien vel leo dictum pharetra. Etiam a turpis felis. Duis id velit ac libero interdum fringilla.",
    },
    {
        name: "Jane Smith",
        title: "Marketing Manager, XYZ Corp.",
        text:
            "Ut bibendum ex vitae tincidunt tincidunt. Sed lacinia, dolor ut consectetur tincidunt, sapien magna sagittis mi, vel varius mauris leo in nulla. Fusce tincidunt ullamcorper nibh. Curabitur eu faucibus sapien. Duis euismod enim nec magna consectetur, a volutpat felis molestie.",
    },
    {
        name: "Bob Johnson",
        title: "CFO, 123 Industries",
        text:
            "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed bibendum pharetra enim eget elementum. Curabitur non elit malesuada, aliquam libero at, dictum lorem. Aliquam fringilla urna eget nulla aliquam, ac euismod mauris eleifend.",
    },
];

const SingleTestimonial = ({ testimonial }) => {
    const { colorMode } = useColorMode();
    const bg = { light: "white", dark: "gray.800" };
    const color = { light: "gray.700", dark: "gray.400" };
    const borderColor = { light: "gray.200", dark: "gray.600" };


    return (
        <Box
            p={8}
            borderWidth="1px"
            borderRadius="lg"
            borderColor={borderColor[colorMode]}
            bg={bg[colorMode]}
            color={color[colorMode]}
        >
            <Heading textTransform="capitalize" as="h3" size="md" mb={4}>
                {testimonial.name}
            </Heading>
            <Text fontSize="lg" mb={4}>
                {testimonial.title}
            </Text>
            <Text fontSize="md">{testimonial.text}</Text>
        </Box>
    );
};

const Testimonial = () => {

    return (
        <Box maxW="800px" mx="auto" my={16}>
            <Heading textTransform="capitalize" as="h2" my={10} size="lg" textAlign="center">What our Patient Say</Heading>
            <Swiper
                navigation={true}
                modules={[Autoplay]}
                autoplay={{ delay: 3000 }}
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <SingleTestimonial
                            testimonial={testimonial}
                            index={index}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default Testimonial;