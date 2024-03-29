import {Box, SimpleGrid, Text, AspectRatio, Badge, Tag} from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";

const CardsProjects = () => {
  return (
    <div>
      <Box>
        <SimpleGrid p={4} spacing={2} columns={[1, 2, 3]} align='start' pt={7}>
          <Box maxW='600px' boxShadow='2xl'>
            <Box>
              <AspectRatio maxW='560px' ratio={16 / 10}>
                <iframe
                  title='Donaciones'
                  src='https://www.youtube.com/embed/APtGPKhyFWs'
                  allowFullScreen
                />
              </AspectRatio>
            </Box>
            {/* <Box
            backgroundSize={400}
            backgroundImage='url("https://res.cloudinary.com/dsjas6fvz/image/upload/v1653423536/Radio%20Agua%20de%20Vida/proyecto_wlo4xs.jpg") !important'
          >
            <Box align='end'>
              <Tag mt={2} mr={2} borderRadius='full' bg='#1A202C' color='white'>
                2021
              </Tag>
            </Box>

            <Box>
              <Badge p={1} mt={40} bg='#1A202C' color='white'>
                PROYECTOS
              </Badge>
            </Box>
          </Box> */}
            <Box p={4}>
              <Text fontWeight={700}>#TodosporlaPatagonia</Text>
              <Text mt={2}>
                En la zona cordillerana de nuestra pais, se desato un fuego
                devastador, muchos oyentes por esos lugares nos hicieron llegar
                testimonio y diferentes circunstancias, alli tambien estuvimos.
              </Text>
              {/* <Text fontWeight={600} mt={2} fontSize='11' align='center'>
              #ConectadosConLaRealidad
            </Text> */}
            </Box>
          </Box>
          <Box maxW='600px' boxShadow='2xl'>
            <Box
              backgroundSize={400}
              backgroundImage='url("https://res.cloudinary.com/dsjas6fvz/image/upload/v1653423536/Radio%20Agua%20de%20Vida/proyecto_wlo4xs.jpg") !important'
            >
              <Box align='end'>
                <Tag
                  mt={2}
                  mr={2}
                  borderRadius='full'
                  bg='#1A202C'
                  color='white'
                >
                  2021 - ∞
                </Tag>
              </Box>

              <Box>
                <Badge p={1} mt={40} bg='#1A202C' color='white'>
                  PROYECTOS
                </Badge>
              </Box>
            </Box>
            <Box p={4}>
              <Text fontWeight={700}>#JuntosPorUnHogar</Text>
              <Text mt={2}>
                Nos propusimos conectar nuestra gente y vincularla desde otra
                perspectiva, Radio Agua de Vida no es solo una transmision, es
                mas que eso y por eso alegrar una familia es para nosotros una
                alegria
              </Text>
              <Box mt={2}>
                <Text fontWeight={500}>
                  Familia Vazquez
                  <Badge colorScheme='green' ml={1}>
                    HECHA
                  </Badge>
                </Text>
              </Box>
              <Box mt={2}>
                <Text fontWeight={500}>
                  Familia Cendoya
                  <Badge ml={1} colorScheme='green'>
                    HECHA
                  </Badge>
                </Text>
              </Box>

              {/* <Text fontWeight={600} mt={2} fontSize='11' align='center'>
              #ConectadosConLaRealidad
            </Text> */}
            </Box>
          </Box>
          <Box maxW='600px' boxShadow='2xl'>
            <AspectRatio maxW='560px' ratio={16 / 10}>
              <iframe
                title='Donaciones'
                src='https://www.youtube.com/embed/93tyTh5cp68'
                allowFullScreen
              />
            </AspectRatio>
            <Box p={4}>
              <Text fontWeight={700}>#1Juguetex1Dolar</Text>
              <Text mt={2}>
                Nos llegaban noticias de oyentes que estaban de otras partes del
                mundo expandiendo el evangelio por la India, la familia Arkani
                nos solicitaba el que cada persona colabore con 1 dolar para
                alegrarles el fin de anio a todos los de las comunidades
              </Text>

              {/* <Text fontWeight={600} mt={2} fontSize='11' align='center'>
              #ConectadosConLaRealidad
            </Text> */}
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </div>
  );
};

export default CardsProjects;
