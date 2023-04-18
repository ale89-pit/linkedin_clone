import { useDispatch } from "react-redux";
import { allProfilesThunk, profileThunk } from "../../redux/actions";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
const Home = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(profileThunk("Gabriele"));
  };

  const handleAll = () => {
    dispatch(allProfilesThunk());
  };

  return (
    <div>
      <Container>
        <Row>
          <Col xs={3} className="offset-1">
            ciao
          </Col>
          <Col xs={4}>ciao</Col>
          <Col xs={3}>ciao</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
