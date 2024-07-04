import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import silder1 from "../../assets/sliderimg/1.png";
import silder2 from "../../assets/sliderimg/2.png";
import silder3 from "../../assets/sliderimg/3.png";
import silder4 from "../../assets/sliderimg/4.png";
import silder5 from "../../assets/sliderimg/5.png";
import silder6 from "../../assets/sliderimg/6.png";
import silder7 from "../../assets/sliderimg/7.png";
import silder8 from "../../assets/sliderimg/8.png";
import silder9 from "../../assets/sliderimg/9.png";
import silder10 from "../../assets/sliderimg/10.png";
import silder11 from "../../assets/sliderimg/11.png";
import silder12 from "../../assets/sliderimg/12.png";
import silder13 from "../../assets/sliderimg/13.png";
import silder14 from "../../assets/sliderimg/14.png";
import silder15 from "../../assets/sliderimg/15.png";
import silder16 from "../../assets/sliderimg/oman slider logo collabration.png";
import silder17 from "../../assets/sliderimg/turkey slider logo collabration.png";
import silder18 from "../../assets/sliderimg/16.png";
import silder19 from "../../assets/sliderimg/17.png";
import silder20 from "../../assets/sliderimg/18.png";
import silder21 from "../../assets/sliderimg/19.png";
import silder22 from "../../assets/sliderimg/20.png";
import silder23 from "../../assets/sliderimg/21.png";
import silder24 from "../../assets/sliderimg/22.png";
import silder25 from "../../assets/sliderimg/23.png";
import silder26 from "../../assets/sliderimg/24.png";
import silder27 from "../../assets/sliderimg/25.png";
import silder28 from "../../assets/sliderimg/26.png";
import silder29 from "../../assets/sliderimg/27.png";
import silder30 from "../../assets/sliderimg/28.png";
import silder31 from "../../assets/sliderimg/29.png";
import silder32 from "../../assets/sliderimg/30.png";
import silder33 from "../../assets/sliderimg/31.png";
import silder34 from "../../assets/sliderimg/32.png";

const settings = {
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 800,
  arrows: false,
  dots: false,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
};

const imageStyle = {
  width: "70%", // Set a fixed width (adjust as needed)
  height: "100%", // Maintain the image's aspect ratio
};

const partners = [
  silder1,
  silder2,
  silder3,
  silder4,
  silder5,
  silder6,
  silder7,
  silder8,
  silder9,
  silder10,
  silder11,
  silder12,
  silder13,
  silder14,
  silder15,
  silder16,
  silder17,
  silder18,
  silder19,
  silder20,
  silder21,
  silder22,
  silder23,
  silder24,
  silder25,
  silder26,
  silder27,
  silder28,
  silder29,
  silder30,
  silder31,
  silder32,
  silder33,
  silder34,
];

const PartnerCarousel = () => {
  return (
    <div className="m-auto">
      <div className="d-flex">
      <div className="container bg-white m-auto" style={{width: "70%"}}>
          <Slider
            {...settings}
            style={{
              display: "flex !important",
              alignItems: "center !important",
            }}
          >
            {partners.map((partner, index) => (
              <div key={index}>
                <img
                  src={partner}
                  alt={`Partner ${index + 1}`}
                  className="p-0 m-1 img-responsive"
                  style={imageStyle}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default PartnerCarousel;
