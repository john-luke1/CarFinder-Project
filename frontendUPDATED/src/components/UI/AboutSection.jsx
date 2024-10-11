import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../../style/about-section.css'
import aboutImg from '../../assests/all-images/cars-img/sideview.png'

const AboutSection = () => {
  return (
     <div>
         <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className="about_section-content">
                        <h4 className='section_subtitle'>Abouts Us</h4>
                        <h2 classname="section_title">Welcome to CarFinder! </h2>
                            <p className='section_description'>
                                Discover your perfect car with ease. Browse through a vast selection of vehicles based on your preferences. Whether you’re looking for a new or seond hand car, we’ve got you covered.  Start your search today and drive home your dream car with CarFinder!
                            </p>
                        <div className='about_section-item d-flex align-items-center'>
                            <p className='section_description d-flex align-items-center gap-2'>
                                <i className="ri-checkbox-circle-line"></i>
                                Legit Dealers
                            </p>
                        </div>
                        <div className='about_sections-item d-flex align-items-center'>
                            <p className='section_description d-flex align-items-center gap-2'>
                                <i className="ri-checkbox-circle-line"></i>
                                Branded Cars
                            </p>
                        </div>
                    </div>
                </Col>
                <Col lg='6' md='6'>
                    <div className='about_img'>
                        <img
                            src={aboutImg}
                            alt=''
                            className='w-100'/>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  );
};

export default AboutSection
