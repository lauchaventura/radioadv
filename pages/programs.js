import React, {useEffect, useState} from "react";
import Head from "next/head";
import { motion, router, AnimatePresence } from "framer-motion";
import { Container, Box,Badge, Grid, Text, SkeletonText, SkeletonCircle, Tab, TabPanel, Image, SimpleGrid, Stack } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";


const axios = require('axios')

const Programs = (router) => {
const[APIdata, setAPIdata] = useState([])
const [isLoading, setIsLoading] = useState(true);
useEffect(() => {
    setTimeout(() =>{
  setIsLoading(false)
    },4000)
  }, [])

useEffect(() => {
  axios.get(`https://sheetsu.com/apis/v1.0su/6b5ab495d7ff `)
  .then((incomingData) => {
    setAPIdata(incomingData.data)
  })
}, [])


const loader = () => {
return (
    <>
    <Head>
        <title>Radio Agua de Vida | Programas</title>
    </Head>
        <Header />
        <Container maxW='container.xl' pt={6} >
            <Box
            mb={9} 
                textAlign="center"
              align='center'
            >
                
                     <SkeletonText mt='4' noOfLines={4} spacing='3' />
                
                <Box mt={4}>
                </Box>
                
            </Box>
            <Grid  p={3}gridGap={12} templateColumns="repeat(auto-fill, minmax(240px, 1fr))" >
                {APIdata.map(data =>(
                        <Stack spacing={3} key={data.id}>
                                                   
<Stack borderRadius='md'   backgroundColor="gray.50"   >
<Box p={4}>
<Text fontSize='lg' fontWeight='bold'>
<SkeletonCircle size='10' />
  <SkeletonText mt='4' noOfLines={4} spacing='4' />
</Text>
<Text fontSize='sm' fontWeight='semibold'>
<SkeletonCircle size='10' />
  <SkeletonText mt='4' noOfLines={4} spacing='4' />
</Text>
<Text fontSize='lg' fontWeight='semibold' mt={2}>
<SkeletonCircle size='10' />
  <SkeletonText mt='4' noOfLines={4} spacing='4' /> <SkeletonCircle size='10' />
  <SkeletonText mt='4' noOfLines={4} spacing='4' />
</Text>
</Box>
<Box width='100%'  >
<SkeletonCircle size='10' />
  <SkeletonText mt='4' noOfLines={4} spacing='4' />
</Box>

</Stack>
</Stack>     

))
                     
                }
                </Grid > 
                
         
            <Footer />
        </Container>
</>
)
}
if(isLoading ){
return(loader())
}
else{
    return (
        <>
        <Head>
            <title>Radio Agua de Vida | Programas</title>
        </Head>
            <Header />
            <motion.div key={router.route} initial='pageInitial' animate='pageAnimate' variants={{
      pageInitial: {
        opacity:0
      },
      pageAnimate:{
        opacity:1
      },
    }}>
            <Container maxW='container.xl' pt={6} >
                <Box
                mb={2} 
                    textAlign="center"
                  align='center'
                >
                    <Badge
                        variant="solid"
                        bg='#e63946'
                        fontSize={[16,17, 20, 25]}
                        align='center'
                    >
                        Te acompañamos las 24 horas!
                    </Badge>
                    <Box >
                    </Box>
                    
                </Box>
                <Grid mb={6}  p={3}gridGap={12} templateColumns="repeat(auto-fill, minmax(240px, 1fr))" >
                    {APIdata.map((data) => {
                        return(
                            <Stack spacing={3} key={data.id} >
                                                       
    <Stack borderRadius='md'   backgroundColor="gray.50"  key={data.id}  >
    <Box p={4}>
    <Text fontSize='lg' fontWeight='bold'>
        {data.name}
    </Text>
    <Text fontSize='sm' fontWeight='semibold'>
        {data.description}
    </Text>
    <Text fontSize='lg' fontWeight='semibold' mt={2}>
     {data.days} {data.horary}
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
        </motion.div>
    </>
    )
}
};


export default Programs;
