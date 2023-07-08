// import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react'
// import { Button, Checkbox, Flex, FormControl, FormLabel, Heading, Input, Stack, Text, useColorModeValue, useToast } from '@chakra-ui/react'
// import React, { useEffect, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { loginAPI, signupAPI } from '../store/authentication/auth.actions'
// import { useDispatch, useSelector } from 'react-redux';
// import { FaFacebookF, FaGooglePlusG } from "react-icons/fa";
// import Navbar from '../Components/Navbar'


// const SignUpLogin = () => {
//     const [admin, setAdmin] = useState({
//         email: "",
//         password: ""
//     });
//     const [signup, setSignup] = useState({
//         "name": "",
//         "username": "",
//         "email": "",
//         "password": ""
//     });

//     const navigate = useNavigate();
//     const toast = useToast()
//     const dispatch = useDispatch();
//     const [activeTab, setActiveTab] = useState(0);
//     const { loading, error, isAuth, signupLoding, signupSuccess, signupError } = useSelector((state) => state.user)

//     useEffect(() => {

//         if (isAuth) {
//             toast({
//                 title: 'User login successful.',
//                 description: "We've created your account for you.",
//                 status: 'success',
//                 duration: 9000,
//                 isClosable: true,
//             })
//             navigate("/register")
//         }
//         if (error) {
//             toast({
//                 title: 'User Login Failed',
//                 status: 'error',
//                 isClosable: true,
//             })
//         }
//         if (signupSuccess) {
//             toast({
//                 title: 'User SignUp successful.',
//                 description: "We've created your account for you.",
//                 status: 'success',
//                 duration: 9000,
//                 isClosable: true,
//             })
//             setActiveTab(0);

//         }
//         if (signupError) {
//             toast({
//                 title: 'SignUp Failed.',
//                 description: "Please try Again",
//                 status: 'error',
//                 duration: 9000,
//                 isClosable: true,
//             })
//         }

//     }, [loading, error, isAuth, signupLoding, signupSuccess, signupError])



//     const handleChangeSignup = (e) => {

//         const { name, value } = e.target;
        

//         setSignup({
//             ...signup,
//             [name]: value,
//         })
//     }
//     const handleChange = (e) => {
//         const { name, value } = e.target;

//         setAdmin({
//             ...admin,
//             [name]: value,
//         })
//     }
//     const handleLogIn = () => {
//         dispatch(loginAPI(admin));
//     }
//     const handleSignUp = () => {
//         dispatch(signupAPI(signup));
        
        
//     }

//     const handleGoogleSignIn = () => {
//         window.open("https://entrnsh.onrender.com/auth/google", "_self")
            
//            };

//           // "https://entrnsh.onrender.com/auth/google", "_self"




//           const facebook = () => {
//             window.open("http://localhost:8001/auth/facebook", "_self");
//           };
             





//     return (
//         <>
//         <Navbar/>
//         <Box w="50%" m="auto" mt="40px">
//             <Heading>User need to login to access home route</Heading>

//       <div className="social-login">
//           <Button
//           className="btn google-btn social-btn"
//           colorScheme="red"
//           onClick={handleGoogleSignIn}
//           leftIcon={<FaGooglePlusG />}
//           >
//         Sign in with Google
//       </Button>
//       <Button
//         className="btn facebook-btn social-btn"
//         colorScheme="facebook"
//         onClick={facebook}
//         leftIcon={<FaFacebookF />}
//       >
//         Sign in with Facebook
//       </Button>
//     </div>







//             <Tabs index={activeTab} onChange={setActiveTab}>
//                 <TabList>
//                     <Tab>Login</Tab>
//                     <Tab>Signup</Tab>
//                 </TabList>

//                 <TabPanels>
//                     <TabPanel>
//                         <Flex
//                             minH={'100vh'}
//                             align={'center'}
//                             justify={'center'}
//                             bg={useColorModeValue('gray.50', 'gray.800')}>
//                             <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
//                                 <Stack align={'center'}>
//                                     <Heading fontSize={'4xl'}>Log in to user account</Heading>
//                                     <Text fontSize={'lg'} color={'gray.600'}>
//                                         to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
//                                     </Text>
//                                 </Stack>
//                                 <Box
//                                     rounded={'lg'}
//                                     bg={useColorModeValue('white', 'gray.700')}
//                                     boxShadow={'lg'}
//                                     p={8}>
//                                     <Stack spacing={4}>
//                                         <FormControl id="email">
//                                             <FormLabel>Email address</FormLabel>
//                                             <Input type="email" name="email" value={admin.email} onChange={handleChange} />
//                                         </FormControl>
//                                         <FormControl id="password">
//                                             <FormLabel>Password</FormLabel>
//                                             <Input type="password" name="password" value={admin.password} onChange={handleChange} />
//                                         </FormControl>
//                                         <Stack spacing={10}>
//                                             <Stack
//                                                 direction={{ base: 'column', sm: 'row' }}
//                                                 align={'start'}
//                                                 justify={'space-between'}>
//                                                 {/* <Checkbox>Remember me</Checkbox> */}
//                                                 {/* <Link color={'blue.400'}>Forgot password?</Link> */}
//                                             </Stack>
//                                             <Button
//                                                 bg={'blue.400'}
//                                                 color={'white'}
//                                                 _hover={{
//                                                     bg: 'blue.500',
//                                                 }} onClick={handleLogIn}>
//                                                 Log in
//                                             </Button>
//                                         </Stack>
//                                     </Stack>
//                                 </Box>
//                             </Stack>
//                         </Flex>
//                     </TabPanel>
//                     <TabPanel>
//                         <Flex
//                             minH={'100vh'}
//                             align={'center'}
//                             justify={'center'}
//                             bg={useColorModeValue('gray.50', 'gray.800')}>
//                             <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
//                                 <Stack align={'center'}>
//                                     <Heading fontSize={'4xl'}>Signup to user account</Heading>
//                                     <Text fontSize={'lg'} color={'gray.600'}>
//                                         to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
//                                     </Text>
//                                 </Stack>
//                                 <Box
//                                     rounded={'lg'}
//                                     bg={useColorModeValue('white', 'gray.700')}
//                                     boxShadow={'lg'}
//                                     p={8}>
//                                     <Stack spacing={4}>
//                                         <FormControl id="email">
//                                             <FormLabel>Name</FormLabel>
//                                             <Input type="text" name="name" value={signup.name} onChange={handleChangeSignup} />
//                                         </FormControl>
//                                         <FormControl id="password">
//                                             <FormLabel>Username</FormLabel>
//                                             <Input type="text" name="username" value={signup.username} onChange={handleChangeSignup} />
//                                         </FormControl>
//                                         <FormControl id="email">
//                                             <FormLabel>Email address</FormLabel>
//                                             <Input type="email" name="email" value={signup.email} onChange={handleChangeSignup} />
//                                         </FormControl>
//                                         <FormControl id="password">
//                                             <FormLabel>Password</FormLabel>
//                                             <Input type="password" name="password" value={signup.password} onChange={handleChangeSignup} />
//                                         </FormControl>
//                                         <Stack spacing={10}>
//                                             <Stack
//                                                 direction={{ base: 'column', sm: 'row' }}
//                                                 align={'start'}
//                                                 justify={'space-between'}>
//                                                 {/* <Checkbox>Remember me</Checkbox> */}
//                                                 {/* <Link color={'blue.400'}>Forgot password?</Link> */}
//                                             </Stack>
//                                             <Button
//                                                 bg={'blue.400'}
//                                                 color={'white'}
//                                                 _hover={{
//                                                     bg: 'blue.500',
//                                                 }} onClick={handleSignUp}>
//                                                 Sign Up
//                                             </Button>
//                                         </Stack>
//                                     </Stack>
//                                 </Box>
//                             </Stack>
//                         </Flex>
//                     </TabPanel>
//                 </TabPanels>
//             </Tabs>
//         </Box>

//         </>
//     )
// }

// export default SignUpLogin



//2



import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react'
import { Button, Checkbox, Flex, FormControl, FormLabel, Heading, Input, Stack, Text, useColorModeValue, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginAPI, signupAPI } from '../store/authentication/auth.actions'
import { useDispatch, useSelector } from 'react-redux';
import { FaFacebookF, FaGooglePlusG } from "react-icons/fa";
import Navbar from '../Components/Navbar'


const SignUpLogin = () => {
    const [admin, setAdmin] = useState({
        email: "",
        password: ""
    });
    const [signup, setSignup] = useState({
        "name": "",
        "username": "",
        "email": "",
        "password": ""
    });

    const navigate = useNavigate();
    const toast = useToast()
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState(0);
    const { loading, error, isAuth, signupLoding, signupSuccess, signupError } = useSelector((state) => state.user)

    useEffect(() => {

        if (isAuth) {
            toast({
                title: 'User login successful.',
                description: "We've created your account for you.",
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
            navigate("/work")
        }
        if (error) {
            toast({
                title: 'User Login Failed',
                status: 'error',
                isClosable: true,
            })
        }
        if (signupSuccess) {
            toast({
                title: 'User SignUp successful.',
                description: "We've created your account for you.",
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
            setActiveTab(0);

        }
        if (signupError) {
            toast({
                title: 'SignUp Failed.',
                description: "Please try Again",
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }

    }, [loading, error, isAuth, signupLoding, signupSuccess, signupError])



    const handleChangeSignup = (e) => {

        const { name, value } = e.target;
        

        setSignup({
            ...signup,
            [name]: value,
        })
    }
    const handleChange = (e) => {
        const { name, value } = e.target;

        setAdmin({
            ...admin,
            [name]: value,
        })
    }
    const handleLogIn = () => {
        dispatch(loginAPI(admin));
    }
    const handleSignUp = () => {
        dispatch(signupAPI(signup));
        
        
    }

   





        





    return (
        <>
        <Navbar/>
        <Box w="60%" m="auto" mt="40px">
            <Text fontSize={"xl"} textTransform={"uppercase"}>User need to login to access</Text>

     






            <Tabs index={activeTab} onChange={setActiveTab} mt={"20px"} >
                <TabList >
                    <Tab fontSize={"20px"}>Login</Tab>
                    <Tab fontSize={"20px"}>Signup</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <Flex
                            align={'center'}
                            justify={'center'}
                            bg={useColorModeValue('gray.50', 'gray.800')}>
                            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                                <Stack align={'center'}>
                                    <Heading fontSize={'4xl'}>Log in to user account</Heading>
                                    <Text fontSize={'lg'} color={'gray.600'}>
                                        to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
                                    </Text>
                                </Stack>
                                <Box
                                    rounded={'lg'}
                                    bg={useColorModeValue('white', 'gray.700')}
                                    boxShadow={'lg'}
                                    p={8}>
                                    <Stack spacing={4}>
                                        <FormControl id="email">
                                            <FormLabel>Email address</FormLabel>
                                            <Input type="email" name="email" value={admin.email} onChange={handleChange} />
                                        </FormControl>
                                        <FormControl id="password">
                                            <FormLabel>Password</FormLabel>
                                            <Input type="password" name="password" value={admin.password} onChange={handleChange} />
                                        </FormControl>
                                        <Stack spacing={10}>
                                            <Stack
                                                direction={{ base: 'column', sm: 'row' }}
                                                align={'start'}
                                                justify={'space-between'}>
                                                {/* <Checkbox>Remember me</Checkbox> */}
                                                {/* <Link color={'blue.400'}>Forgot password?</Link> */}
                                            </Stack>
                                            <Button
                                                bg={'blue.400'}
                                                color={'white'}
                                                _hover={{
                                                    bg: 'blue.500',
                                                }} onClick={handleLogIn}>
                                                Log in
                                            </Button>
                                        </Stack>
                                    </Stack>
                                </Box>
                            </Stack>
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <Flex
                            align={'center'}
                            justify={'center'}
                            bg={useColorModeValue('gray.50', 'gray.800')}>
                            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                                <Stack align={'center'}>
                                    <Heading fontSize={'4xl'}>Signup to user account</Heading>
                                    <Text fontSize={'lg'} color={'gray.600'}>
                                        to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
                                    </Text>
                                </Stack>
                                <Box
                                    rounded={'lg'}
                                    bg={useColorModeValue('white', 'gray.700')}
                                    boxShadow={'lg'}
                                    p={8}>
                                    <Stack spacing={4}>
                                        <FormControl id="email">
                                            <FormLabel>Name</FormLabel>
                                            <Input type="text" name="name" value={signup.name} onChange={handleChangeSignup} />
                                        </FormControl>
                                        <FormControl id="password">
                                            <FormLabel>Username</FormLabel>
                                            <Input type="text" name="username" value={signup.username} onChange={handleChangeSignup} />
                                        </FormControl>
                                        <FormControl id="email">
                                            <FormLabel>Email address</FormLabel>
                                            <Input type="email" name="email" value={signup.email} onChange={handleChangeSignup} />
                                        </FormControl>
                                        <FormControl id="password">
                                            <FormLabel>Password</FormLabel>
                                            <Input type="password" name="password" value={signup.password} onChange={handleChangeSignup} />
                                        </FormControl>
                                        <Stack spacing={10}>
                                            <Stack
                                                direction={{ base: 'column', sm: 'row' }}
                                                align={'start'}
                                                justify={'space-between'}>
                                                {/* <Checkbox>Remember me</Checkbox> */}
                                                {/* <Link color={'blue.400'}>Forgot password?</Link> */}
                                            </Stack>
                                            <Button
                                                bg={'blue.400'}
                                                color={'white'}
                                                _hover={{
                                                    bg: 'blue.500',
                                                }} onClick={handleSignUp}>
                                                Sign Up
                                            </Button>
                                        </Stack>
                                    </Stack>
                                </Box>
                            </Stack>
                        </Flex>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>

        </>
    )
}

export default SignUpLogin