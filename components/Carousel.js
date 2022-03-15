import React from "react";
import { Box, chakra, SimpleGrid, Text } from "@chakra-ui/react";
import styles from '../styles/Map.module.css'
const Carousel = () => {
    return (
        <SimpleGrid mt={8}>
            <Box overflow='hidden' paddingBottom='400' position='relative' height='0' >

                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3099.8523276380256!2d-67.63667628489308!3d-39.01868201171285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a1dfbb50cc07b%3A0xce26a880883c9fcf!2sRadio%20Agua%20de%20Vida!5e0!3m2!1ses!2sar!4v1647307509711!5m2!1ses!2sar" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
                </div>

            </Box>
        </SimpleGrid>)
};

export default Carousel;
