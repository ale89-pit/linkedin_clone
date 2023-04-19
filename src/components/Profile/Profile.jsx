import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Jumbotron from "./Jumbotron";
import ForYou from "./ForYou";
import Attività from "./Attività";
import Analisi from "./Analisi";
import Formazione from "./Formazione";
import Interessi from "./Interessi";
import Esperienze from "./Esperienze";
import Risorse from "./Risorse";
import ListGroupExample from "./Rightside1";

const Profile = () => {
  return (
    <Container>
      <Row>
        <Col xs={7} className=" offset-1">
          <Jumbotron />
          <ForYou />
          <Analisi />
          <Risorse />
          <Attività />
          <Esperienze />
          <Formazione />
          <Interessi />
        </Col>
        <Col xs={3} className="bg-light">
        <ListGroupExample />
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
