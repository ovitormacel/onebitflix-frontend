import HeaderGeneric from "@/components/common/headerGeneric";
import styles from "../styles/registerLogin.module.scss";
import Head from "next/head";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import Footer from "@/components/common/footer";
import { FormEvent } from "react";
import authService from "@/services/authService";

const Register = () => {
    
    const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const confirmPassword = formData.get("confirmPassword")!.toString()

        const params = {
            firstName: formData.get("firstName")!.toString(),
            lastName: formData.get("lastName")!.toString(),
            phone: formData.get("phone")!.toString(),
            birth: formData.get("birth")!.toString(),
            email: formData.get("email")!.toString(),
            password: formData.get("password")!.toString(),
        }

        if(params.password !== confirmPassword){
            alert("As senhas são diferentes");
            return;
        }

        const {data, status} = await authService.register(params);

        if (status === 201){
            alert("Registrado com sucesso!");
        } else {
            alert(data.message);
        }
    }

    return (
        <>
            <Head>
                <title>Registro - OneBitFlix</title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
                <script src="https://jsuites.net/v5/jsuites.js"></script>
            </Head>

            <main className={styles.main}>
                <HeaderGeneric logoUrl="/" btnUrl="/login" btnContent="Entrar"/>
            
                <Container className="py-5">
                    <p className={styles.formTitle}>Bem-vindo(a) ao OneBitFlix</p>
                    
                    <Form className={styles.form} onSubmit={handleRegister}>
                        <p className="text-center"><strong>Crie sua conta</strong></p>
                        
                        <FormGroup>
                            <Label for="firstName" className={styles.label}>Nome</Label>
                            <Input 
                                className={styles.inputName} 
                                id="firstName" 
                                name="firstName" 
                                type="text" 
                                placeholder="Qual o seu nome?" 
                                required 
                                maxLength={20}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="lastName" className={styles.label}>Sobrenome</Label>
                            <Input 
                                className={styles.inputName} 
                                id="lastName" 
                                name="lastName" 
                                type="text" 
                                placeholder="Qual o seu sobrenome?" 
                                required 
                                maxLength={20}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="phone" className={styles.label}>Celular</Label>
                            <Input 
                                className={styles.input} 
                                id="phone" 
                                name="phone" 
                                type="tel" 
                                placeholder="(xx) xxxxx-xxxx" 
                                data-mask="[-]+55 (00) 00000-0000"
                                required
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="email" className={styles.label}>E-mail</Label>
                            <Input 
                                className={styles.input} 
                                id="email" 
                                name="email" 
                                type="email" 
                                placeholder="Digite seu e-mail" 
                                required
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="birth" className={styles.label}>Data de Nascimento</Label>
                            <Input 
                                className={styles.input} 
                                id="birth" 
                                name="birth" 
                                type="date" 
                                min="1920-01-01" 
                                max="2040-12-31" 
                                required
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="password" className={styles.label}>Senha</Label>
                            <Input 
                                className={styles.input} 
                                id="password" 
                                name="password" 
                                type="password" 
                                placeholder="Digite sua senha" 
                                minLength={6} 
                                maxLength={30} 
                                required
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="confirmPassword" className={styles.label}>Confirmação de Senha</Label>
                            <Input 
                                className={styles.input} 
                                id="confirmPassword" 
                                name="confirmPassword" 
                                type="password" 
                                placeholder="Confirme sua senha" 
                                minLength={6} 
                                maxLength={30} 
                                required
                            />
                        </FormGroup>

                        <FormGroup>
                            <Input 
                                className={styles.input} 
                                type="submit" 
                                value="Registrar"
                                required
                            />
                        </FormGroup>
                    
                    </Form>
                
                </Container>

                <Footer />
            </main>
        </>
    )
}

export default Register;