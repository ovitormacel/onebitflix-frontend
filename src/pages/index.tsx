import styles from "../styles/HomeNoAuth.module.scss";

import Head from "next/head"
import HeaderNoAuth from "@/components/homeNoAuth/headerNoAuth";

const HomeNoAuth = () => {
  return (
    <>
      <Head>
        <title>OneBitFlix</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta property="og:title" content="OneBitFlix" key="title" />
        <meta name="description" content="A melhor plataforma de cursos de programação. Venha conhecer!"/>
      </Head>

      <main>
        <HeaderNoAuth />
      </main>
    </>
  )
}

export default HomeNoAuth;