import { Container, Row, Button, Col } from "react-bootstrap";

const Attività = () => {
  return (
    <Container className="mt-2 border rounded p-0 whiteBg">
      <Row className="mt-3 p-3">
        <Col className="ButtonFlex">
          <h5>Attività</h5>
          <Button variant="outline-primary btn rounded-pill">
            Avvia un post
          </Button>
        </Col>

        <p className="text-primary fw-bold mb-2"> follower </p>
        <p>ha diffuso questo post </p>
      </Row>
        <button className="ButtonMostraRisorse border-top btn btn-light d-flex justify-content-center align-items-center">
          Mostra tutte le attività
        </button>
    </Container>
  );
};
export default Attività;
