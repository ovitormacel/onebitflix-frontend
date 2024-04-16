import HeaderGeneric from "@/components/common/headerGeneric";
import styles from "../styles/registerLogin.module.scss";
import Head from "next/head";

const Register = () => {
    return (
        <>
            <Head>
                <title>Registro - OneBitFlix</title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
            </Head>

            <main>
                <HeaderGeneric logoUrl="/" btnUrl="/login" btnContent="Entrar"/>
            </main>
        </>
    )
}

export default Register;