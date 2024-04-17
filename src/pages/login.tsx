import styles from "../styles/registerLogin.module.scss";
import Head from "next/head";
import HeaderGeneric from "@/components/common/headerGeneric";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import Footer from "@/components/common/footer";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import ToastComponent from "@/components/common/toast";
import authService from "@/services/authService";

const login = () => {
    const router = useRouter();
    const [toastColor, setToastColor] = useState("");
    const [toastIsOpen, setToastIsOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState("");

    // Verifica se o usuário já está logado.
    useEffect(() => {
        if(sessionStorage.getItem("onebitflix-token")){
            router.push("/home");
        }
    }, [])

    
    // Abre e configura o Toast.
    const openToast = (message: string, color: string) => {
        setToastIsOpen(true);
            
        setTimeout(() => {
            setToastIsOpen(false)
        }, 1000 * 3);

        setToastMessage(message);

        setToastColor(color);
    }

    useEffect(() => {
        const registerSuccess = router.query.registred;

        if(registerSuccess === "true") {
            openToast("Conta criada com sucesso.", "bg-success");
        }
    }, [router.query]);


    // Handler do Formulário.    
    const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const params = {
            email: formData.get("email")!.toString(),
            password: formData.get("password")!.toString(),
        }

        const {status} = await authService.login(params);

        if(status == 200) {
            router.push("/home");
        } else {
            openToast("E-mail ou senha incorretos.", "bg-danger");
        }
    }

    return (
        <>
            <Head>
                <title>Login - OneBitFlix</title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
            </Head>

            <main className={styles.main}>
                <HeaderGeneric logoUrl="/" btnUrl="/register" btnContent="Criar Conta"/>
            
                <Container className="py-5">
                    <p className={styles.formTitle}>Bem-vindo(a) de volta.</p>
                
                    <Form className={styles.form} onSubmit={handleLogin}>
                        <p className="text-center"><strong>Entre na sua conta</strong></p>
                    
                        <FormGroup>
                            <Label for="email" className={styles.label}>E-mail</Label>
                            <Input className={styles.input} id="email" name="email" type="email" placeholder="Digite seu e-mail"/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="password" className={styles.label}>Senha</Label>
                            <Input className={styles.input} id="password" name="password" type="password" placeholder="Digite sua senha"/>
                        </FormGroup>

                        <Button outline className={styles.formBtn}>Entrar</Button>
                    </Form>
                </Container>
                <Footer />

                <ToastComponent color={toastColor} isOpen={toastIsOpen} message={toastMessage} />
            </main>
        </>
    )
}

export default login;