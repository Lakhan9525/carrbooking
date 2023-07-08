import {
  Box,
    Button,
   
    Container,
    FormLabel,
    Heading,
    Input,
  
    Radio,
    RadioGroup,
    Select,
    Stack,
    Textarea,
    useToast,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
import { addDetailsAPI } from "../store/register/register.actions";
import HotelTable from "./HotelTable";
import Navbar from "../Components/Navbar";


//import { addDetailsAPI } from "../store/register/register.actions";
  
  

  
  const initialData = {
 
    car_name: "",
    car_color: "",
    Price: "",
    Mileage: "",
    Model: "",
    description_1: "",
    description_2: "",
    description_3: "",
    description_4: "",
    description_5: "",
    photo: "",
    Power: "",
    Speed: "",
    Year: "",
  };
  
  const WorkForm = () => {
  
    const [formData, setFormData] = useState(initialData);
    const [loading, setLoading] = useState(false);
    const toast = useToast();
    // const {register} = useSelector((state) => state.UserInfo)
    // console.log(register);
  
    let dispatch = useDispatch();
   
  
    const handleOnChange = (e) => {
      // console.log(e);
      if (e == "Married" || e == "Unmarried") {
        setFormData({
          ...formData,
          ["type_of_marriage"]: e,
        });
      } else {
        const { name, value } = e.target;
        //   console.log(name, value);
        if (name == "age" || name == "salary") {
          setFormData({
            ...formData,
            [name]: Number(value),
          });
        } else {
          setFormData({
            ...formData,
            [name]: value,
          });
        }
      }
    };
  
  
    const handleOnSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
      if (formData.type_of_marriage == "") {
        toast({
          title: "Please select type of marriage",
          status: "warning",
          position: "top-center",
          duration: 2000,
          isClosable: true,
        });
  
        return;
      }
      dispatch(addDetailsAPI(formData));
    }  
  
  
    return (
      <>
      <Navbar/>

    
      <Box marginLeft={"20px"} width={"100%"} height={"00px"}>
        <Heading>Car Details</Heading>
        <form onSubmit={handleOnSubmit}>
        <Container maxW={"xl"} boxShadow={"xl"}>
          <Stack spacing={3}>

            <FormLabel>Name:</FormLabel>
            {/* <Input  name="account_id" type="number" value={formData.account_id} onChange={handleOnChange} placeholder="account_id" size="lg" /> */}
            <Input name="car_name" type="text" value={formData. car_name} onChange={handleOnChange}   placeholder="car_name" size="lg" />
            <FormLabel>Color:</FormLabel>
            <Input name="car_color" type="text" value={formData. car_color} onChange={handleOnChange}   placeholder="car_color" size="lg" />
  
            <FormLabel>Price:</FormLabel>
            <Input  type="number"
                      name="Price"
                      value={formData.Price}
                      onChange={handleOnChange}
                      placeholder="Enter price" size="lg" />

              <FormLabel>Mileage:</FormLabel>

              <Input  type="number"
                      name="Mileage"
                      value={formData.Mileage}
                      onChange={handleOnChange}
                      placeholder="Enter Mileage" size="lg" />  

            <FormLabel>Model:</FormLabel>
            <Input name="Model" type="text" value={formData.Model} onChange={handleOnChange}   placeholder="Enter Model Name" size="lg" />            
  

            <Input name="Power" type="number" value={formData.Power} onChange={handleOnChange} placeholder="Power" size="lg"/>
            <Input name="Speed" type="number" value={formData.Speed} onChange={handleOnChange} placeholder="Speed" size="lg"/>
            <Input name="Year" type="number" value={formData.Year} onChange={handleOnChange} placeholder="Year" size="lg"/>

            <FormLabel>Car description:</FormLabel>
            
            <Textarea name="description_1" type="text" value={formData.description_1} onChange={handleOnChange} placeholder="description_1" size="lg"/>
            <Textarea name="description_2" type="text" value={formData.description_2} onChange={handleOnChange} placeholder="description_2" size="lg"/>
            <Textarea name="description_3" type="text" value={formData.description_3} onChange={handleOnChange} placeholder="description_3" size="lg"/>
            <Textarea name="description_4" type="text" value={formData.description_4} onChange={handleOnChange} placeholder="description_4" size="lg"/>
            <Textarea name="description_5" type="text" value={formData.description_5} onChange={handleOnChange} placeholder="description_5" size="lg"/>
          
            
            <FormLabel>Car Photo:</FormLabel>
            <Input
              placeholder="Car Photo"
              type="url"
              name="photo"
              value={formData.photo}
              onChange={handleOnChange}
              size="lg"
            />
            <Button 
             onClick={() =>
              toast({
                title: 'Account created.',
                description: "data added successfully",
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
            }
             isLoading={loading}
                    spinnerPlacement="end"
                    loadingText="Submiting data..."
                    type="submit"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    mt={"30px"}>
              Submit
            </Button>
          </Stack>
        </Container>
        </form>
      
        {/* <HotelTable/> */}
      </Box>
      </>
    );
  };
  
  export default WorkForm;
  