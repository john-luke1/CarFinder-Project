import React from "react";
import "../../style/car-card.css";
import { Col } from 'reactstrap';
import { Link } from "react-router-dom";


const ModelCard = (props) => {
  
  const { id, modelName, speed,brand, imgUrl, price } = props.item;

 
  return (
    <Col lg='3' md='4' sm='6' xs='6' className='mt-4'>
    <div className="car__item">
      <div className="car__img">
        <img src={imgUrl} alt="model-img" className="w-50" />
      </div>
      <div className="model__content">
        <h5>
          <Link to={`/model/${id}`}>{modelName}</Link>
        </h5>
        <div className=" d-flex align-items-center justify-content-between">
          <span className="model__price">₱{price}</span>
          <span className="model__speed">  <i className='ri-timer-flash-fill'></i>{speed}</span>
          </div>
         <div className="brands">
          <span className="model__brand">  <i className='ri-building-2-line'></i>{brand}</span>
</div>
         
        
      </div>
    </div>
    </Col>
  );
};
export default ModelCard;
