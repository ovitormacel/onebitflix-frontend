import Head from "next/head";
import styles from "../styles/profile.module.scss";
import UserForm from "@/components/profile/user";
import HeaderAuth from "@/components/common/headerAuth";
import { Button, Col, Container, Row } from "reactstrap";
import Footer from "@/components/common/footer";
import { useState } from "react";
import PasswordForm from "@/components/profile/password";

const UserInfo = () => {

    const [form, setForm] = useState("userForm") 

    return (
        <>
            <Head>
                <title>Perfil - OneBitFlix</title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
            </Head>

            <main>
                <div className={styles.header}>
                    <HeaderAuth />
                </div>
                <Container className="py-5">
                    <p className={styles.title}>Meu Perfil</p>
                    <Row className="pt-3 pb-5">
                        <Col md={4} className={styles.btnColumn}>
                            <Button 
                                onClick={() => setForm("userForm")} 
                                className={styles.renderForm} 
                                style={{borderColor: form === "userForm" ? "#FF0044" : ""}}
                            >
                                Dados Pessoais
                            </Button>
                            
                            <Button 
                                onClick={() => setForm("passwordForm")} 
                                className={styles.renderForm} 
                                style={{borderColor: form === "passwordForm" ? "#FF0044" : ""}}
                            >
                                Senha
                            </Button>
                        </Col>

                        <Col md>
                            {form === "userForm" ? <UserForm /> : <PasswordForm />}
                        </Col>
                    </Row>
                </Container>
                <div className={styles.footer}>
                    <Footer />
                </div>
            </main>
        </>
    )
}

export default UserInfo;