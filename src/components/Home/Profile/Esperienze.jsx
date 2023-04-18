import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Esperienze = () => {
  return (
    <>
    <Card>
          <Card.Header><h3>Esperienze</h3></Card.Header>
          <Row>
            <Col xs={2}><img src="https://placekitten.com/100" alt="" /></Col>
            <Col>
          <Card.Body>
            <Card.Title> Card Title </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          </Col>
          </Row>
        </Card>
    </>
  );
}

export default Esperienze;