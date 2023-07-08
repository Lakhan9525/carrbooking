
import { EditIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    
    Container,
    FormLabel,
    Heading,
    Input,
    MenuItemOption,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    
    Select,
    Stack,
    Textarea,
    useDisclosure,
    useToast,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  import { useDispatch,useSelector } from "react-redux";
import { updateDetailsAPI } from "../store/register/register.actions";
  
  
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
  
  const EditDetails = ({element}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [formData, setFormData] = useState(element);
    const [loading, setLoading] = useState(false);
    const toast = useToast();
    const data = useSelector((state) => state.UserInfo.data);



    console.log(data);
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
      if (formData.email == "") {
        toast({
          title: "Please select email",
          status: "warning",
          position: "top-center",
          duration: 2000,
          isClosable: true,
        });
        return;
      }
      dispatch(updateDetailsAPI(formData));
      onClose();
    }  
  
  
    return (
      <Box>
          <Button onClick={onOpen} size={"sm"} title={"Edit"}>
        <EditIcon />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} width={"800px"}>
      <ModalOverlay />
        <ModalContent width={"800px"}>

        <form onSubmit={handleOnSubmit}>
        <ModalHeader>Edit car details</ModalHeader>
            <ModalCloseButton />
            <Container maxW="xl">
          <Stack spacing={3}>
         

            
             <FormLabel>Name:</FormLabel>
            
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


            <ModalFooter>
            <Button  isLoading={loading}
                    spinnerPlacement="end"
                    loadingText="Submiting data..."
                    type="submit"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    mt={"-5px"}>
              Update
            </Button>
            <Button variant="ghost" onClick={onClose}>
                Cancel
              </Button>
              </ModalFooter>
          </Stack>
        </Container>
        </form>
        </ModalContent>
        </Modal>
      </Box>
    );
  };
  
  export default EditDetails;
  