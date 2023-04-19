import { useDispatch, useSelector } from "react-redux";
import { allProfilesThunk, profileThunk } from "../../redux/actions";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import MakePost from "./MakePost";
import ShowPost from "./ShowPost";
import { useEffect } from "react";
import { postsThunk } from "../../redux/actions/HomePost";
import { Spinner } from "react-bootstrap";
import ProfilePost from "./ProfilePost";
import MiniProfile from "./MiniProfile";

const Home = () => {
  const dispatch = useDispatch();
  const allPosts = useSelector((state) => state.home.allPosts);
  const user = useSelector((state) => state.login.user.username);

  useEffect(() => {
    dispatch(postsThunk(user));
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} lg={3} className="offset-1">
            <MiniProfile />
          </Col>
          <Col xs={12} lg={4}>
            <MakePost />
            <hr />

            {allPosts[0] ? (
              allPosts[0].map((el, i) => (
                <ShowPost key={el._id + i} post={el} />
              ))
            ) : (
              <div className="d-flex justify-content-center my-4">
                <Spinner></Spinner>
              </div>
            )}
          </Col>
          <Col xs={12} lg={3} className="bg-light"></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
