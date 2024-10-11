import React from 'react'
import { Col } from 'reactstrap'
import {Link} from 'react-router-dom'
import '../../style/dealer-item.css'


const DealerItem = (props) => {
        const { imgUrl, dealer, address } = props.item;


        return (
            <Col lg='4' md='6' sm='12' className='mb-4'>
              <div className='dealer_item'>
                <div className='dealer_img'>
                  <img src={imgUrl} alt='' className='w-10' />
                </div>
                <div className='dealer_item-content mt-4'>
                  <h4 className='section_title text-center'>{dealer}</h4>
                  <h6 className='dealer_under text-center mt'>{address}</h6>
        
                 
        
                  <button className='w-100 dealer_item-btn dealer_btn-details'>
                  <Link to={`/dealer/${dealer}`}>Show Details</Link>
        
                  </button>
                </div>
              </div>
            </Col>
          );
        };
        export default DealerItem;
