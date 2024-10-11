import React from "react";
import { Container, Row, Col} from "reactstrap";
import { Link } from "react-router-dom";
import '../../style/Footer.css';
import logo from "../../assests/logo.png";




const Footer = () => {

  return (
    <footer className="footer">
      <Container>
        <Row className="mt-4">
          <Col lg='6' md='12' sm='12'>
            <div className="f-logo footer__logo mt=4" style={{fontSize:'1.5rem'}}>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <img src={logo} alt="Logo" className="Logo-footer"/>
                  <span>CarFinder</span>
                </Link>
            </div>
            <p className="footer__logo-content">
            Browse is a new platform for finding brand new cars. It helps you easily find cars and connect with legitimate dealers who will surely assist you.  
            </p>
          </Col>
          <Col lg='6' md='12' sm='12'>
            <div className="mb-2">
              <h5 className="footer__link-title mb-4">Head Office</h5>
              <p className="office__info">123 Mahay, Butuan City, Philippines</p>
              <p className="office__info">Phone: +0995345875365</p>
              <p className="office__info">Email: mjoyperez@gmail.com</p>
            </div>
          </Col>
          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i className="ri-copyright-line"></i>Copyright 2024, 
                Moralde & Perez. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;