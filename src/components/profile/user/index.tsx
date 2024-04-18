import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import styles from "../../../styles/profile.module.scss";
import { FormEvent, useEffect, useState } from "react";
import profileService from "@/services/profileService";
import ToastComponent from "@/components/common/toast";

const UserForm = () => {

    const [toastIsOpen, setToastIsOpen] = useState(false);
    const [toastConfig, setToastConfig] = useState({
        color: "",
        message: ""
    });

    const [formInputs, setFormInputs] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        created_at: ""
    });

    useEffect(() => {
        profileService.fetchCurrent().then((user) => {
            const userInfos = {
                firstName: user.firstName,
                lastName: user.lastName,
                phone: user.phone,
                email: user.email,
                created_at: user.createdAt
            }

            setFormInputs(userInfos);
        })
    }, [])

    const handleUserUpdate = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const res = await profileService.updateProfile(formInputs);
    
        if(res === 200){
            setToastConfig({
                color: "bg-success",
                message: "Alterações Salvas"
            })
            setToastIsOpen(true);

            setTimeout(() => {
                setToastIsOpen(false);
            }, 1000 * 3);
        } else {
            setToastConfig({
                color: "bg-danger",
                message: "Alterações não autorizadas!"
            })
            setToastIsOpen(true);

            setTimeout(() => {
                setToastIsOpen(false);
            }, 1000 * 3);
        }
    }
    
    return (
        <>
            <Form className={styles.form} onSubmit={handleUserUpdate}>
                <div className={styles.formName}>
                    <p className={styles.nameAbbreviation}>
                        {formInputs.firstName.slice(0, 1)}{formInputs.lastName.slice(0, 1)}
                    </p>
                    <p className={styles.username}>{`${formInputs.firstName} ${formInputs.lastName}`}</p>
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
                            value={formInputs.firstName}
                            onChange={(event) => {
                                const updatedInputs = {...formInputs};
                                updatedInputs.firstName = event.target.value
                                setFormInputs(updatedInputs);
                            }}
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
                            value={formInputs.lastName}
                            onChange={(event) => {
                                const updatedInputs = {...formInputs};
                                updatedInputs.lastName = event.target.value
                                setFormInputs(updatedInputs);
                            }}
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
                            value={formInputs.phone}
                            onChange={(event) => {
                                const updatedInputs = {...formInputs};
                                updatedInputs.phone = event.target.value
                                setFormInputs(updatedInputs);
                            }}
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
                            value={formInputs.email}
                            onChange={(event) => {
                                const updatedInputs = {...formInputs};
                                updatedInputs.email = event.target.value
                                setFormInputs(updatedInputs);
                            }}
                        />
                    </FormGroup>

                    <Button className={styles.formBtn} outline type="submit">Salvar Alterações</Button>
                </div>
            </Form>

            <ToastComponent color={toastConfig.color} isOpen={toastIsOpen} message={toastConfig.message} />
        </>
    )
}

export default UserForm;