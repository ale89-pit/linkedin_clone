import { Col, Row } from "react-bootstrap";

const Analisi = () => {
  return (
    <div className="whiteBg border rounded mt-2 py-2 px-3">
      <h5 className="mt-3">Analisi</h5>
      <p>
        <i className="fas fa-eye pe-1"></i>Solo per te
      </p>
      <Row>
        <Col xs={1}>
          <i className="fas fa-user-friends ms-2"></i>
        </Col>
        <Col xs={11} lg={4}>
          <p>
            <b>11 visualizzazioni del profilo</b>
            <br />
            Scopri chi ha visitato il tuo profilo
          </p>
        </Col>
        <Col xs={1}>
          <i className="fas fa-search ms-2"></i>
        </Col>
        <Col xs={11} lg={4}>
          <p>
            <b>26 comparse nei motori di ricerca</b> <br /> vedi quante volte
            compari nei risultati di ricerca.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Analisi;
