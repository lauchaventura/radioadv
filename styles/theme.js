import { extendTheme } from '@chakra-ui/react'

const fonts = {
    heading: 'Open Sans, sans-serif',
    body: 'Montserrat, sans-serif',
}
const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}
const theme = extendTheme({ config, fonts })


export default theme
