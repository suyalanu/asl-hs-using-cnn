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
import Banner from "../Components/Banner";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container"></div>
      <div className="desc">
        <Banner />
        <ProjectDes />
      </div>
      <Footer />
    </>
  );
};

export default Home;
