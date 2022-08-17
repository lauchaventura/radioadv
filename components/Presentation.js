import {
  Box,
  chakra,
  SimpleGrid,
  Text,
  AspectRatio,
  Link,
  Button,
  Image,
  Container,
} from "@chakra-ui/react";
import {GrMapLocation, GrPlay} from "react-icons/gr";
import React from "react";
import Reproductor from "./Reproductor";
import styles from "../styles/AudioPlayer.module.scss";
import {motion} from "framer-motion";
const Presentation = () => {
  return (
    <>
      <Box p={[3, 0]}>
        <SimpleGrid alignItems='center' columns={[1, 2]}>
          <Box align='start' justifyContent='center' mb={10}>
            <Text
              ml={[3, 6]}
              lineHeight={0.83}
              fontWeight='900'
              font='true'
              fontSize={[69, 60, 105]}
            >
              Somos distintos a los demas
            </Text>
            <Text ml={[3, 8]} fontSize={[20, 20, 16]} mt={2}>
              Somos Agua de Vida un medio audiovisual en donde encontraras lo
              que buscas. Estamos para vos y para todo los que nos escuchan.
            </Text>
          </Box>
          <Box align='center' maxW={540} ml={[, 2, 3, 9]} p={2}>
            <Image
              align='center'
              justify='center'
              src='https://res.cloudinary.com/dsjas6fvz/image/upload/v1658190582/Radio%20Agua%20de%20Vida/TODOS_dgrpce.png'
            />
          </Box>
        </SimpleGrid>
      </Box>
      <Box w='55px' position='fixed' bottom='50px' right='25px' zIndex='100'>
        <Link
          outline='none'
          href='https://api.whatsapp.com/send?phone=2984134931'
          isExternal
        >
          <Image
            borderRadius='2xl'
            src='https://res.cloudinary.com/dsjas6fvz/image/upload/v1658713033/Radio%20Agua%20de%20Vida/pngwing.com_dlalmd.png'
          />
        </Link>
      </Box>
    </>
  );
};

export default Presentation;
