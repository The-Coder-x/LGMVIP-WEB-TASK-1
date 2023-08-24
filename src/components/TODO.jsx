import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const TODO = () => {
  const handleClick = () => {};

  return (
    <div>
      <Text fontSize={'4xl'}>TODO LIST</Text>
      <InputGroup size="md">
        <Input pr="4.5rem" placeholder="Enter password" />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            Add
          </Button>
        </InputRightElement>
      </InputGroup>
      <SimpleGrid columns={[1, 2, 3]} spacing="40px">
        <Box
          bg="#3a95c3"
          height="125px"
          m={'2rem'}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexDirection={'column'}
          p={'10px'}
          overflow={'auto'}
        >
          <Text color={'black'}>TODO</Text>
          <Button width="90%" height="2.2rem" _hover={{ bg: '#2a6e90' }}>
            REMOVE
          </Button>
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default TODO;
