import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import styles from "../../../styles/profile.module.scss";

const UserForm = () => {
    return (
        <>
            <Form className={styles.form}>
                <div className={styles.formName}>
                    <p className={styles.nameAbbreviation}>NT</p>
                    <p className={styles.username}>Name Test</p>
                </div>

                <div className={styles.memberTime}>
                    <img className={styles.memberTimeImg} src="/profile/iconUserAccount.svg" alt="Icon User Account" />
                    <p className={styles.memberTimeText}>Membro desde <br /> 12 de Fevereiro de 2024</p>
                </div>

                <hr />

                <div className={styles.inputFlexDiv}>
                    <FormGroup>
                        <Label className={styles.label} for="firstName">Nome</Label>
                        <Input 
                            name="firstName"
                            type="text"
                            id="firstName"
                            placeholder="Digite seu nome"
                            required
                            maxLength={20}
                            className={styles.inputFlex}
                            value={"Name"}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label className={styles.label} for="lastName" >Sobrenome</Label>
                        <Input 
                            name="lastName"
                            type="text"
                            id="lastName"
                            placeholder="Digite seu sobrenome"
                            required
                            maxLength={20}
                            className={styles.inputFlex}
                            value={"Test"}
                        />
                    </FormGroup>
                </div>

                <div className={styles.inputNormalDiv}>
                    <FormGroup>
                        <Label className={styles.label} for="phone">Celular</Label>
                        <Input 
                            name="phone"
                            type="tel"
                            id="phone"
                            placeholder="(xx) xxxxx-xxxx"
                            required
                            className={styles.input}
                            value={"+55 (11) 98787-8787"}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label className={styles.label} for="email">E-mail</Label>
                        <Input 
                            name="email"
                            type="email"
                            id="email"
                            placeholder="Digite seu e-mail"
                            required
                            className={styles.input}
                            value={"test@email.com"}
                        />
                    </FormGroup>

                    <Button className={styles.formBtn} outline type="submit">Salvar Alterações</Button>
                </div>
            </Form>
        </>
    )
}

export default UserForm;