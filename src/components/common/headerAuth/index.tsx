import { Container, Form, Input } from "reactstrap";
import styles from "./styles.module.scss";
import Link from "next/link";
import Modal from "react-modal";
import { useState } from "react";
import { useRouter } from "next/router";

Modal.setAppElement('#__next');

const HeaderAuth = () => {
    const router = useRouter();
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleOpenModal = () => {
        setModalIsOpen(true);
    }
    const handleCloseModal = () => {
        setModalIsOpen(false);
    }


    const handleLogout = () => {
        sessionStorage.clear();

        router.push("/");
    }

    return (
        <>
            <Container className={styles.nav}>
                <Link href="/home"><img className={styles.imgLogoNav} src="/logoOnebitflix.svg" alt="Logo OneBitFlix" /></Link>
            
                <div className="d-flex align-items-center">
                    <Form>
                        <Input className={styles.input} name="search" type="search" placeholder="Pesquisar..."/>
                    </Form>
                    <img className={styles.searchImg} src="/homeAuth/iconSearch.svg" alt="Lupa" />
                    <p className={styles.userProfile} onClick={handleOpenModal}>AB</p>
                </div>

                {/* MODAL */}
                <Modal className={styles.modal} isOpen={modalIsOpen} onRequestClose={handleCloseModal} shouldCloseOnEsc={true} overlayClassName={styles.overlayModal}>
                    <Link style={{textDecoration: "none"}} href="/profile">
                        <p className={styles.modalLink}>Meu Perfil</p>
                    </Link>
                    <p onClick={handleLogout} className={styles.modalLink}>Sair</p>
                </Modal>
            </Container>
        </>
    )
}

export default HeaderAuth;