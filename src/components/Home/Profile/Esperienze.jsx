import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useDispatch, useSelector } from 'react-redux';
import { allExperiences } from '../../../redux/actions';

const Esperienze = () => {
const id = useSelector(state => state.profile.content._id)
const user = useSelector(state => state.profile.content.name)
console.log(user)
console.log(id)
    const experience = useSelector(state => state.experience.content)
    const dispatch= useDispatch()
    useEffect(() => {
    }, []) 
    useEffect(() => {
        dispatch(allExperiences(user, id))
    }, [id]) 
    
  return (
    <>
    <Card>
          <Card.Header><h3>Esperienze</h3></Card.Header>
          <Row>
            <Col xs={2}><img src="https://placekitten.com/100" alt="" /></Col>
            <Col>
          <Card.Body>
            <Card.Title>{experience.role}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          </Col>
          </Row>
        </Card>
    </>
  );
}

export default Esperienze;