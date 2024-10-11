import React from 'react'
import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import AboutSection from '../components/UI/AboutSection'
import { Container, Row, Col } from 'reactstrap'
import handshake from '../assests/dealerimgs/hands.png'

const About =()=>{
  return (
    <Helmet title='About'>
    <CommonSection title='About Us'/>
    
    <div className='about_pages_section mt-5 mb-5'>
     
      <Container>
        <Row> 
          <AboutSection/>
          <Col log='6' md='6' sm='12'>
            <div className='about_page-img'>
              <img src={handshake} alt='' className='w-100 rounded-3'/>
            </div>
          </Col>
          <Col lg='6' md='6' sm='12'>
          <div className="about_page-content">
              <h2 className='section_titledeal'>
                We are commited to provide secure and legit dealership
              </h2>
              <p className='section_descriptiondeal'>
              Don't hesitate to take advantage of the incredible offers from the dealers listed on our website. Our trusted dealers provide the best prices and exceptional customer service. Contact them and find the perfect car for you!              </p>
              <div className='d-flex align-items-center gap-3 mt-4'>
                <span className='fs-4'>
                  <i className="ri-phone-line"></i>
                </span>
                <div>
                  <h6 className='section_subtitledeal'>Need Any Help?</h6>
                  <h4> +63901234567431</h4>
                </div>
              </div>
            </div>
            
            </Col>
        </Row>
      </Container>
    </div>
  </Helmet>
  );
};

export default About
