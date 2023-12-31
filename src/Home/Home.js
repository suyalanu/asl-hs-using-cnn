import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import handsign from "../Img/handsign.jpg";
import handsign1 from "../Img/handsign1.png";
import handsign2 from "../Img/handsign2.png";
import handsign3 from "../Img/handsign3.jpeg";
import handsign4 from "../Img/handsign4.jpeg";
import handsign5 from "../Img/handsign5.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,
  };
  const slideStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "300px", // Set a fixed height for the slider container
  };

  return (
    <>
      <Header />
      <div className="container">
        <Slider {...sliderSettings}>
          <div style={slideStyles}>
            <img src={handsign} alt="handsign" />
          </div>
          <div style={slideStyles}>
            <img src={handsign1} alt="handsign1" />
          </div>
          {/* <div style={slideStyles}>
            <img src={handsign2} alt="handsign2" />
          </div> */}
          <div style={slideStyles}>
            <img src={handsign3} alt="handsign2" />
          </div>
          <div style={slideStyles}>
            <img src={handsign4} alt="handsign2" />
          </div>
          <div style={slideStyles}>
            <img src={handsign5} alt="handsign2" />
          </div>
        </Slider>
      </div>
      <Footer />
    </>
  );
};

export default Home;
