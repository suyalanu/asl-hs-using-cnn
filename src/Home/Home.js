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
import ProjectDes from "../Components/ProjectDes";

const Home = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="row about-slider">
          {/* <h2 className="heading">Team Introduction</h2> */}
          <Slider {...sliderSettings}>
            <div className="about-slider-item">
              <div className="slides">
                <img src={handsign} alt="handsign" />
              </div>
            </div>
            <div className="about-slider-item">
              <div className="slides">
                <img src={handsign1} alt="handsign1" />
              </div>
            </div>
            <div className="about-slider-item">
              <div className="slides">
                <img src={handsign3} alt="handsign2" />
              </div>
            </div>
            <div className="about-slider-item">
              <div className="slides">
                <img src={handsign4} alt="handsign2" />
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="desc">
        <ProjectDes />
      </div>
      <Footer />
    </>
  );
};

export default Home;
