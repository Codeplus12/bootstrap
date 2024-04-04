
import './App.css';
import { Row } from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Container} from 'react-bootstrap';

function App() {
  return (
    <>
    <Col className='bi'>
    <Container fluid>
      <Row>
      <Col md={3}></Col>
      <Col md={6} className='fs text-dark ff'>Alexandrina
Kennedy</Col>
      <Col md={3}></Col>
      </Row>
    </Container>
   </Col>
    
    
    </>
  );
}

export default App;
