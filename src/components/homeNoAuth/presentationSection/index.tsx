import Link from "next/link";
import styles from "./styles.module.scss";
import { Container, Row, Col, Button } from "reactstrap";

const PresentationSection = () => {
    return (
        <>
            <Container className="py-4">
                <Row>
                    <Col md className="d-flex flex-column justify-content-center align-itens-start">
                        <p className={styles.subtitle}>Acesso Vitalício</p>
                        <p className={styles.title}>Tenha acesso aos melhores <br /> cursos de Programação.</p>
                        <p className={styles.description}>Estude de onde estiver, e se torne o melhor programador que você pode ser.</p>

                        <Link className={styles.linkCta} href="/register">
                            <Button className={styles.btnCta} outline>Acesse Agora <img className={styles.btnImg} src="/buttonPlay.svg" alt="button img" /></Button>
                        </Link>                    
                    </Col>

                    <Col md>
                        <img className={styles.imgPresentation} src="/homeNoAuth/imgPresentation.png" alt="imgPresentation" />
                    </Col>
                </Row>

                <Row>
                    <Col className="d-flex justify-content-center pt-5">
                        <img className={styles.arrowDown} src="/homeNoAuth/iconArrowDown.svg" alt="arrowDown" />
                    </Col>
                </Row>
            </Container>
        </>
    )
} 

export default PresentationSection;