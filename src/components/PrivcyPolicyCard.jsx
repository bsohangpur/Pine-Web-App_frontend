import React from 'react';
import { Box, Flex, Icon, Text } from "@chakra-ui/react";

const PrivcyPolicyCard = ({icon, title, content,index }) => {
  return (
    <Box mt={index > 0 ? 8 : 0}>
    <Flex align="center" mb={4}>
      <Icon as={icon}/>
      <Text ml={2} textTransform='capitalize' fontWeight="medium">
        {title}
      </Text>
    </Flex>
    <Text ml={8}>{content}</Text>
  </Box>
  )
}

export default PrivcyPolicyCard