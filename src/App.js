import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Login from "./components/Login";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container fluid>
          <Row>
            <Col>
              <NavBar />
            </Col>
          </Row>
          <div className="p-3">
            <Routes>
              <Route path="/me" element={<Profile />}></Route>
              <Route path="/" element={<Login />}></Route>
              <Route path="/home" element={<Home />}></Route>
            </Routes>
          </div>

          <Row>
            <Col>
              <Footer />
            </Col>
          </Row>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
