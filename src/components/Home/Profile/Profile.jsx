import { Row } from "react-bootstrap"
import { Col } from "react-bootstrap"
import Container  from "react-bootstrap/Container"
import Jumbotron from "./Jumbotron"
import ForYou from "./ForYou"
import Attività from "./Attività"
import Analisi from "./Analisi"
import Formazione from "./Formazione"
import Interessi from "./Interessi"

const Profile = () =>{
    return (
    <Container>
    <Row>
    <Col xs={8} >
    <Jumbotron />
    <ForYou/>
    <Analisi />
    <Attività />
    <Formazione /> 
    <Interessi /> 
    </Col>
    <Col xs={4}></Col>
    
    </Row>
    </Container>)
}

export default Profile