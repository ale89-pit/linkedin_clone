import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import { addSingleExp, delExpThunk, handleArea, handleCompany, handleEndDate, handleNewRole, handleStartDate, handlleDescription } from "../../redux/actions/form";
import { allExperiences } from "../../redux/actions/index.js"
import { Spinner } from "react-bootstrap/esm";
import CardHeader from "react-bootstrap/esm/CardHeader";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { postNewExpeThunk } from "../../redux/actions/form";
import { getSingleExp } from "../../redux/actions/form";
import { formExpReducer } from "../../redux/reducers/formExpReducer";
import { Link, useLocation } from "react-router-dom/dist";

const Esperienze = () => {
  //Sezione per far mostrare modal
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleClose = () => setShow(false);
  const handleClose2 = () => setShow2(false);
  
  const handleShow2 = (id) =>{
    dispatch(addSingleExp(experience.find((e)=>e._id === id)))
    setShow2(true)
    
    }
    const loadingSigleExp = useSelector(state => state.experience.loadingExp)
    const singlexp = useSelector(state=>state.experience.singleExp)
    console.log(singlexp)
  const handleShow = () => setShow(true);
  const newExp = useSelector(state => state.formExp)
  console.log(newExp)
  const location = useLocation()
  console.log(location)
  //Fine sezione modale
  let id = useSelector((state) => state.profile.content._id);
  const user = useSelector((state) => state.login.user.username);
  const loadingEx = useSelector((state) => state.experience.loadingExperience);
  const loading = useSelector((state) => state.profile.loading);
  console.log(user);
  console.log(id);
  const dispatch = useDispatch();
  const experience = useSelector((state) => state.experience.content);

  useEffect(() => { }, []);
  useEffect(() => {
    loading && dispatch(allExperiences(user, id));
  }, [id,experience.length]);

  console.log(experience);
  return (
    <>
      {loadingEx ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : experience.length > 0 ? (
        location.pathname === "/experience" ? (experience.map(exp => <Card className="my-3">
            {console.log(exp._id)}
          <CardHeader className="whiteBg fw-bold d-flex justify-content-between align-items-center">Esperienze
            <div><svg onClick={handleShow} xmlns="http://www.w3.org/2000/svg" data-toggle="modal" data-target="#PostExpModal" width="35" height="35" fill="currentColor" className="bi bi-plus-lg mx-2 p-1 hover" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
            </svg>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form onSubmit={(e) => {
                    e.preventDefault()
                      ; dispatch(postNewExpeThunk(newExp, id, user))
                  }}>
                    <Form.Group className="mb-3" controlId="PostExpModal.ControlInput1">
                      <Form.Label>Role</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Role"

                        onChange={(e) => dispatch(handleNewRole(e.target.value))}
                      />
                      <Form.Label>Company</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Company Name"

                        onChange={(e) => dispatch(handleCompany(e.target.value))}
                      />
                    </Form.Group>
                    <Form.Label>Star Date</Form.Label>
                    <Form.Control type="date" onChange={(e) => dispatch(handleStartDate(e.target.value))} />
                    <Form.Label>Star End</Form.Label>
                    <Form.Control type="date" onChange={(e) => dispatch(handleEndDate(e.target.value))} />
                    <Form.Group
                      className="mb-3"
                      controlId="PostExpModal.ControlTextarea1"
                    >
                      <Form.Label>Description</Form.Label>
                      <Form.Control as="textarea" rows={3} onChange={(e) => dispatch(handlleDescription(e.target.value))} />
                    </Form.Group>
                    <Form.Label>Luogo</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Area(ex Rome)"

                      onChange={(e) => dispatch(handleArea(e.target.value))}
                    />

                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" type="submit">
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Form>
                </Modal.Body>
              </Modal>
               <svg onClick={()=>(handleShow2(exp._id))}  xmlns="http://www.w3.org/2000/svg" width="25" height="25" data-toggle="modal" data-target="#PutDelExpModal" fill="currentColor" className="bi bi-pencil mx-2 p-1 hover" viewBox="0 0 16 16">
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
              </svg>
             {loadingSigleExp ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ):  (<Modal show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form onSubmit={(e) => {
                    e.preventDefault()
                      ; dispatch(postNewExpeThunk(newExp, id, user))
                  }}>
                    <Form.Group className="mb-3" controlId="PutDelExpModal.ControlInput1">
                      <Form.Label>Role</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Role"
                        value={singlexp?.role}
                        onChange={(e) => dispatch(handleNewRole(e.target.value))}
                      />
                      <Form.Label>Company</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Company Name"
                        value={singlexp?.company}
                        onChange={(e) => dispatch(handleCompany(e.target.value))}
                      />
                    </Form.Group>
                    <Form.Label>Star Date</Form.Label>
                    <Form.Control type="date" onChange={(e) => dispatch(handleStartDate(e.target.value))}
                    value={singlexp?.starDate} />
                    <Form.Label>Star End</Form.Label>
                    <Form.Control type="date" onChange={(e) => dispatch(handleEndDate(e.target.value))} />
                    <Form.Group
                      className="mb-3"
                      controlId="PutDelExpModal.ControlTextarea1"
                    >
                      <Form.Label>Description</Form.Label>
                      <Form.Control as="textarea" rows={3} value={singlexp?.starDate} onChange={(e) => dispatch(handlleDescription(e.target.value))} />
                    </Form.Group>
                    <Form.Label>Luogo</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Area(ex Rome)"
                      value={singlexp?.area}
                      onChange={(e) => dispatch(handleArea(e.target.value))}
                    />

                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose2}>
                        Close
                      </Button>
                      <Button variant="primary" type="submit">
                        Save Changes
                      </Button>
                      <Button variant="danger" onClick={()=>dispatch(delExpThunk(singlexp.user,singlexp._id,user))}>
                        Delete
                      </Button>
                    </Modal.Footer>
                  </Form>
                </Modal.Body>
              </Modal>)}
            </div>
          </CardHeader>
          <Row>
            <Col xs={2} className="d-flex justify-content-center align-items-center" >
              <img src="https://placekitten.com/100" style={{ width: "50px" }} alt="" />
            </Col>
            <Col>
              <Card.Body>
                <Card.Title>
                  {exp.role}

                </Card.Title>
                <Card.Text className="m-0">{exp.description}</Card.Text>
                <Card.Text className="m-0">{exp.company}</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>)): (<Card className="my-3">

          <CardHeader className="whiteBg fw-bold d-flex justify-content-between align-items-center">Esperienze
            <div><svg onClick={handleShow} xmlns="http://www.w3.org/2000/svg" data-toggle="modal" data-target="#exampleModal" width="35" height="35" fill="currentColor" className="bi bi-plus-lg mx-2 p-1 hover" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
            </svg>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form onSubmit={(e) => {
                    e.preventDefault()
                      ; dispatch(postNewExpeThunk(newExp, id, user))
                  }}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Role</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Role"

                        onChange={(e) => dispatch(handleNewRole(e.target.value))}
                      />
                      <Form.Label>Company</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Company Name"

                        onChange={(e) => dispatch(handleCompany(e.target.value))}
                      />
                    </Form.Group>
                    <Form.Label>Star Date</Form.Label>
                    <Form.Control type="date" onChange={(e) => dispatch(handleStartDate(e.target.value))} />
                    <Form.Label>Star End</Form.Label>
                    <Form.Control type="date" onChange={(e) => dispatch(handleEndDate(e.target.value))} />
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Description</Form.Label>
                      <Form.Control as="textarea" rows={3} onChange={(e) => dispatch(handlleDescription(e.target.value))} />
                    </Form.Group>
                    <Form.Label>Luogo</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Area(ex Rome)"

                      onChange={(e) => dispatch(handleArea(e.target.value))}
                    />

                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" type="submit">
                        Save Changes
                      </Button>
                      
                    </Modal.Footer>
                  </Form>
                </Modal.Body>
              </Modal>
              <Link to="/experience" > <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-pencil mx-2 p-1 hover" viewBox="0 0 16 16">
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
              </svg></Link>
            </div>
          </CardHeader>
          <Row>
            <Col xs={2} className="d-flex justify-content-center align-items-center" >
              <img src="https://placekitten.com/100" style={{ width: "50px" }} alt="" />
            </Col>
            <Col>
              <Card.Body>
                <Card.Title>
                  {experience[experience.length - 1].role}

                </Card.Title>
                <Card.Text className="m-0">{experience[experience.length - 1].description}</Card.Text>
                <Card.Text className="m-0">{experience[experience.length - 1].company}</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>))
       : (
          <Card>
            <Card.Header>
              <h3>No Experiences Yet</h3>
            </Card.Header>
            <Row>
              <Col>
                <Card.Body></Card.Body>
              </Col>
            </Row>
          </Card>
        )}

    </>
  );
};

export default Esperienze;
