import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useDispatch, useSelector } from 'react-redux';
import { allExperiences } from '../../../redux/actions';
import { Spinner } from 'react-bootstrap/esm';

const Esperienze = () => {
  let id =useSelector(state => state.profile.content._id)
  const user = useSelector(state => state.login.user.username)
  const loadingEx= useSelector(state => state.experience.loadingExperience)
  const loading= useSelector(state => state.profile.loading)
  console.log(user)
  console.log(id)
  const dispatch= useDispatch()
  
  useEffect(() => {
    
  }, []) 
  useEffect(() => {
   loading && dispatch(allExperiences(user,id))
  }, [id]) 

    const experience = useSelector(state => state.experience.content)
  return (
    <>
    {loadingEx ? <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>:  <Card>
          <Card.Header><h3>{experience[experience.length-1].role}</h3></Card.Header>
          <Row>
            <Col xs={2}><img src="https://placekitten.com/100" alt="" /></Col>
            <Col>
          <Card.Body>
            <Card.Title>{experience[experience.length-1].company}</Card.Title>
            <Card.Text>
            {experience[experience.length-1].description}
            </Card.Text>
          </Card.Body>
          </Col>
          </Row>
        </Card> 

    }
    </>
  );
}

export default Esperienze;