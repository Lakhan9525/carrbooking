import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Stack, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const NavbarHome = () => {

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={'white'} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Box>
          <Button colorScheme='teal' variant='ghost'><Link to="/login">Login</Link></Button>
        </Box>
        <Flex alignItems={'center'}>
          <Stack direction={'row'} spacing={5}>
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavbarHome;
