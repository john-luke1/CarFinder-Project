import React from 'react';
import HeroSlider from '../components/UI/HeroSlider';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import FindForm from '../components/UI/FindForm';
import AboutSection from '../components/UI/AboutSection';
import carData from '../data/carData';
import CarItem from '../components/UI/CarItem';



const Home = () => {
  const featuredCars = carData.filter(car => car.isFeatured); 
  
  return (
    <Helmet title="Home">
          <div className="p-0 hero__slider-section">
              <HeroSlider />
              <div className="hero__form">
                <Container>
                  <Row className="form__row">
                    <Col lg="6" md="12">
                      <div className="find__cars-left">
                        <h2>Find Your Best Car Here</h2>
                      </div>
                    </Col>
      {}
                    <Col lg="6" md="12" >
                      <FindForm />
                    </Col>
                  </Row>
                </Container>
              </div>
          </div>
          {/*=====ABOUT SECT.====*/}
          <AboutSection/>

        {/*====== car offer sec==========*/}
          <div>
              <Container>
                <Row>
                  <Col lg='12' className='text-center mb-5'>
                    <h6 className='section_subititle'>Deal with</h6>
                    <h2 className='section_title1'> Hot Offers</h2>
                  </Col>

                  {
                    featuredCars.map((item) => (
                      <CarItem item={item} key={item.id} />
                    ))
                  }
                </Row>
              </Container>
          </div>
    </Helmet>
  )
}

export default Home
