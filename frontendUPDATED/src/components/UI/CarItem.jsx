import React from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../../style/car-item.css';



const CarItem = (props) => {
  const { imgUrl, model,bodyType, carName, automatic, speed, price, } = props.item;

  return (
    <Col lg='4' md='6' sm='6' className='mb-5'>
      <div className='car_item'>
        <div className='car_img'>
          <img src={imgUrl} alt='' className='w-100' />
        </div>
        <div className='car_item-content mt-4'>
          <h4 className='section_title text-center'>{carName}</h4>
          <h5 className='car_price text-center mt'>₱ {price}</h5>

          <div className='car_item-info d-flex align-items-center mt-3 mb-4'>
            <span className='d-flex align-items-center gap-1'>
              <i className='ri-car-fill'></i>
              {model}
            </span>
            <span className='d-flex align-items-center gap-1'>
              <i className='ri-settings-line'></i>
              {automatic}
            </span>
            <span className='d-flex align-items-center gap-1'>
              <i className='ri-timer-flash-fill'></i>
              {speed}
            </span>
            <span className='d-flex align-items-center gap-1'>
              <i className='ri-car-fill'></i>
              {bodyType}
            </span>
            
          </div>

          <button className='w-100 car_item-btn car_btn-details'>
          <Link to={`/cars/${carName}`}>Details</Link>

           
          </button>
        </div>
      </div>
    </Col>
  );
};

export default CarItem;
