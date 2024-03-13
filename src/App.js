
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from "react-bootstrap";
import Iframe from 'react-iframe'

function App() {

  return (

   <div className='footer'>
      <Container>
        <Row className='main-foot'>
          <Col className='col col-lg-4 col-md-12 col-12'>
            <h2 className='text-lg-start text-md-center text-center mb-lg-0 mb-md-5 mb-2 main-title'>Charity Nft tracker</h2>
          </Col>
          <Col className='col col-lg-2 col-md-3 col-12'>
            <ul>
              <li className='list-unstyled'>
                <h5 className='mt-lg-0 mt-md-0 mt-4 mb-3'>About</h5>
              </li>
              <li className='list-unstyled mb-2'>
                <a href="#0">Profile</a>
              </li>
              <li className='list-unstyled mb-2'>
                <a href="#0">Career</a>
              </li>
              <li className='list-unstyled mb-2'>
                <a href="#0">Privacy</a>
              </li>
            </ul>
          </Col>
          <Col className='col col-lg-2 col-md-3 col-12'>
            <ul>
              <li className='list-unstyled'>
                <h5 className='mt-lg-0 mt-md-0 mt-4 mb-3'>Find us</h5>
              </li>
              <li className='list-unstyled mb-2'>
                <a href="#0"><i className="bi bi-instagram"></i> company</a>
              </li>
              <li className='list-unstyled mb-2'>
                <a href="#0"><i className="bi bi-twitter"></i> company_id</a>
              </li>
              <li className='list-unstyled mb-2'>
                <a href="#0"><i className="bi bi-facebook"></i> company</a>
              </li>
            </ul>
          </Col>
          <Col className='col col-lg-3 col-md-6 col-12'>
            <ul>
              <li className='list-unstyled'>
                <h5 className='mt-lg-0 mt-md-0 mt-4 mb-3'>Contact</h5>
              </li>
              <li className='list-unstyled mb-2'>
                <a href="#0"><i className="bi bi-geo-alt-fill"></i> 418, Nelson mandela hostel , Srm institute of science and technology</a>
              </li>
              <li className='list-unstyled mb-2'>
                <a href="#0"><i className="bi bi-telephone-fill"></i> +9898279387</a>
              </li>
              <li className='list-unstyled mb-2'>
                <a href="#0"><i className="bi bi-envelope-at-fill"></i> company@gmail.com</a>
              </li>
              <li className='list-unstyled'>
                <div className="map mt-4">
                  <Iframe className='rounded-3' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.3131005354944!2d80.03954508036043!3d12.823032955193945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f712b82a78d9%3A0xfdb944a3aee53831!2sSRM%20Institute%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sin!4v1710314626701!5m2!1sen!2sin" 
                  allowfullscreen="" loading="lazy"></Iframe>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className='justify-content-lg-between justify-content-md-center justify-content-center mt-5 bott-foot'>
          <Col className='col-lg-4 col-md-12 col-12 text-lg-start text-md-center text-center'>
            <p className='copy'>copyright 2024. All rights reserved</p>
          </Col>
          <Col className='col-lg-4 col-md-12 col-12 text-lg-end text-md-center text-center'>
            <p className='design'>Designed by Dynamic Hackers</p>
          </Col>
        </Row>
      </Container>
   </div>
   
  );
}

export default App;
