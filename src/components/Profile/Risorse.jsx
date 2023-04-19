import { Container } from "react-bootstrap";

const Risorse = () => {
  return (
    <Container className="mt-2 border rounded whiteBg p-0">
      <div className="p-3">
        <h5 className="ps-1 mt-3">Risorse</h5>
        <p className="ps-1 ">Solo per te</p>
        <div className="border-bottom ps-1">
          <h6 className="ps-1 ">
            Modalità creazione di contenuti
            <button className="ButtonRisorse">No</button>
          </h6>
        </div>
        <p className="border-bottom ps-1 py-3">
          Fatti scoprire, metti in risalto i contenuti sul tuo profilo e accedi
          agli strumenti di creazione
        </p>
        <h6 className="ps-1 ">La mia rete</h6>
        <p className="py-3 mb-0">
          Salva e gestisci i tuoi collegamenti e interessi
        </p>
      </div>
      <button className="ButtonMostraRisorse border-top btn btn-light d-flex justify-content-center align-items-center">Mostra tutte le risorse</button>
    </Container>
  );
};
export default Risorse;
