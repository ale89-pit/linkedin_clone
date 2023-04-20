import { Col, Row } from "react-bootstrap";

const randomNumber = (max) => {
  return Math.floor(Math.random() * max);
};

const Analisi = () => {
  return (
    <div className="whiteBg border rounded mt-2 p-3">
      <h5 className="mt-3">Analisi</h5>
      <p>
        <i className="fas fa-eye"></i>Solo per te
      </p>
      <Row className="d-flex align-items-center">
        <Col>
          <i className="fas fa-user-friends"></i>
        
      
          <h5>{randomNumber(50)} visualizzazioni del tuo profilo</h5>
          <p>Scopri chi ha visitato il tuo profilo</p>
        </Col>
        <Col>
          <i className="fas fa-search"></i>
        
          <h5>{randomNumber(50)} comparse nei motori di ricerca</h5>
          <p>Vedi quante volte compari nei risultati di ricerca.</p>
        </Col>
      </Row>
    </div>
  );
};

export default Analisi;
