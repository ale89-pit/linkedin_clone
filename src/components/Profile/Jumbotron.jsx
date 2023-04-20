import { Button, Card, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "react-bootstrap/esm";
import { profileThunk, team } from "../../redux/actions";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Modal from "react-modal"
import { openModal } from "./EsperienceCardDet";
const Jumbotron = () => {
  const user = useSelector((state) => state.profile.content);
  const loading = useSelector((state) => state.profile.loading);
  let id = useSelector((state) => state.profile.content._id);
  const API_URL_PROFILE_PHOTO = `https://striveschool-api.herokuapp.com/api/profile/${id}/picture`
  const [fd, setFd] = useState(new FormData())
  const reduxUser = useSelector((state) => state.login.user)
  const dispatch = useDispatch()
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("fetch iniziata invio foto")
    console.log(user)
    try {
      let res = await fetch(API_URL_PROFILE_PHOTO, {
        method: "POST",
        body: fd,
        headers: {
          Authorization: "Bearer " + team.find((u) => u.userName === user.username).key,
        }
      })
      if (res.ok) {
        dispatch(profileThunk(reduxUser.username))
      }
      let foto = res.json();
      console.log(foto)
    } catch (error) {
      console.log(error)
    }
    setIsOpen(false)
  }
  const handleFile = (e) => {
    setFd((prev) => {
      prev.delete("profile")
      prev.append("profile", e.target.files[0])
      return prev
    })
  }
  console.log(user)
  return (
    <>
      {loading ? (
        <>
          <Card className="w-100 positon-relative mb-2" id="jumbo-Card">
            <Card.Img variant="top" id="sizeImgJumbo" src={user.image} alt="immagine profilo" />

            <Card.Body>
              <img
                className="rounded-circle position-absolute imgJumboRoundend"
                src={user.image}
                alt="img-profile"
              />
              <Row>
                <Col xs={8}>
                  <h3 className="text-start mb-0">
                    {user.name} {user.surname}
                  </h3>
                  <p className="text-start mb-1">Studente presso</p>
                  <p className="text-start text-secondary">{user.area} </p>
                </Col>
                <Col xs={4}>
                  <p onClick={openModal} className="text-end fs-2"><i className="fas fa-camera hover"></i></p>
                  <Modal isOpen={modalIsOpen} contentLabel="Example Modal"
                    onRequestClose={closeModal}
                    style={customStyles}>
                    <Form onSubmit={handleSubmit}><input type="file" onChange={handleFile} />
                      <Button type="submit">invia foto</Button>
                      <Button type="button" variant="secondary" onClick={closeModal}>Close</Button>
                    </Form>
                  </Modal>
                  <p className="text-end">logo</p>
                </Col>
              </Row>
              <Button
                className="text-start mx-1 py-1 rounded-pill "
                variant="primary"
              >
                <b>Disponibile per</b>
              </Button>

              <Button
                className="text-start mx-1  py-1 rounded-pill"
                variant="outline-primary"
              >
                Aggiungi sezione al profilo
              </Button>

              <Button
                className="text-start mx-1 py-1 rounded-pill"
                variant="outline-secondary"
              >
                <b>Altro</b>
              </Button>

              <Row className="w-100 my-3 justify-content-between">
                <Col className="backgroudJumboDiv rounded w-50 p-2 mx-2">
                  <p>
                    <b>Mostra ai recruiter che sei disponibile a lavorare:</b>
                    <br />
                    sei tu che decidi che può vedere questa informazione. <br />
                    <a href="#">Inizia</a>{" "}
                  </p>
                </Col>
                <Col className=" backgroudJumboDiv rounded w-50 p-2 mx-2">
                  <p>
                    <b>Fai sapere che stai facendo selezione</b> e attrai
                    candidati qualificati. <br /> <a href="#">Inizia</a>
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>

        </>
      ) : (
        <div className="d-flex justify-content-center my-4">
          <Spinner></Spinner>
        </div>
      )}
    </>
  );
};

export default Jumbotron;
