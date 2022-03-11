import React from "react";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "../components/Header";

import { useState } from 'react'
const axios = require('axios')



const Programs = () => {
    return (
        <>
            <Head>
                <title>Radio Agua de Vida | Programas</title>
            </Head>
            <ChakraProvider>
                <Header />
            </ChakraProvider>
        </>
    )
};


export default Programs;
