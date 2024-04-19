import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import styles from "../../../styles/profile.module.scss";

const PasswordForm = () => {
    return (
        <>
            <Form className={styles.form}>
                <div className={styles.inputNormalDiv}>
                    <FormGroup>
                        <Label className={styles.label} for="currentPassword">Senha Atual</Label>
                        <Input 
                            className={styles.input}
                            name="currentPassword"
                            type="password"
                            id="currentPassword"
                            placeholder="********"
                            required
                            minLength={7}
                            max={20}
                        />
                    </FormGroup>
                </div>

                <div className={styles.inputFlexDiv}>
                    <FormGroup>
                        <Label className={styles.label} for="newPassword">Nova Senha</Label>
                        <Input 
                            className={styles.inputFlex}
                            name="newPassword"
                            type="password"
                            id="newPassword"
                            placeholder="********"
                            required
                            minLength={7}
                            max={20}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label className={styles.label} for="confirmNewPassword">Confirmar Nova Senha</Label>
                        <Input 
                            className={styles.inputFlex}
                            name="confirmNewPassword"
                            type="password"
                            id="confirmNewPassword"
                            placeholder="********"
                            required
                            minLength={7}
                            max={20}
                        />
                    </FormGroup>

                    <Button outline className={styles.formBtn} type="submit">Salvar Alterações</Button>
                </div>
            </Form>
        </>
    )
}

export default PasswordForm;