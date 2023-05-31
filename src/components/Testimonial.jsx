import { Box, Heading, Text, useColorMode } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import { Autoplay } from "swiper";

import "swiper/swiper.min.css";

SwiperCore.use([Navigation]);

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
        {testimonial.title}
      </Heading>
      <Text fontSize="lg" mb={4}>
        {testimonial.position}
      </Text>
      <Text fontSize="md">{testimonial.message}</Text>
    </Box>
  );
};

const Testimonial = ({ data }) => {
  return (
    <Box maxW="800px" mx="auto" my={16}>
      <Heading
        textTransform="capitalize"
        as="h2"
        my={10}
        size="lg"
        textAlign="center"
      >
        What our Patient Say
      </Heading>
      <Swiper navigation={true} modules={[Autoplay]} autoplay={{ delay: 3000 }}>
        {data.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <SingleTestimonial testimonial={testimonial} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Testimonial;
