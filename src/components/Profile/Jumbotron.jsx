import { Button, Card, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "react-bootstrap/esm";

const Jumbotron = ({ userLink }) => {
  const user = useSelector((state) => state.profile.content);
  const loading = useSelector((state) => state.profile.loading);
  return (
    <div>
      {loading ? (
        <Card className="w-100 positon-relative mb-2" id="jumbo-Card">
          <div className="rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 552 138"
              id="person-default"
              data-supported-dps="2048x512"
            >
              <path fill="none" d="M0 0h552v138H0z" />
              <path fill="#d9e5e7" d="M0 0h552v138H0z" />
              <path fill="#bfd3d6" d="M380 0h172v138H380z" />
              <path
                d="M333.22 0H0v138h333.22a207.93 207.93 0 000-138z"
                fill="#a0b4b7"
              />
            </svg>
          </div>
          <Card.Body className="d-flex justify-content-between">
            <Row>
              <Col>
                {!userLink ? (
                  <img
                    className="rounded-circle position-absolute imgJumboRoundend
   "
                    src={user.image}
                    alt="img-profile"
                  />
                ) : (
                  <img
                    className="rounded-circle position-absolute imgJumboRoundend
 "
                    src={userLink.image}
                    alt="img-profile"
                  />
                )}
                <div>
                  {!userLink ? (
                    <h3 className="text-start mb-0">
                      {user.name} {user.surname}
                    </h3>
                  ) : (
                    <h3 className="text-start mb-0">
                      {userLink.name} {userLink.surname}
                    </h3>
                  )}
                  <p className="text-start mb-1">Studente presso</p>
                  <p className="text-start text-secondary">{user.area} </p>

                  <Button
                    className="text-start mx-1 py-0 rounded-pill "
                    variant="primary"
                  >
                    <b>Disponibile per</b>
                  </Button>
                </div>

                <Button
                  className="text-start mx-1  py-1 rounded-pill"
                  variant="outline-primary"
                >
                  Aggiungi sezione al profilo
                </Button>

                <Button
                  className="text-start mx-1 py-0 rounded-pill"
                  variant="outline-secondary"
                >
                  <b>Altro</b>
                </Button>
                <div
                  id="backgroudJumboDiv"
                  className="w-100 mt-4 ps-2 rounded text-start"
                >
                  <p className="mb-0 fw-bold text-primary">
                    Disponibile a lavorare
                  </p>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ) : (
        <div className="d-flex justify-content-center my-4">
          <Spinner></Spinner>
        </div>
      )}
    </div>
  );
};

export default Jumbotron;
