import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MiniProfile = () => {
  const user = useSelector((state) => state.profile.content);

  return (
    <Card className="align-item-center mb-3">
      <Card.Img variant="top" height={80} src={user.image} />
      <img
        className="rounded-circle text-center"
        height={50}
        width={50}
        src={user.image}
        alt="img-profile"
        id="fotoMiniJumbotron"
      />
      <Card.Body className="text-center">
        <Card.Title>
          {user.name} {user.surname}
        </Card.Title>
        <Card.Text>experiense</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush d-none d-md-inline">
        <ListGroup.Item action>
          <Row>
            <Col>
              Collegamenti <br />
              Espandi la tua rete
            </Col>
            <Col className="text-end">x</Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item action>
          <Row>
            <Col>Chi ha visitato il tuo profilo?</Col>
            <Col className="text-end">x</Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item action>
          Accedi a strumenti e informazioni in esclusiva <br />{" "}
          <a href="#">Prova Premium gratis</a>
        </ListGroup.Item>
        <ListGroup.Item action>
          <i class="fas fa-bookmark"></i> I miei elementi
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default MiniProfile;
