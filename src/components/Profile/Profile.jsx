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
import ProfilePost from "./ProfilePost";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.login.user.username);
  const allPosts = useSelector((state) => state.home.allPosts);
  return (
    <Container>
      <Row>
        <Col xs={12} lg={7} className=" offset-1">
          <Jumbotron />
          <ForYou />
          <Esperienze />
          {allPosts > 0 && <ProfilePost user={user} />}
          <Attività />
          <Analisi />
          <Risorse />
          <Formazione />
          <Interessi />
        </Col>
        <Col xs={12} lg={3} className="bg-light">
          <ListGroupExample />
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
