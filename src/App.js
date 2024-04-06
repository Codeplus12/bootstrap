import './App.css';
import { Row } from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';



function App() {
return (
<>
  <Col className='bi'>
  <Container fluid>
    <Row>
      <Col md={3} xs={12} className='ps-md-5 ps-0 pt-5'>
        <Col md={4}></Col>
        <Col md={8} xs={12}>
          <center>
      <img src="img/alexandrina-photo.jpg" alt="" className='h200 w60a ms-md-5 ms-0 mt-5' />
      <img src="img/alexandrina-certified.png" className='h110a w10a pa' /></center>
      </Col>
      </Col>
      <Col md={6} xs={12} className='ps-md-5 text-md-start text-center' >
        <Row>
        <Col xs={1} className='p-md-0'></Col> 
        <Col xs={10} className='p-md-0'>
      <p className='fs1a text-dark ff fw5 '>Alexandrina
        Kennedy
        </p>
      <p className='fs2a fw4 ff p-0 m-0'>Branding / Packaging / Print Design</p>
      </Col>
      <Col xs={1} className='p-md-0'></Col>
      </Row>
      </Col>
      <Col md={3}>
      </Col>
    </Row>
  </Container>
  <div className="h30 w-100"></div>
  <Container className='px-md-2 px-4'>
    <Row>
      <Col md={4} >
        <div className="h20 w-100"></div>
        <Row>
          <Col md={2} ></Col>
          <Col md={10} xs={12} className='br p-3 bg1'>
            <img src="img/packaging-blog.jpg" alt="" className='h200a w-100'/>
            <div className="h10 w-100"></div>
            <p className='ff fw4 fs1 p-0 m-0'>4 Keys to Remarkable Brand
Storytelling</p>
<div className="h10 w-100"></div>
<p className='fs3 fw1' style={{fontFamily :"'Montserrat', sans-serif",color:'grey'}}>Storytelling is a compelling way to
communicate brand value - but only
if you're telling stories that resonate
your audience.</p>
<div className="h20 w-100"></div>
<p className='fs3 fw7 p-0 m-0'>READ MORE</p>
          </Col>
        </Row>
      </Col>
      <Col md={8}>
        <Row>
          <Col md={6} xs={12} >
            <div className="h20 w-100"></div>
            <Col md={12} className='h300a'>
              {/* TESTIMONIAL SLIDER===================================== */}
              <Carousel data-bs-theme="dark">
      <Carousel.Item className='h300a'>
        <img
          className="h-100 w-100"
          src="img/branding2.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item className='h300a'>
        <img
          className="h-100 w-100"
          src="img/branding3.jpg"
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item className='h300a'>
        <img
          className="h-100 w-100"
          src="img/branding4.jpg"
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item className='h300a'>
        <img
          className="h-100 w-100"
          src="img/packaging2.jpg"
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item className='h300a'>
        <img
          className="h-100 w-100"
          src="img/packaging3.jpg"
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item className='h300a'>
        <img
          className="h-100 w-100"
          src="img/printable.jpg"
          alt="Third slide"
        />
        
      </Carousel.Item>
      
    </Carousel>
    {/* TESTIMONIAL SLIDER END========================================== */}
            </Col>
          </Col>
          <Col md={6} xs={12} >
          <div className="h20 w-100"></div>
          <Col md={12}>
            <button className='bt1 fw7 fs3'>MORE PROJECTS</button>
            <div className="h20 w-100"></div>
            <button className='bt1 fw7 fs3'>FOLLOW ON BEHANCE</button>
            <div className="h20 w-100"></div>
            <button className='bt1 fw7 fs3'>FOLLOW ON DRIBBBLE</button>
            <div className="h20 w-100"></div>
            <button className='bt1 fw7 fs3'>FOLLOW ON INSTAGRAM</button>
            
          </Col>
          </Col>
        </Row>
        <div className="h30 w-100"></div>
        <button className='bt1 fw7 fs3'>DOWNLOAD PRINTS</button>
        <div className="h30 w-100"></div>
        <button className='bt2 fw7 fs3'>HIRE ME</button>
      </Col>
    </Row>
    <div className="h50 w-100"></div>
    <Row>
      <Col md={12}>
        <center>
          <p>
          Copyright &#169; 2024 Alexandrina Kennedy - Designer
          </p>
        </center>
      </Col>
    </Row>
    <div className="h70 w-100"></div>
  </Container>
  </Col>


</>
);
}



export default App;