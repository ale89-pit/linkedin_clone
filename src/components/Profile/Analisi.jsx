import { Col, Row } from "react-bootstrap";

const Analisi = () => {
  return (
    <div className="whiteBg">
      <h2>Analisi</h2>
      <p>
        <i className="fas fa-eye"></i>Solo per te
      </p>
      <Row>
        <Col>
          <i className="fas fa-user-friends"></i>
        </Col>
        <Col>
          <p>x visualizzazioni del profilo</p>
          <p>Scopri chi ha visitato il tuo profilo</p>
        </Col>
        <Col>
          <i className="fas fa-search"></i>
        </Col>
        <Col>
          <p>z comparse nei motori di ricerca</p>
          <p>vedi quante volte compari nei risultati di ricerca.</p>
        </Col>
      </Row>
    </div>
  );
};

export default Analisi;