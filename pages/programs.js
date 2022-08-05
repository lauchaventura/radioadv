import React, {useEffect, useState} from "react";
import Head from "next/head";
import {motion, router, AnimatePresence} from "framer-motion";
import {
  Container,
  Box,
  GridItem,
  Grid,
  Text,
  SkeletonText,
  SkeletonCircle,
  Tab,
  TabPanel,
  Image,
  SimpleGrid,
  Stack,
  Skeleton,
  Spinner,
} from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProgramsCards from "../components/ProgramsCards";

const axios = require("axios");

const Programs = () => {
  const [APIdata, setAPIdata] = useState([]);
  const [loading, setIsLoading] = useState(false);
  useEffect(() => {
    axios.get(`https://sheetsu.com/apis/v1.0su/6b5ab495d7ff `).then(res => {
      setAPIdata(res.data);
      setIsLoading(true);
    });
  }, []);
  console.log(APIdata);
  console.log(loading);

  return (
    <div>
      <Head>
        <title>Radio Agua de Vida | Programas</title>
      </Head>
      <Header />
      <Container maxW='container.xl' centerContent>
        <Grid
          p={3}
          gridGap={12}
          templateColumns='repeat(auto-fill, minmax(240px, 1fr))'
        >
          {loading ? (
            APIdata.map(APIdata => {
              return (
                <Box key={APIdata.id} APIdata={APIdata}>
                  <Stack borderRadius='md' backgroundColor='gray.50'>
                    <Box p={4}>
                      <Text fontSize='lg' fontWeight='bold'>
                        {APIdata.name}
                      </Text>
                      <Text fontSize='sm' fontWeight='semibold'>
                        {APIdata.description}
                      </Text>
                      <Text fontSize='lg' fontWeight='semibold' mt={2}>
                        {APIdata.days} {APIdata.horary}
                      </Text>
                    </Box>
                    <Box width='100%'>
                      <Image src={APIdata.image} />
                    </Box>
                  </Stack>
                </Box>
              );
            })
          ) : (
            <Box align='center' p={40}>
              <Spinner
                p={7}
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='#1d3557'
                size='xl'
              />
            </Box>
          )}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};
export default Programs;
