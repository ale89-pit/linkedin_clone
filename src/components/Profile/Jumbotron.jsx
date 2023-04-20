import { Button, Card, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "react-bootstrap/esm";
import { team } from "../../redux/actions";
import { useState } from "react";
import { Form } from "react-bootstrap";

const Jumbotron = () => {
  const user = useSelector((state) => state.profile.content.username);
  const loading = useSelector((state) => state.profile.loading);
  let id = useSelector((state) => state.profile.content._id);
  const API_URL_PROFILE_PHOTO = `https://striveschool-api.herokuapp.com/api/profile/${id}/picture`
  const[fd,setFd] = useState(new FormData())
  const handleSubmit = async(e)=>{
    e.preventDefault()
    console.log("fetch iniziata invio foto")
    console.log(user)
    try {
       let res = await fetch(API_URL_PROFILE_PHOTO,{
      method:"POST",
      body:fd,
      headers:{
        Authorization : "Bearer" + team.find((u)=> u.userName === user).key,
      }
    })
    return res.json();
    } catch (error) {
      console.log(error)
    }
   
  }
  const handleFile = (e)=>{
    setFd((prev)=>{
      prev.delete("profile")
      prev.append("profile",e.target.files[0])
      return prev
    })
  }
  return (
    <>
      {loading ? (
        <Card className="w-100 positon-relative mb-2" id="jumbo-Card">
          <Card.Img variant="top" id="sizeImgJumbo" src={user.image} />
          <Form onSubmit={handleSubmit}><input type="file" onChange={handleFile} />
          <Button type="submit">invia foto</Button></Form>
          
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
      ) : (
        <div className="d-flex justify-content-center my-4">
          <Spinner></Spinner>
        </div>
      )}
    </>
  );
};

export default Jumbotron;
