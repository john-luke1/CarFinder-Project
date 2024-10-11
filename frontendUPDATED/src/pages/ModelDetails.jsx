import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import modelData from '../data/modelData'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import '../../src/style/model-details.css'


const ModelDetails = () => {
  const { id } = useParams()
  const model = modelData.find((model) => model.id.toString() === id)

  if (!model) {
    return <div>Model not found</div>
  }

  const { price, seatType,rating, imgUrl,year,bodyType, automatic,dealer, speed, modelName, description } = model

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [model]);


  return (
    <Helmet title={modelName}>
      <CommonSection title='Model Details'/>
      <section>
        <Container>
          <Row>
            <Col lg='6' md='4'>
              <div className="model_main-img">
                <img src={imgUrl} alt={modelName} className='w-100'/>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className="single_model-content">
                <h2 className='fw-bold fs-3 mb-3'>{modelName}</h2>
                <span className='d-flex align-items-center gap-2 mb-2'>
                  <span style={{color:'yellow'}}>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-line"></i>
                  </span>
                  {rating} (Ratings)
                </span>
                <div className='fs-5'> 
                    <span className='fw'> Price : </span> 
                    <span style={{ color: 'green', fontWeight: 'bold' }}>{price}</span>
                    </div>  
                <div className='mt-2'>
                    <span className='fw-bold fs-5'>Description </span>
                    <p className='section_description'>
                        {description}
                    </p>
                </div>
                <span className='d-flex align-items-center section_automatic_speed gap-2'>
                    <i className='ri-settings-2-line' style={{color:'ActiveCaption'}}></i>{automatic}
                    <i className='ri-timer-flash-line' style={{color:'ActiveCaption'}}></i>{speed}
                    <i className='ri-wheelchair-line' style={{color:'ActiveCaption'}}></i>{seatType}
                    <i className='ri-article-fill' style={{color:'ActiveCaption'}}></i>{year}
                    <i className='ri-car-fill' style={{color:'ActiveCaption'}}></i>{bodyType}
                </span>
                <div className='delear gap-3'>
                  <p style={{marginTop:'10px'}}>Contact them for more information of this car model</p>
                  <br />
                  <span>
                      <Link to={`/dealer/${dealer}`}>
                          <button className='contact-button ri-service-fill' style={{ color: 'white' }}>
                            {dealer}
                          </button>
                      </Link>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default ModelDetails
