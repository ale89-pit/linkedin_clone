import { Container, Row, Button, Col, } from "react-bootstrap";


const Attività = () => {

  return (
    <Container className="allCards mt-2 border rounded ps-1">
      <Row className=" textAttività mt-4 ms-1">

        <Col className="ButtonFlex">
          <h5 className="">Attività</h5>
          <Button variant="outline-primary ButtonAttività">Avvia un post</Button>
        </Col>

        <p className="text-primary fw-bold mb-2"> follower </p>
        <p>ha diffuso questo post </p>
        <button className="ButtonMostraRisorse">Mostra tutte le attività</button>
      </Row>
    </Container>
  )
}
export default Attività;
