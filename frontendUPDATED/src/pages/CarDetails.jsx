import React from 'react'
import carData from '../data/carData'
import CommonSection from '../components/UI/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'



const CarDetails=()=>{

const{ slug } = useParams()

const CarItem = carData.find(item=> item.carName=== slug);

useEffect(() => {
  window.scrollTo(0, 0);
}, [CarItem]);

 
  return (
  <Helmet title ={CarItem.carName}>
      <CommonSection title='Car Details'/>
    <section>
      <Container>
        <Row>
          <Col lg='6'>
              <img src={CarItem.imgUrl} alt='' className='w-100'/>
          </Col>
          <Col lg='6'>
            <div className='car_info'>
              <h2 className='fw-bold fs-3 mb-3'>
                {CarItem.carName}
              </h2>
              <div>
                <span className='d-flex align-items-center gap-2 mb-2'>
                  <span style={{color:'yellow'}}>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-line"></i>
                  </span>
                  {CarItem.rating} (ratings)
                </span>
              </div>
              <div className='fs-5'> 
                  <span className='fw'> Price : </span> 
                  <span style={{color:'green', fontWeight: 'bold'}}>{CarItem.price}</span>  
              </div>
              <div className='mt-2'>
                  <span className='fw-bold fs-5'>Description </span>
                  <p className='section_description'>
                      {CarItem.description}
                  </p>
              </div>
              
              <div className='d-flex align_items-center mt-3 'style=
                  {{columnGap:'0.5rem'}}>
                    <span className='d-flex align-items-center gap-1 section_description'>
                      <i class='ri-roadster-line' style={{color:'ActiveCaption'}}></i>{CarItem.model}
                    </span>               
                    <span className='d-flex align-items-center gap-1 section_description'>
                      <i class='ri-settings-2-line'style={{color:'ActiveCaption'}}></i>{CarItem.automatic}
                    </span>                
                    <span className='d-flex align-items-center gap-1 section_description'>
                      <i class='ri-timer-flash-line'style={{color:'ActiveCaption'}}></i>{CarItem.speed}
                    </span>
                    <span className='d-flex align-items-center gap-1 section_description'>
                    <i class='ri-wheelchair-line'style={{color:'ActiveCaption'}}></i>{CarItem.seatType}
                    </span>
                    <span className='d-flex align-items-center gap-1 section_description'>
                    <i class='ri-building-2-line'style={{color:'ActiveCaption'}}></i>{CarItem.brand}
                    </span>
                    <span className='d-flex align-items-center gap-1 section_description'>
                    <i class='ri-car-fill'style={{color:'ActiveCaption'}}></i>{CarItem.bodyType}
                    </span>
                  
              </div>
            </div>
            <div className='delear gap-3'>
              <p style={{marginTop:'10px'}}>Contact them for more information of this car model</p>
              <br />
              <span>
                  <Link to={`/dealer/${CarItem.dealer}`}>
                      <button className='contact-button ri-service-fill' style={{ color: 'white' }}>
                        {CarItem.dealer}
                      </button>
                  </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    
  </Helmet>
  )
}


export default CarDetails
