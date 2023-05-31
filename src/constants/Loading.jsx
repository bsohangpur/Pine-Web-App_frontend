import React from "react";
import { Box } from "@chakra-ui/react";
import { PuffLoader } from "react-spinners";

const Loading = () => {
  return (
    <Box className="flex justify-center items-center w-full h-screen">
      <PuffLoader size='100px' color="#3D95CE" />
    </Box>
  );
};

export default Loading;
