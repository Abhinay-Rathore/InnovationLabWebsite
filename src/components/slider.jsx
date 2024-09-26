import React from "react";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../styles/slider.css'; 

const ImageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide">
          <img src="./assets/images/slider1.jpg" alt="Collaborating for Global Impact" />
          <div className="text-overlay">
            <h2>Collaborating for Global Impact</h2>
            <p>Ongoing Collaborated Projects Across the Globe</p>
          </div>
        </div>
        <div className="slide">
          <img src="./assets/images/slider2.jpg" alt="Another Project" />
          <div className="text-overlay">
            <h2>Another Project</h2>
            <p>Making a difference worldwide</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
