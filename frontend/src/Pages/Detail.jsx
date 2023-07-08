// import React from 'react'
// import {Container,Button,Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, useToast, FormLabel, Input, Textarea, Box, Stack, Heading } from "@chakra-ui/react";
// import  { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addDetailsAPI } from "../store/register/register.actions";
// import HotelTable from "./HotelTable";

// const initialData = {
//     account_id:"",
    
//       address_line_1:"",
//       address_line_2:"",
//       city:"",
//       state:"",
//       zipcode:"",
//       country: "",
    
//     first_name: "",
//     last_name: "",
//     email:"",
//     cell_phone: "",
//     home_phone: "",
//     photo: "",
//   };

// const Detail = () => {
//     const [formData, setFormData] = useState(initialData);
//     const [loading, setLoading] = useState(false);
//     const toast = useToast();
//     // const {register} = useSelector((state) => state.UserInfo)
//     // console.log(register);
  
//     let dispatch = useDispatch();

   
  
//     const handleOnChange = (e) => {

//       // console.log(e);
//       if (e == "Married" || e == "Unmarried") {
//         setFormData({
//           ...formData,
//           ["type_of_marriage"]: e,
//         });
//       } else {
//         const { name, value } = e.target;

//         //   console.log(name, value);
//         if (name == "age" || name == "salary") {

//           setFormData({

            
//             ...formData,
//             [name]: Number(value),
//           });
//         } else {
//           setFormData({
//             ...formData,
//             [name]: value,
//           });
//         }
//       }
//     };
  
  
//     const handleOnSubmit = (e) => {
//       e.preventDefault();
//       console.log(formData);
//       if (formData.type_of_marriage == "") {
//         toast({
//           title: "Please select type of marriage",
//           status: "warning",
//           position: "top-center",
//           duration: 2000,
//           isClosable: true,
//         });
  
//         return;
//       }
//       dispatch(addDetailsAPI(formData));
//     }  



//   return (
//     <div>Detail
//         <Accordion allowToggle>
//   <AccordionItem>
//     <h2>
//       <AccordionButton>
//         <Box flex="1" textAlign="left">
//         <Heading>Personal Details</Heading>
//         </Box>
//         <AccordionIcon />
//       </AccordionButton>
//     </h2>
//     <AccordionPanel pb={4}>
//       <form onSubmit={handleOnSubmit}>
//         <Container maxW="xl" bgColor="" boxShadow="dark-lg" border='2px' borderColor="gray.200" >
//           <Stack spacing={3}>

//             <FormLabel>Name:</FormLabel>
//             <Input  name="account_id" type="number" value={formData.account_id} onChange={handleOnChange} placeholder="account_id" size="lg" />
//             <Input name="first_name" type="text" value={formData. first_name} onChange={handleOnChange}   placeholder=" first_name" size="lg" />
//             <Input name="last_name" type="text" value={formData. last_name} onChange={handleOnChange}   placeholder=" last_name" size="lg" />
  
//             <FormLabel>Contact:</FormLabel>
//             <Input  type="number"
//                       name="cell_phone"
//                       value={formData.cell_phone}
//                       onChange={handleOnChange}
//                       placeholder="cell_phone" size="lg" />

//               <Input  type="number"
//                       name="home_phone"
//                       value={formData.home_phone}
//                       onChange={handleOnChange}
//                       placeholder="home_phone" size="lg" />  

//             <FormLabel>Email:</FormLabel>
//             <Input name="email" type="text" value={formData.email} onChange={handleOnChange}   placeholder="email" size="lg" />            
  
//             <FormLabel>Address:</FormLabel>
            
//             <Textarea name="address_line_1" type="text" value={formData.address_line_1} onChange={handleOnChange} placeholder="address_line_1" size="lg"/>
//             <Textarea name="address_line_2" type="text" value={formData.address_line_2} onChange={handleOnChange} placeholder="address_line_2" size="lg"/>
//             <Input  name="city" type="text" value={formData.city} onChange={handleOnChange} placeholder="city" size="lg" />
//             <Input  name="state" type="text" value={formData.state} onChange={handleOnChange} placeholder="state" size="lg" />
//             <Input  name="country" type="text" value={formData.country} onChange={handleOnChange} placeholder="country" size="lg" />
//             <Input  name="zipcode" type="text" value={formData.zipcode} onChange={handleOnChange} placeholder="zipcode" size="lg" />
            
//             <FormLabel>Profile Photo:</FormLabel>
//             <Input
//               placeholder="Profile Photo"
//               type="url"
//               name="photo"
//               value={formData.photo}
//               onChange={handleOnChange}
//               size="lg"
//             />
//             <Button 
//              onClick={() =>
//               toast({
//                 title: 'Account created.',
//                 description: "data added successfully",
//                 status: 'success',
//                 duration: 9000,
//                 isClosable: true,
//               })
//             }
//              isLoading={loading}
//                     spinnerPlacement="end"
//                     loadingText="Submiting data..."
//                     type="submit"
//                     bg={"blue.400"}
//                     color={"white"}
//                     _hover={{
//                       bg: "blue.500",
//                     }}
//                     mt={"30px"}>
//                         submit
//                     </Button>
//                     </Stack>
//         </Container>
//         </form>
//         </AccordionPanel>
//         </AccordionItem>
//         </Accordion>


//     </div>
//   )
// }

// export default Detail


import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import React from "react";

// Replace with your Firebase project configuration

const firebaseConfig = {
  apiKey: "AIzaSyBgjTPss_EcrFu-6x5n6tKfwjGpjgiYYAY",
  authDomain: "social-media-2a3f7.firebaseapp.com",
  projectId: "social-media-2a3f7",
  storageBucket: "social-media-2a3f7.appspot.com",
  messagingSenderId: "554672495589",
  appId: "1:554672495589:web:3ec62b95efc74dcb2c2d0c",
  measurementId: "G-LQWNBH6SFR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const providerGoogle = new GoogleAuthProvider();
const providerFacebook = new FacebookAuthProvider();
const providerTwitter = new TwitterAuthProvider();

function Detail() {
  const [user, setUser] = useState(null);

  const handleLoginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, providerGoogle);
      setUser(result.user);
      window.location.href = '/register';
    } catch (error) {
      console.error(error);
    }
  };

  const handleLoginWithFacebook = async () => {
    try {
      const result = await signInWithPopup(auth, providerFacebook);
      setUser(result.user);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLoginWithTwitter = async () => {
    try {
      const result = await signInWithPopup(auth, providerTwitter);
      setUser(result.user);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.displayName}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <button onClick={handleLoginWithGoogle}>Login with Google</button>
          <button onClick={handleLoginWithFacebook}>Login with Facebook</button>
          <button onClick={handleLoginWithTwitter}>Login with Twitter</button>
        </div>
      )}
    </div>
  );
}

export default Detail;





// Client ID
// 157440425392-sk9ia6qlvduqif9dqtupkou74101rqa3.apps.googleusercontent.com
// Client secret
// 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
