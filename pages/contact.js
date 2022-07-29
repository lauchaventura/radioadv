import Footer from "../components/Footer";
import Header from "../components/Header";
import Mailer from "../components/Mailer/Mailer";
import Head from "next/head";

 const Contact = () => {
  return (
    <>
    <Head>
                <title>Radio Agua de Vida | Contacto</title>
            </Head>
    <Header />
    <Mailer/>
    <Footer/>
    </>

  )
}

export default Contact;
