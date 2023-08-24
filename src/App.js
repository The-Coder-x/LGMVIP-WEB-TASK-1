import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,

} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import TODO from './components/TODO';


function App() {

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="10vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
         <TODO/>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
