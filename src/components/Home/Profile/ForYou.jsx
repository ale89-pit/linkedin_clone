import ForYouStep1 from "./ForYouStep1";
import ForYouStep2 from "./ForYouStep2";
import ForYouStep3 from "./ForYouStep3";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const ForYou = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="border rounded p-3">
      <div className="mb-3">
        <h3 className="mb-0">Consigliato per te</h3>
        <span>
          <i class="fas fa-eye me-2"></i>Solo per te
        </span>
        <div>
          <h5>Principiante</h5>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <span>
            Completa 2 passaggi per raggiungere il livello{" "}
            <a href="#" style={{ textDecoration: "none", fontWeight: "bold" }}>
              Intermedio
            </a>
          </span>
        </div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <ForYouStep1 />
          </Carousel.Item>
          <Carousel.Item>
            <ForYouStep2 />
          </Carousel.Item>
          <Carousel.Item>
            <ForYouStep3 />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default ForYou;
