import { useDispatch } from "react-redux";
import { allProfilesThunk, profileThunk } from "../../redux/actions";
import { Col } from "react-bootstrap";
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
      <Col xs={2}>ciao</Col>
      <Col xs={4}>ciao</Col>
      <Col xs={2}>ciao</Col>
    </div>
  );
};

export default Home;
