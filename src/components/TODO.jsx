import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Text
} from '@chakra-ui/react';
import React, { useState } from 'react';

const TODO = () => {
  const [data,setData] = useState(" ")
  const [item,setItem] = useState([]);
  const handleClick = () => {
    if(data === " ")
    {
      return ;
    }
    else{
      setItem([...item,data]);
      setData(" ");
    }
  };
  const deleteHandler = (idx)=>{
    const newList= item.filter((val ,index)=> index!== idx);
    setItem(newList);
  }
  const deleteAllHandler = () =>{
    setItem([]);
  }

  return (
    <div>
      <Text fontSize={'4xl'} color={'cyan.500'}>
        TODO LIST
      </Text>
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          value={data}
          onChange={(e) => setData(e.target.value)}
          type='text'
          placeholder={'Add TODO... '}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            Add
          </Button>
        </InputRightElement>
      </InputGroup>
      <SimpleGrid columns={[1, 2, 3]} spacing="40px">
        {item.map((ele, idx) => {
          return (
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
              key={idx}
            >
              <Text>{ele}</Text>
              <Button
                width="90%"
                height="2.2rem"
                _hover={{ bg: '#2a6e90' }}
                onClick={() => deleteHandler(idx)}
              >
                REMOVE
              </Button>
            </Box>
          );
        })}
      </SimpleGrid>
      <Button
        m={'1rem'}
        width="50%"
        height="2.2rem"
        _hover={{ bg: '#2a6e90' }}
        onClick={deleteAllHandler}
      >
        REMOVE ALL
      </Button>
    </div>
  );
};

export default TODO;
