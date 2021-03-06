import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

function ImgSlider() {

    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="/images/slider-badging.jpg" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-badag.jpg" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scale.jpg" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scales.jpg" />
      </Wrap>
    </Carousel>
  );
}

export default ImgSlider
const Carousel = styled(Slider)`
  margin-top: 25px;

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: visible;
  }
  button {
    z-index: 1;
  }
`;
const Wrap = styled.div`
  img {
    border: 4px solid transparent;
    border-radius: 2%;
    width: 100%;
    height: 100%;
    
    -webkit-box-shadow: 0px 10px 13px -7px #000000,
      32px 50px 15px 9px rgba(0, 0, 0, 0);
    box-shadow: 0px 10px 13px -7px #000000, 32px 50px 15px 9px rgba(0, 0, 0, 0);
    transition-duration:300ms;
    &:hover{
        border: 4px solid rgba(249,249,249,0.8);
    }
}
`;