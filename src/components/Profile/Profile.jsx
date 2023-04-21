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
import Rightside1 from "./Rightside1";
import EsperienceCard from "./EsperienceCard";
import ProfilePost from "./ProfilePost";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.login.user.username);
  const allPosts = useSelector((state) => state.home.allPosts);
  return (
    <Container>
      <Row>
        <Col xs={12} lg={9}>
          <Jumbotron />
          <ForYou />
          <Esperienze />
          {allPosts[0].length > 0 && <ProfilePost user={user} />}
          <Attività />
          <Analisi />
          <Risorse />
          <Formazione />
          <Interessi />
        </Col>
        <Col className="d-none d-lg-block" lg={3}>
          <Rightside1 />
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
