import { Container, Row,} from "react-bootstrap"

const Interessi = () => {
    return (
        <Container className="border rounded p-3 mt-2 whiteBg">
            <Row className="mt-3">
                <h5>Interessi</h5>
            </Row>
            <div className="d-flex border-bottom">
                <p className="me-5">Aziende</p>
                <p>Scuole o università</p>
            </div>
            <div className="d-flex justify-content-between">
                <button className="btn rounded-pill border border-dark m-5 p-2 btn btn-light">
                    Già segui
                </button>
                <button className="btn rounded-pill border border-dark m-5 p-2 btn btn-light">
                    Già segui
                </button>
            </div>
        </Container>
    )
}

export default Interessi