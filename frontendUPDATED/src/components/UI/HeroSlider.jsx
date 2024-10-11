import React from "react";
import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import '../../style/Hero-slider.css';


const NextArrow = ({ onClick }) => (
  <div className="custom-arrow next" onClick={onClick}>
    <FaArrowRight style={{ color: "#fff", fontSize: "25px" }} />
  </div>
);


const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow prev" onClick={onClick}>
    <FaArrowLeft style={{ color: "#fff", fontSize: "25px" }} />
  </div>
);

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 1000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider {...settings} className="hero__slider">
      <div className="slider__item slider__item-01 mt0">
        <Container>
          <div className="slider__content">
            <h4 className="text-light mb-3">Buy Now!</h4>
            <h1 className="text-light mb-4">Reserve Now and Get 5% Off</h1>
            <button className="btn reserve__btn mt-4">
              <Link to="/dealer">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-02 mt0">
        <Container>
          <div className="slider__content">
            <h4 className="text-light mb-3">Buy Now!</h4>
            <h1 className="text-light mb-4">Reserve Now and Get 5% Off</h1>
            <button className="btn reserve__btn mt-4">
              <Link to="/dealer">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-03 mt0">
        <Container>
          <div className="slider__content">
            <h4 className="text-light mb-3">Buy Now!</h4>
            <h1 className="text-light mb-4">Reserve Now and Get 5% Off</h1>
            <button className="btn reserve__btn mt-4">
              <Link to="/dealer">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default HeroSlider;
