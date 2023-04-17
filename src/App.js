import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/";
import Container from "react-bootstrap/Container";
import { Col, Navbar, Row } from "react-bootstrap";
import { Footer } from "react-bootstrap/lib/Modal";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container fluid>
          <Row>
            <Col>
              <Navbar></Navbar>
            </Col>
          </Row>
          <Routes>
            <Row>
              <Col>
                <Route path="/me" element={<Profile />}></Route>
                <Route path="/" element={<Home />}></Route>
              </Col>
            </Row>
          </Routes>
          <Row>
            <Col>
              <Footer></Footer>
            </Col>
          </Row>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
