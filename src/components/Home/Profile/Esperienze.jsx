import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useDispatch, useSelector } from 'react-redux';
import { allExperiences } from '../../../redux/actions';

const Esperienze = () => {
const id = useSelector(state => state.profile.content._id)
const user = useSelector(state => state.profile.content.name)
const loading= useSelector(state => state.profile.loading)
console.log(user)
console.log(id)
    const experience = useSelector(state => state.experience.content)
    const dispatch= useDispatch()
    
    useEffect(() => {
     
    }, []) 
    useEffect(() => {
      loading && dispatch(allExperiences("AlessioP",id))
    }, [id]) 
    
  return (
    <>
    <Card>
          <Card.Header><h3>{experience[0].role}</h3></Card.Header>
          <Row>
            <Col xs={2}><img src="https://placekitten.com/100" alt="" /></Col>
            <Col>
          <Card.Body>
            <Card.Title>{experience[0].company}</Card.Title>
            <Card.Text>
              {experience[0].description}
            </Card.Text>
          </Card.Body>
          </Col>
          </Row>
        </Card>
    </>
  );
}

export default Esperienze;