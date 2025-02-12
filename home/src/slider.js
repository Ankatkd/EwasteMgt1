import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const settings = {
    dots: false,
    infinite: false, // Stops infinite scrolling
    speed: 800, // Slow transition speed
    slidesToShow: 3, // Number of visible slides
    slidesToScroll: 1, // Scroll one slide at a time
    arrows: true, // Show navigation arrows
  };

  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <Slider {...settings}>
        <div>
          <img src="image1.jpg" alt="Slide 1" style={{ width: "100%" }} />
        </div>
        <div>
          <img src="image2.jpg" alt="Slide 2" style={{ width: "100%" }} />
        </div>
        <div>
          <img src="image3.jpg" alt="Slide 3" style={{ width: "100%" }} />
        </div>
        <div>
          <img src="image4.jpg" alt="Slide 4" style={{ width: "100%" }} />
        </div>
        <div>
          <img src="image5.jpg" alt="Slide 5" style={{ width: "100%" }} />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
