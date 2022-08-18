import React from "react";
import {
  Box,
  Image,
  Text,
  Grid,
  SimpleGrid,
  Heading,
  Stack,
  Link,
} from "@chakra-ui/react";

const CardsDonation = () => {
  return (
    <>
      <Grid
        p={6}
        gridGap={8}
        templateColumns='repeat(auto-fill, minmax(240px, 1fr))'
        align='center'
      >
        <Box
          borderRadius='md'
          boxShadow='lg'
          transition='500ms'
          _hover={{boxShadow: "2xl", transform: "translateY(-3%)"}}
        >
          <Box bg='#a8dadc'>
            <Image
              src='https://res.cloudinary.com/dsjas6fvz/image/upload/v1653339183/Radio%20Agua%20de%20Vida/1_fvo0wm.png'
              objectFit='cover'
              boxSize='200px'
            />
          </Box>

          <Box p={2} mt={2}>
            <Text fontWeight='600'>Donar en territorio nacional</Text>
            <Text>
              Podes colaborar con nuestros servicios desde cualquier parte del
              pais(AR)
            </Text>
            <Link
              href='https://mpago.la/2C6XcKo'
              isExternal
              borderStyle='outline'
            >
              <Image
                cursor='pointer'
                p={5}
                width='90px'
                src='https://d31dn7nfpuwjnm.cloudfront.net/images/valoraciones/0035/0133/Tarjeta_Prepaga_MercadoPago_solicitar__requisitos_y_beneficios.png?1567716920'
              />
            </Link>
          </Box>
        </Box>

        <Box
          boxShadow='lg'
          borderRadius='md'
          transition='500ms'
          _hover={{boxShadow: "2xl", transform: "translateY(-3%)"}}
        >
          <Box bg='#457b9d'>
            <Image
              bg='#a8dadc'
              src='https://res.cloudinary.com/dsjas6fvz/image/upload/v1653339183/Radio%20Agua%20de%20Vida/2_ei5qn8.png'
              objectFit='cover'
              boxSize='200px'
            />
          </Box>
          <Box p={2}>
            <Text mt={2} fontWeight='semibold'>
              Donar desde el Exterior
            </Text>
            <Text>
              Podes colaborar con nuestros servicios desde cualquier parte del
              mundo
            </Text>
            <Image
              cursor='pointer'
              p={6}
              width='220px'
              src='https://res.cloudinary.com/dsjas6fvz/image/upload/v1651623659/Radio%20Agua%20de%20Vida/tarjetas_lted6p.png'
            />
          </Box>
        </Box>
        <Box
          boxShadow='lg'
          transition='all 500ms ease'
          _hover={{boxShadow: "2xl", transform: "translateY(-3%)"}}
        >
          <Box bg='#1d3557'>
            <Image
              src='https://res.cloudinary.com/dsjas6fvz/image/upload/v1653339183/Radio%20Agua%20de%20Vida/3_pvqwyk.png'
              objectFit='cover'
              boxSize='200px'
            />
          </Box>
          <Box p={3}>
            <Text fontWeight='semibold'>Donar telefonicamente</Text>
            <Text>Desde cualquier parte del mundo, estes donde estes</Text>
            <Box p='3'>
              <Text mt={3}>En Argentina: 2984134931</Text>
              <Text>En el Exterior: (+549) 2984134931</Text>
            </Box>
          </Box>
        </Box>
        <Box
          boxShadow='lg'
          transition='500ms'
          _hover={{boxShadow: "2xl", transform: "translateY(-3%)"}}
        >
          <Box bg='#e63946'>
            <Image
              src='https://res.cloudinary.com/dsjas6fvz/image/upload/v1658857571/Radio%20Agua%20de%20Vida/avatar_gv8nca.png'
              objectFit='cover'
              boxSize='200px'
            />
          </Box>
          <Box p={3}>
            <Text fontWeight='semibold'>Donar presencialmente</Text>
            <Text>En General Roca, Rio Negro, Argentina</Text>
            <Box p='3' mt={3}>
              <Text>Nuestros estudios centrales</Text>
              <Text>Llamar previamente: 2984134931</Text>
            </Box>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default CardsDonation;
