import React from "react";
import Head from "next/head";
import {
  Avatar,
  Stack,
  useColorModeValue,
  SimpleGrid,
  Text,
  Box,
  Container,
  Image,
} from "@chakra-ui/react";
import Header from "../components/Header";
import CardsProjects from "../components/CardsProjects";
const axios = require("axios");

const Projects = () => {
  return (
    <>
      <Head>
        <title>Radio Agua de Vida | Nuestros Proyectos</title>
      </Head>
      <Header />
      <Container
        maxW='container.xl'
        align='center'
        wrap='wrap'
        p={10}
        centerContent
        color='#1A202C'
      >
        <SimpleGrid alignItems='center' columns={[1, 2]} spacing={10}>
          <Box align='start' justifyContent='center'>
            <Text
              lineHeight={0.8}
              ml={2}
              Textalign='start'
              fontWeight='900'
              fontSize={[50, 60, 90]}
            >
              Estamos en donde tenemos que estar
            </Text>
            <Text Textalign='start' mt={5} ml={2}>
              Somos Agua de Vida un medio audiovisual en donde encontraras lo
              que buscas. Estamos para vos y para todo los que nos escuchan.
            </Text>
          </Box>
          <Box align='center' maxW={500}>
            <Image
              align='center'
              justify='center'
              src='https://res.cloudinary.com/dsjas6fvz/image/upload/v1653580620/Radio%20Agua%20de%20Vida/proyectos_x4eids.png'
            />
          </Box>
        </SimpleGrid>
        <CardsProjects />
      </Container>
      <Stack
        bg={useColorModeValue("gray.50", "gray.800")}
        py={16}
        px={8}
        spacing={{base: 8, md: 10}}
        align={"center"}
        direction={"column"}
      >
        <Text
          fontSize={{base: "xl", md: "2xl"}}
          textAlign={"center"}
          maxW={"3xl"}
        >
          Trabajar en todos estos proyectos nos dejan una gran satisfaccion, el
          poder crear un multimedio para llegar a todos de distintas maneras,
          creo que seguimos conectados con la realidad.
        </Text>
        <Box textAlign={"center"}>
          <Avatar
            src={
              "https://res.cloudinary.com/dsjas6fvz/image/upload/c_scale,w_1184/v1658171215/Radio%20Agua%20de%20Vida/IMG_7327_qorg6b.jpg"
            }
            alt={"Alejandro Cononahuel"}
            mb={2}
          />

          <Text fontWeight={600}>Alejandro Cononahuel</Text>
          <Text
            fontSize={"sm"}
            color={useColorModeValue("gray.400", "gray.400")}
          >
            Constructor
          </Text>
        </Box>
      </Stack>
    </>
  );
};

export default Projects;
