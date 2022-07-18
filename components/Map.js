import React from "react";
import { Box, chakra, SimpleGrid, Text, Container, Stack, Button, Link } from "@chakra-ui/react";
import { GrMapLocation } from 'react-icons/gr';
const Map = () => {
    return (
        <Container maxW='container.xl'
            align="center"
            justify="space-between"
            wrap="wrap"
            padding={3}
            color="#1A202C"

        >
            <SimpleGrid alignItems='center' columns={[1, 2]} spacing={5} mt={5}>
                <Box boxShadow="2xl"
                    backgroundColor="#fff"  >
                    <Box overflow='hidden' paddingBottom='400' position='relative' height='0' >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3099.8523276380256!2d-67.63667628489308!3d-39.01868201171285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a1dfbb50cc07b%3A0xce26a880883c9fcf!2sRadio%20Agua%20de%20Vida!5e0!3m2!1ses!2sar!4v1647307509711!5m2!1ses!2sar" width="600" height="450" loading="lazy"></iframe>
                    </Box>
                </Box>
                <Box  >
                    <Text>
                        Nuestros estudios ubicados en General Roca, Rio Negro
                    </Text>
                    <Text fontWeight='semibold' fontSize='2xl'>
                        #Conectados con La Realidad
                    </Text>
                    <Link isExternal href='https://g.page/radioaguadevidaok?share' >
                        <Button _hover={{ bg: 'gray.300' }} bg='gray.100' size='lg' mt={2} leftIcon={<GrMapLocation color='white' />}>
                            Quiero llegar
                        </Button>
                    </Link>

                </Box>

            </SimpleGrid>

        </Container >
    )
}

export default Map;
