import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { profileThunk } from "../../../redux/actions";
import { Spinner } from "react-bootstrap/esm";
import { useEffect } from "react";

const Jumbotron = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(profileThunk("AlessioP"))
    },[])
    const user = useSelector(state => state.profile.content)
    const loading = useSelector(state => state.profile.loading)
  return(
    <> 
 {loading ? <Card className="w-100 positon-relative mb-2" id="jumbo-Card">
  <Card.Img variant="top" id="sizeImgJumbo" src={user.image} />
  <Card.Body className="d-flex justify-content-between">
  <img className="rounded-circle position-absolute imgJumboRoundend
   " src={user.image} alt="img-profile" /> 
    <div>
    <h3 className="text-start mb-0">{user.name} {user.surname}</h3>
    <p className="text-start mb-1">Studente presso</p>
    <p className="text-start text-secondary">{user.area} </p>
    
    <Button className="text-start mx-1 py-0 rounded-pill " variant="primary" ><b>Disponibile per</b></Button>

    <Button className="text-start mx-1  py-0 rounded-pill"variant="outline-primary">Aggiungi sezione al profilo</Button>

    <Button className="text-start mx-1 py-0 rounded-pill"variant="outline-secondary"><b>Altro</b></Button>
    <div id="backgroudJumboDiv" className="w-100 mt-4 ps-2 rounded text-start">
        <p className="mb-0">Disponibile a lavorare</p>
        <p className="mb-0">Disponibile a lavorare</p>
        <p className="mb-0 fw-bold text-primary" >Disponibile a lavorare</p>
    </div>
    </div>
    
    <div> 
    <p>logo</p>
    </div>
  </Card.Body>
</Card> : <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>} 
</>)
};

export default Jumbotron;
