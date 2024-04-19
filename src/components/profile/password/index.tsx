import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import styles from "../../../styles/profile.module.scss";
import { FormEvent, useEffect, useState } from "react";
import profileService from "@/services/profileService";
import ToastComponent from "@/components/common/toast";

const PasswordForm = () => {
    const [formInputs, setFormInputs] = useState({
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: ""
    })

    const [toastIsOpen, setToastIsOpen] = useState(false);
    const [toastConfig, setToastConfig] = useState({
        color: "",
        message: ""
    });

    useEffect(() => {
        profileService.fetchCurrent().then((password) => {
            const updatedFormInputs = {...formInputs};
            updatedFormInputs.currentPassword = password.currentPassword;
            updatedFormInputs.newPassword = password.newPassword;
            setFormInputs(updatedFormInputs);
        })
    }, [])

    const handlePasswordUpdate = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(formInputs.newPassword != formInputs.confirmNewPassword) {
            setToastConfig({
                color: "bg-danger",
                message: "A senha e a confirmação de senha são diferentes."
            })
            setToastIsOpen(true);

            setTimeout(() => {
                setToastIsOpen(false);
            }, 1000 * 3);
            
            return
        }

        if(formInputs.currentPassword === formInputs.newPassword){
            setToastConfig({
                color: "bg-danger",
                message: "Nova senha é igual a senha atual."
            })
            setToastIsOpen(true);

            setTimeout(() => {
                setToastIsOpen(false);
            }, 1000 * 3);
            
            return
        }

        const res = await profileService.updatePassword({
            currentPassword: formInputs.currentPassword,
            newPassword: formInputs.newPassword
        });

        if(res === 204) {
            setToastConfig({
                color: "bg-success",
                message: "Senha alterada com sucesso!"
            })
            setToastIsOpen(true);

            setTimeout(() => {
                setToastIsOpen(false);
            }, 1000 * 3);
            
            const clearInputs = {
                currentPassword: "",
                newPassword: "",
                confirmNewPassword: ""
            }

            setFormInputs(clearInputs);
        }

        if(res === 400) {
            setToastConfig({
                color: "bg-danger",
                message: "Senha atual incorreta!"
            })
            setToastIsOpen(true);

            setTimeout(() => {
                setToastIsOpen(false);
            }, 1000 * 3);
        }
    }
    
    return (
        <>
            <Form className={styles.form} onSubmit={handlePasswordUpdate}>
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
                            maxLength={20}
                            value={formInputs.currentPassword}
                            onChange={(event) => {
                                const updatedFormInputs = {...formInputs};
                                updatedFormInputs.currentPassword = event.target.value;
                                setFormInputs(updatedFormInputs);
                            }}
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
                            maxLength={20}
                            value={formInputs.newPassword}
                            onChange={(event) => {
                                const updatedFormInputs = {...formInputs};
                                updatedFormInputs.newPassword = event.target.value;
                                setFormInputs(updatedFormInputs);
                            }}
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
                            maxLength={20}
                            value={formInputs.confirmNewPassword}
                            onChange={(event) => {
                                const updatedFormInputs = {...formInputs};
                                updatedFormInputs.confirmNewPassword = event.target.value;
                                setFormInputs(updatedFormInputs);
                            }}
                        />
                    </FormGroup>

                    <Button outline className={styles.formBtn} type="submit">Salvar Alterações</Button>
                </div>
            </Form>

            <ToastComponent color={toastConfig.color} isOpen={toastIsOpen} message={toastConfig.message} />
        </>
    )
}

export default PasswordForm;