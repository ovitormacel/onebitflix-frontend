import { Container } from "reactstrap";
import styles from "./styles.module.scss";

const Footer = () => {
    return (
        <>
            <Container className={styles.footer}>
                <img className={styles.footerLogo} src="/logoOnebitcode.svg" alt="Logo Footer" />
                <a className={styles.footerLink} href="http://onebitcode.com" target={"blank"}>onebitcode.com</a>
            </Container>
        </>
    )
}

export default Footer;