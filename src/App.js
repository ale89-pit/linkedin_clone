import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Analisi from "./components/Home/Profile/Analisi";


import Profile from "./components/Home/Profile/Profile";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Footer />
        <Container fluid>
          <Row>
            <Col>
              <NavBar />
              <Analisi />
            </Col>
          </Row>
          <Row>
            <Col>
              <Routes>
                <Route path="/me" element={<Profile />}></Route>
                <Route path="/" element={<Home />}></Route>
              </Routes>
            </Col>
          </Row>
          <Row>
            <Col>
              {/* <Footer></Footer> */}
            </Col>
          </Row>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
