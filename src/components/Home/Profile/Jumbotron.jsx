import { Button, Card } from "react-bootstrap";

const Jumbotron = () => {
  return(
  <Card className="w-100 positon-relative mb-2" id="jumbo-Card">
  <Card.Img variant="top" id="sizeImgJumbo" src="http://placekitten.com/500/500" />
  <Card.Body className="d-flex justify-content-between">
  <img className="rounded-circle position-absolute imgJumboRoundend
   " src="http://placekitten.com/100" alt="img-profile" /> 
    <div>
    <h3 className="text-start mb-0">Nome Profilo</h3>
    <p className="text-start mb-1">Studente presso</p>
    <p className="text-start text-secondary">Posizione-Regione-Informazioni di contatto </p>
    
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
</Card>)
};

export default Jumbotron;
