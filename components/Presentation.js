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
      <SimpleGrid alignItems='center' columns={[1, 2]}>
        <Box align='start' justifyContent='center' mb={10}>
          <Text
            p={6}
            ml={1}
            lineHeight={0.83}
            Textalign='start'
            fontWeight='900'
            fontSize={[67, 60, 105]}
          >
            Somos distintos a los demas
          </Text>
          <Text Textalign='start' ml={8}>
            Somos Agua de Vida un medio audiovisual en donde encontraras lo que
            buscas. Estamos para vos y para todo los que nos escuchan.
          </Text>
        </Box>
        <Box align='center' maxW={540} ml={[, 2, 3, 9]} p={2}>
          <Image
            p={[5, 0]}
            align='center'
            justify='center'
            src='https://res.cloudinary.com/dsjas6fvz/image/upload/v1658190582/Radio%20Agua%20de%20Vida/TODOS_dgrpce.png'
          />
        </Box>
      </SimpleGrid>
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
