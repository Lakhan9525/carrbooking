import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Heading, Stack, useColorMode, useColorModeValue, useMediaQuery } from '@chakra-ui/react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Userlogout } from '../store/authentication/auth.actions';

const Navbar = () => {



    const { colorMode, toggleColorMode } = useColorMode();
    const [isSmallerThan768] = useMediaQuery("(max-width: 600px)");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const { isOpen, onOpen, onClose } = useDisclosure();
    //const { isAuth } = useSelector((state) => state.user);
    

    




    return (
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} mt={"10px"}>
            <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
                <Box>
                    {isSmallerThan768 ?
                        <Stack direction="row" spacing={3}>
                            
                    
                            {/* <Button fontSize={"25px"} colorScheme='teal' variant='ghost'><Link to="/Detail">Detail_Page</Link></Button> */}
                            <Button fontSize={"25px"} colorScheme='teal' variant='ghost'><Link to="/work">Car_Detail_Input</Link></Button>
                            <Button fontSize={"25px"} colorScheme='teal' variant='ghost'><Link to="/register">CarDetails_Table</Link></Button>
                            <Button fontSize={"25px"} colorScheme='teal' variant='ghost'><Link to="/">Login_page</Link></Button>
                        </Stack>
                        :
                        <Stack direction="row" spacing={4}>
                            
                            
                            {/* <Button colorScheme='teal' variant='ghost'><Link to="/Detail">Detail_Page</Link></Button> */}
                            <Button colorScheme='teal' variant='ghost'><Link to="/work">Car_Detail_input</Link></Button>
                            <Button colorScheme='teal' variant='ghost'><Link to="/register">CarDetails_Table</Link></Button>
                            <Button colorScheme='teal' variant='ghost'><Link to="/">Login_page</Link></Button>
                        </Stack>
                    }
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
    )
}

export default Navbar;
