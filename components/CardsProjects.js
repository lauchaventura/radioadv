import {Box, SimpleGrid, Text, AspectRatio, Badge, Tag} from "@chakra-ui/react";
import React from "react";

const CardsProjects = () => {
  return (
    <div>
      <SimpleGrid
        mt={4}
        textAlign='start'
        columns={[1, 2, 3]}
        align='center'
        spacing={3}
        color='#1A202C'
      >
        <Box maxW='500px' boxShadow='2xl'>
          <Box>
            <AspectRatio maxW='560px' ratio={16 / 10}>
              <iframe
                title='naruto'
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
        <Box maxW='500px' boxShadow='2xl'>
          <Box
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
          </Box>
          <Box p={4}>
            <Text fontWeight={700}>#JuntosPorUnHogar</Text>
            <Text mt={2}>
              Nos propusimos conectar nuestra gente y vincularla desde otra
              perspectiva, Radio Agua de Vida no es solo una transmision, es mas
              que eso y por eso alegrar una familia es para nosotros una
              alegria.
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
                <Badge ml={1}>EN PROCESO</Badge>
              </Text>
            </Box>

            {/* <Text fontWeight={600} mt={2} fontSize='11' align='center'>
              #ConectadosConLaRealidad
            </Text> */}
          </Box>
        </Box>
        <Box maxW='500px' boxShadow='2xl'>
          <Box
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
          </Box>
          <Box p={4}>
            <Text fontWeight={700}>#JuntosPorUnHogar</Text>
            <Text mt={2}>
              Nos propusimos conectar nuestra gente y vincularla desde otra
              perspectiva, Radio Agua de Vida no es solo una transmision, es mas
              que eso y por eso alegrar una familia es para nosotros una
              alegria.
            </Text>

            {/* <Text fontWeight={600} mt={2} fontSize='11' align='center'>
              #ConectadosConLaRealidad
            </Text> */}
          </Box>
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default CardsProjects;
