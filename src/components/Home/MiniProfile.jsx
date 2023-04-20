import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MiniProfile = () => {
  const user = useSelector((state) => state.profile.content);

  return (
    <Card style={{ width: "18rem" }} className="me-2">
      <Card.Img variant="top" height={60} src={user.image} />
      <Card.Body>
        <Card.Title>
          {user.name} {user.surname}
        </Card.Title>
        <Card.Text>experiense</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <Row>
            <Col>
              <a href="#">
                Collegamenti <br />
                Espandi la tua rete
              </a>
              <p></p>
            </Col>
            <Col>x</Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default MiniProfile;
