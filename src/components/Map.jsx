import { Box, Flex, ScaleFade, Heading, useColorModeValue, useBreakpointValue } from "@chakra-ui/react";

const Map = () => {
  const bg = useColorModeValue("gray.200", "gray.700");
  const textSize = useBreakpointValue({ base: 'lg', md: 'xl' });
  const mx = useBreakpointValue({
    base: 2,
    md: 4,
    lg: 6,
  });

  return (
    <Box mx={mx}>
      <Heading fontSize={textSize}>Reach Us</Heading>
      <Flex mt={6} justifyContent="center" className="h-full w-full">
        <ScaleFade initialScale={0.9} in={true}>
          <Box
            as="iframe"
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.041855565694!2d78.3854105153166!3d17.39448158613688!2m3!1f0!2f20!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97c503d14e5b%3A0x99448ff8a395219d!2sS.M.%20Residency!5e0!3m2!1sen!2sin!4v1651666936047!5m2!1sen!2sin"
            allowFullScreen={true}
            style={{ border: "0" }}
            loading="lazy"
            borderRadius="md"
            className=" h-screen px-6 md:px-0 w-96 md:w-[600px]"
          />
        </ScaleFade>
      </Flex>
    </Box>
  );
};

export default Map;
