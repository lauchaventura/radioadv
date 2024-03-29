import React from "react";
import emailjs from "@emailjs/browser";
import {
  SimpleGrid,
  Container,
  Box,
  Text,
  AspectRatio,
  Input,
  Badge,
  Button,
  Textarea,
  Link,
  NumberInput,
  FormErrorMessage,
  NumberInputStepper,
  Heading,
  NumberInputField,
} from "@chakra-ui/react";
import {GrMapLocation} from "react-icons/gr";
import {useState} from "react";
import {useRef} from "react";
export const Mailer = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0wihd11",
        "template_6tv6viz",
        form.current,
        "c9w-zWBVZbAzNjxhf"
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <SimpleGrid alignItems='center' columns={[1, 2]} p={[3, 0]}>
        <Box align='start'>
          <Text
            ml={[3, 9]}
            lineHeight={0.83}
            fontWeight='900'
            font='true'
            fontSize={[69, 60, 80, 115]}
          >
            Estamos para vos las 24 horas
          </Text>
          <Text ml={[3, 10]} fontSize={[16, 20, 18]} mt={2}>
            Queres colaborar con nuestros servicios? No dudes en escribirnos.
          </Text>
        </Box>
        <Box align='center'>
          <Box
            boxShadow='2xl'
            p={3}
            maxWidth='540px'
            align='start'
            maxHeight='520px'
            mt={2}
          >
            <form ref={form} onSubmit={sendEmail}>
              <Text align='center' fontWeight='900' size='md' color='#1D3557'>
                CONTACTATE CON NOSOTROS
              </Text>
              <Text mt={3} fontSize='15px'>
                <Badge variant='outline' color='#1D3557'>
                  Direccion
                </Badge>
                {""} San Martin 5200, General Roca, Rio Negro, Codigo Postal:
                8332
              </Text>
              <Text fontWeight='500' fontSize='15px' mt={2}>
                <Badge variant='outline' colorScheme='whatsapp'>
                  Whatsapp{" "}
                </Badge>

                <Link
                  style={{textDecoration: "none"}}
                  href='https://api.whatsapp.com/send?phone=2984134931'
                  cursor='pointer'
                  fontWeight='bold'
                >
                  {""} +54 9 2984134931
                </Link>
              </Text>
              <Box></Box>
              <Text mt={3} fontWeight='800'>
                Nombre
              </Text>
              <Input variant='flushed' type='text' name='user_name' size='sm' />
              <Text fontWeight='800' mt={5}>
                Telefono
              </Text>
              <NumberInput
                variant='flushed'
                type='text'
                name='user_phone'
                size='sm'
              >
                <NumberInputField />
                <NumberInputStepper></NumberInputStepper>
              </NumberInput>

              <Text mt={3} fontWeight='800'>
                Email
              </Text>
              <Input
                type='email'
                name='user_email'
                variant='flushed'
                size='sm'
              />
              <Text mt={3} fontWeight='800'>
                Mensaje
              </Text>
              <Textarea variant='flushed' name='message' />
              <Box align='center'>
                <Button
                  colorScheme='blue'
                  variant='solid'
                  mt={4}
                  justify='center'
                  type='submit'
                  value='Send'
                  outline='none'
                  _focus={"outline: none"}
                  bg='#31587a'
                >
                  ENVIAR
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
        {/* <Box boxShadow='2xl' backgroundColor='#fff' align='center'>
          <AspectRatio ratio={12 / 13}>
            <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.304633384232!2d-67.6351472883135!3d-39.019867560152875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a1dfbb50cc07b%3A0xce26a880883c9fcf!2sRadio%20Agua%20de%20Vida!5e0!3m2!1ses!2sar!4v1658265222134!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade' />
          </AspectRatio>
        </Box> */}
      </SimpleGrid>
    </>
  );
};

export default Mailer;
