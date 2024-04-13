import { Button, Container } from "reactstrap";
import styles from "./styles.module.scss";
import Link from "next/link";

const HeaderNoAuth = () => {
    return (
        <>
            <div className={styles.ctaSection}>
                <img src="/homeNoAuth/logoCta.png" alt="Logo Cta" className={styles.imgCta}/>
            
                <p>Cadastre-se para ter acesso aos cursos</p>
            
                <img src="/homeNoAuth/logoCta.png" alt="Logo Cta" className={styles.imgCta}/>
            </div>

            <Container className={styles.nav}>
                <img className={styles.imgLogoNav} src="/logoOnebitflix.svg" alt="Logo OneBitFlix" />

                <div>
                    <Link href="/login">
                        <Button className={styles.navBtn} outline>Entrar</Button>
                    </Link>
                    <Link href="/register">
                        <Button className={styles.navBtn} outline>Quero Fazer Parte</Button>
                    </Link>
                </div>
            </Container>
        </>
    )
}

export default HeaderNoAuth;