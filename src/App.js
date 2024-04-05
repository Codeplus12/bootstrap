
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
      <Col md={3} className='ps-5 pt-5'>
        <img src="img/alexandrina-photo.jpg" alt="" className='h200 w60 ms-md-5 ms-0 mt-5'/>
        <img src="img/alexandrina-certified.png" className='h100 w10 p'/>
      </Col>
      <Col md={6} className='fs text-dark ff ps-5 fw5'>
        <p className='p-0 m-0'>Alexandrina
Kennedy</p>
</Col>
      <Col md={3}></Col>
      </Row>
    </Container>
   </Col>
    
    
    </>
  );
}

export default App;
