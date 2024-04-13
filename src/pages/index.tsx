//Styles
import styles from "../styles/HomeNoAuth.module.scss";
//Components
import Head from "next/head"

const HomeNoAuth = () => {
  return (
    <>
      <Head>
        <title>Início</title>
      </Head>

      <main>
        <h1>Olá, mundo</h1>
      </main>
    </>
  )
}

export default HomeNoAuth;