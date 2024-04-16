import { Button, Container } from "reactstrap";
import styles from "./styles.module.scss";
import Link from "next/link";

interface props {
    logoUrl: string,
    btnUrl: string,
    btnContent: string
}

const HeaderGeneric = ({logoUrl, btnUrl, btnContent}: props) => {
    return (
        <>
            <div className={styles.header}>
                <Container className={styles.headerContainer}>
                    <Link href={logoUrl}>
                        <img className={styles.headerLogo} src="/logoOnebitflix.svg" alt="Logo Registro" />
                    </Link>

                    <Link href={btnUrl}>
                        <Button className={styles.headerBtn} outline color="light">{btnContent}</Button>
                    </Link>
                </Container>
            </div>
        </>
    )
}

export default HeaderGeneric;