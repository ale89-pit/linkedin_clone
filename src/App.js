import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Col, Navbar, Row } from "react-bootstrap";
// import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
            </Col>
          </Row>
          {/* <Routes>
            <Row>
              <Col>
                <Route path="/me" element={<Profile />}></Route>
                <Route path="/" element={<Home />}></Route>
              </Col>
            </Row>
          </Routes> */}
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
