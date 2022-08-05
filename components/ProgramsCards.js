import {Stack, Text, Box, Image} from "@chakra-ui/react";

import React from "react";

const ProgramsCards = () => {
  return (
    <Stack borderRadius='md' backgroundColor='gray.50'>
      <Box p={4}>
        <Text fontSize='lg' fontWeight='bold'>
          {APIdata.name}
        </Text>
        <Text fontSize='sm' fontWeight='semibold'>
          {APIdata.description}
        </Text>
        <Text fontSize='lg' fontWeight='semibold' mt={2}>
          {APIdata.days} {APIdata.horary}
        </Text>
      </Box>
      <Box width='100%'>
        <Image src={APIdata.image} />
      </Box>
    </Stack>
  );
};

export default ProgramsCards;
