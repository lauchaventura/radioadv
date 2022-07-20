import React, {useEffect, useState} from "react";
import Head from "next/head";
import { Container, Box,Badge, Grid, Text ,Tabs, TabList, TabPanels, Tab, TabPanel, Image, SimpleGrid, Stack } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
const axios = require('axios')



const Programs = () => {
const [name, setName] = useState('')
const [description, setDescription] = useState('')
const [horary, setHorary] = useState('')
const [image, setImage] = useState('')
const[APIdata, setAPIdata] = useState([])

useEffect(() => {
  axios.get(`https://sheetsu.com/apis/v1.0su/6b5ab495d7ff `)
  .then((incomingData) => {
    setAPIdata(incomingData.data)
  })
}, [])


    return (
        <>
            <Head>
                <title>Radio Agua de Vida | Programas</title>
            </Head>
                <Header />
                <Container maxW='container.xl' pt={20} >
                    <Box
                        mb={4}
                        p={3}
                        textAlign="center"
                    >
                        <Badge
                            variant="solid"
                            colorScheme='gray'
                            fontSize='30px'
                            align='center'
                        >
                            Programación
                        </Badge>
                    </Box>
                    <Grid p={3}gridGap={12} templateColumns="repeat(auto-fill, minmax(240px, 1fr))" >
                        {APIdata.map((data) => {
                            return(
                                <Stack spacing={3}>
                                                           
    <Stack borderRadius='md'   backgroundColor="gray.50"   >
      <Box p={4}>
        <Text fontSize='lg' fontWeight='bold'>
            {data.name}
        </Text>
        <Text fontSize='sm' fontWeight='semibold'>
            {data.description}
        </Text>
        <Text fontSize='lg' fontWeight='semibold' mt={2}>
        {data.horary}
        </Text>
        </Box>
        <Box width='100%'  >
            <Image src={data.image}/>
        </Box>
        
      </Stack>
      </Stack>     
        
                            )
                             
                        })}
                        </Grid > 
                        
                 
                    <Footer />
                </Container>
        </>
    )
};


export default Programs;
