
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { deleteDetailsAPI, getDetailsAPI } from "../store/register/register.actions";
import EditDetails from "./EditDetails";
import Navbar from "../Components/Navbar";
import Filter from "./Filter";





// import EditDetails from "./EditDetails";

const HotelTable = () => {
  const data = useSelector((state) => state.UserInfo.data);
  const [filteredData, setFilteredData] = useState(data);



  console.log(data);
  const dispatch=useDispatch();

  const handleFilterChange = (filters) => {
    let filteredResult = data;

    
    if (filters.price) {
      filteredResult = filteredResult.filter((el) => el.Price === filters.price);
    }

    if (filters.color) {
      filteredResult = filteredResult.filter((el) => el.car_color === filters.color);
    }

    if (filters.mileage) {
      filteredResult = filteredResult.filter((el) => el.Mileage === filters.mileage);
    }

    setFilteredData(filteredResult);
  };



  useEffect(()=>{
    dispatch(getDetailsAPI());

  },[])


  
  
//   console.log("allData", data, loading, error);
  const toast = useToast();

  
  const handleDelete = (_id) => {
    console.log("id",_id);
    dispatch(deleteDetailsAPI(_id));

  
  };

  
  return (
    <Box pb={"30px"} marginTop="30px">
      {/* <Sidebar/> */}
      {/* <Filter/> */}
      <Navbar/>

      <Filter onFilterChange={handleFilterChange} />
      <TableContainer
        maxWidth={"container.xl"}
        background={"whiteAlpha.200"}
        m={"auto"}
        marginTop="30px"

        boxShadow={"md"}
        rounded={"md"}
      >
        <Heading marginLeft="30px" mb="10px">Car Details Table:</Heading>

        <Table size="md">
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Image</Th>
              <Th>Car Name</Th>
              <Th>Car color</Th>
              <Th>Price</Th>
              <Th>Mileage</Th>
              <Th>Model</Th>
              <Th>Speed</Th>
              <Th>Power</Th>
              <Th>Year</Th>
              <Th>Description</Th>
              
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredData &&
              filteredData.length > 0 &&
              filteredData.map((el, i) => (
                <Tr _hover={{ background: "gray.100" }} key={i}>
                  <Td>{i+1}</Td>
                  <Td>
                    <Image src={el.photo}/>
                    </Td>
                  <Td>{el.car_name}</Td>
                  <Td>{el.car_color}</Td>
                  <Td>{el.Price}</Td>
                  <Td>{el.Mileage}</Td>
                  <Td>{el.Model}</Td>
                  <Td>{el.Speed}</Td>
                  <Td>{el.Power}</Td>
                  <Td>{el.Year}</Td>
                  <Td>
                  <ul>
               {[
                el.description_1,
                 el.description_2,
                el.description_3,
                 el.description_4,
                 el.description_5,
               ].map((description, index) => (
              <li key={index}>{description}</li>
            ))}
          </ul>

                  </Td>
                
                  <Td>
                    {/* <EditDetails element={el} /> */}
                    {/* <EmployeeEditDetails element={el}/> */}
                    <EditDetails element={el}/>
                  </Td>
                  <Td>
                    <Button
                      size={"sm"}
                      title={"delete"}
                      onClick={() => handleDelete(el._id)}
                    >
                      <DeleteIcon />
                    </Button>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
     
    </Box>
  );
};

export default HotelTable;



//2




