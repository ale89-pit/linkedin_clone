import { Container, Row,} from "react-bootstrap";

const Formazione = () => {
    return (
        <Container className="my-2 border rounded p-3 whiteBg">
            <Row className="mt-3 d-flex align-items-center">
                <div>
                    <h5 className="">Esperienza</h5>
                </div>
                <img />
                <div className="mx-3">
                    <h6 className="mb-1"></h6>
                    <ul className="noBorder mb-0">
                        <li className="mb-1">Front-end</li>
                        <li className="mb-1">Back-end</li>
                    </ul>
                </div>
            </Row>
        </Container>
    );
};

export default Formazione;