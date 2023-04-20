import { Container, Row, Button, Col } from "react-bootstrap";
const randomNumber = (max) => {
  return Math.floor(Math.random() * max);
};
const Attività = () => {
  return (
    <Container className="mt-2 border rounded p-0 whiteBg">
    <Row className="mt-3 p-3">
      <Col className="d-flex align-items-center justify-content-between">
        <h5>Attività</h5>
        <div className="d-flex align-items-center">
          <Button variant="outline-primary btn rounded-pill me-2 text-end">
            Crea un post
          </Button>
          <i className="fas fa-pen"></i>
        </div>
      </Col>
      <p className="text-primary fw-bold mb-2">{randomNumber(50)} follower</p>
      <h5>Non hai ancora pubblicato nulla</h5>
      <p>I post che condividi appariranno qui</p>
    </Row>
    <button className="ButtonMostraRisorse border-top btn btn-light d-flex justify-content-center align-items-center">
      Mostra tutte le attività →
    </button>
  </Container>
  
  );
};
export default Attività;
